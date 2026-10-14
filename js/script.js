const $ = (s, r = document) => r.querySelector(s);
const load = (k, d) => {
  try {
    return JSON.parse(localStorage.getItem(k)) ?? d;
  } catch {
    return d;
  }
};
const save = (k, v) => localStorage.setItem(k, JSON.stringify(v));

// Тема (localStorage: theme)
const root = document.documentElement;
root.dataset.theme = load(
  "theme",
  matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
);
$("#theme-toggle").onclick = () => {
  root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
  save("theme", root.dataset.theme);
};

// Меню и активная ссылка
const burger = $(".burger"),
  nav = $("#nav");
burger.onclick = () => burger.setAttribute("aria-expanded", nav.classList.toggle("open"));
const page = location.pathname.split("/").pop() || "index.html";
nav
  .querySelectorAll("a")
  .forEach((a) => a.getAttribute("href") === page && a.setAttribute("aria-current", "page"));
$("#year").textContent = new Date().getFullYear();

// Избранное (localStorage: fav)
let fav = load("fav", []);
const renderFav = () => {
  $("#fav-count").textContent = fav.length;
  document.querySelectorAll(".fav-btn").forEach((b) => {
    const on = fav.includes(b.dataset.id);
    b.setAttribute("aria-pressed", on);
    b.textContent = on ? "В избранном" : "В избранное";
  });
};
document.querySelectorAll(".fav-btn").forEach(
  (b) =>
    (b.onclick = () => {
      fav = fav.includes(b.dataset.id)
        ? fav.filter((x) => x !== b.dataset.id)
        : [...fav, b.dataset.id];
      save("fav", fav);
      renderFav();
    }),
);
renderFav();

// Поиск по блогу
const search = $("#search");
if (search)
  search.oninput = () => {
    const q = search.value.toLowerCase();
    document
      .querySelectorAll(".post")
      .forEach((p) => (p.hidden = !p.textContent.toLowerCase().includes(q)));
  };

// Форма контактов (localStorage: messages)
const form = $("#contact-form");
if (form) {
  const list = $("#msg-list");
  const render = () => {
    const msgs = load("messages", []);
    list.innerHTML = msgs.length ? "" : "<li>Пока нет отправленных сообщений.</li>";
    msgs.forEach((m) => {
      const li = document.createElement("li");
      li.textContent = `${m.name}: ${m.text}`;
      list.append(li);
    });
  };
  form.onsubmit = (e) => {
    e.preventDefault();
    save("messages", [
      ...load("messages", []),
      { name: form.name.value.trim(), text: form.text.value.trim() },
    ]);
    form.reset();
    render();
  };
  $("#clear-msgs").onclick = () => {
    localStorage.removeItem("messages");
    render();
  };
  render();
}
