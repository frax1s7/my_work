// Данные каталога. id совпадает с именем фото: img/guitars/<id>.jpg
// cat: electric | acoustic | amp | pedal
const items = [
  {
    id: "lp",
    name: "Gibson Les Paul Standard",
    cat: "electric",
    desc: "Два хамбакера и густой сустейн. Классика рока и блюза.",
  },
  {
    id: "sg",
    name: "Gibson SG Standard",
    cat: "electric",
    desc: "Лёгкий корпус с двумя рогами и два хамбакера. Агрессивный рок-звук.",
  },
  {
    id: "es335",
    name: "Gibson ES-335",
    cat: "electric",
    desc: "Полуакустическая гитара: тёплый звук для блюза, джаза и рока.",
  },
  {
    id: "flyingv",
    name: "Gibson Flying V",
    cat: "electric",
    desc: "Угловатая форма 1950-х, любимица хард-рока и металла.",
  },
  {
    id: "strat",
    name: "Fender Stratocaster",
    cat: "electric",
    desc: "Три сингла, тремоло и звонкий универсальный тембр.",
  },
  {
    id: "tele",
    name: "Fender Telecaster",
    cat: "electric",
    desc: "Простая конструкция и яркий колкий звук. Любимица кантри и рока.",
  },
  {
    id: "jaguar",
    name: "Fender Jaguar",
    cat: "electric",
    desc: "Короткая мензура и необычная электроника. Звук сёрфа и альтернативы.",
  },
  {
    id: "mustang",
    name: "Fender Mustang",
    cat: "electric",
    desc: "Компактная гитара с культовой репутацией в гранже и инди.",
  },
  {
    id: "jazzmaster",
    name: "Fender Jazzmaster",
    cat: "electric",
    desc: "Широкий корпус и объёмный звук. Сёрф, шугейз, инди.",
  },
  {
    id: "prs",
    name: "PRS Custom 24",
    cat: "electric",
    desc: "Два хамбакера и 24 лада. Современная классика.",
  },
  {
    id: "gretsch",
    name: "Gretsch G6120",
    cat: "electric",
    desc: "Полуакустик с фирменным звонким тембром рокабилли.",
  },
  {
    id: "jem7v",
    name: "Ibanez JEM7V",
    cat: "electric",
    desc: "Сигнатурная модель Стива Вая: тремоло Edge, DiMarzio, monkey grip.",
  },
  {
    id: "rg550",
    name: "Ibanez RG550 Genesis",
    cat: "electric",
    desc: "Переиздание культовой RG 1987 года: тонкий гриф, быстрое тремоло.",
  },
  {
    id: "az",
    name: "Ibanez AZ Prestige",
    cat: "electric",
    desc: "Классические формы и современная конструкция с удобным грифом.",
  },
  {
    id: "js",
    name: "Ibanez JS Joe Satriani",
    cat: "electric",
    desc: "Сигнатурная линейка Джо Сатриани.",
  },
  {
    id: "grx70qa",
    name: "Ibanez Gio GRX70QA",
    cat: "electric",
    desc: "Бюджетная Gio для начинающих с декоративным верхом.",
  },
  {
    id: "grg170dx",
    name: "Ibanez Gio GRG170DX",
    cat: "electric",
    desc: "Бюджетная Gio в формате RG с тонким грифом.",
  },
  {
    id: "af75",
    name: "Ibanez Artcore AF75",
    cat: "electric",
    desc: "Полуакустик Artcore: мягкий тёплый звук для джаза и блюза.",
  },
  {
    id: "g250",
    name: "Cort G250",
    cat: "electric",
    desc: "Универсальная электрогитара по доступной цене.",
  },
  {
    id: "kx300",
    name: "Cort KX300",
    cat: "electric",
    desc: "Доступная гитара для рока и металла.",
  },
  {
    id: "cr200",
    name: "Cort CR200",
    cat: "electric",
    desc: "Корпус в стиле Les Paul и два хамбакера, бюджетный вариант.",
  },
  {
    id: "mbm1",
    name: "Cort Matt Bellamy MBM-1",
    cat: "electric",
    desc: "Сигнатурная модель Мэтта Беллами из Muse.",
  },
  {
    id: "d28",
    name: "Martin D-28",
    cat: "acoustic",
    desc: "Эталонный дредноут: мощный низ и насыщенный звук.",
  },
  {
    id: "taylor214",
    name: "Taylor 214ce",
    cat: "acoustic",
    desc: "Электроакустика с яркой верхней частью и удобным грифом.",
  },
  {
    id: "fg800",
    name: "Yamaha FG800",
    cat: "acoustic",
    desc: "Популярная гитара для начинающих с честным звуком.",
  },
  {
    id: "cd60s",
    name: "Fender CD-60S",
    cat: "acoustic",
    desc: "Бюджетный дредноут для первых шагов в акустике.",
  },
  {
    id: "j45",
    name: "Gibson J-45",
    cat: "acoustic",
    desc: "Дредноут с тёплым звуком, любимый певцами-гитаристами.",
  },
  {
    id: "dsl40",
    name: "Marshall DSL40CR",
    cat: "amp",
    desc: "Ламповый комбо: британский драйв и два канала.",
  },
  {
    id: "bj",
    name: "Fender Blues Junior IV",
    cat: "amp",
    desc: "Ламповый комбик 15 Вт: чистый звук и мягкий перегруз.",
  },
  {
    id: "ac30",
    name: "Vox AC30",
    cat: "amp",
    desc: "Ламповый комбо с звонким верхом, звук британских групп 60-х.",
  },
  {
    id: "katana",
    name: "Boss Katana-50 MkII",
    cat: "amp",
    desc: "Транзисторный комбо с набором эффектов и моделями усилителей.",
  },
  {
    id: "twin",
    name: "Fender Twin Reverb",
    cat: "amp",
    desc: "Громкий ламповый комбо с кристально чистым звуком.",
  },
  {
    id: "ds1",
    name: "Boss DS-1",
    cat: "pedal",
    desc: "Оранжевая педаль дисторшна, знакомая гитаристам десятилетиями.",
  },
  {
    id: "ts9",
    name: "Ibanez Tube Screamer TS9",
    cat: "pedal",
    desc: "Овердрайв, который подталкивает ламповый усилитель в перегруз.",
  },
  {
    id: "wah",
    name: "Dunlop Cry Baby",
    cat: "pedal",
    desc: "Педаль вау для выразительных соло.",
  },
  {
    id: "dd8",
    name: "Boss DD-8",
    cat: "pedal",
    desc: "Цифровой дилей с несколькими режимами.",
  },
  {
    id: "muff",
    name: "Electro-Harmonix Big Muff Pi",
    cat: "pedal",
    desc: "Густой фузз, знакомый по рок-записям.",
  },
];
// Элементы страницы и текущий фильтр
const grid = document.getElementById("catalog"),
  empty = document.getElementById("empty"),
  q = document.getElementById("q");
let filter = "all";
// Создаём карточку для каждого товара
items.forEach(({ id, name, cat, desc }) => {
  const el = document.createElement("article");
  el.className = "card item";
  el.innerHTML = `<img alt="${name}" loading="lazy" width="400" height="400"><h3>${name}</h3><p>${desc}</p><button class="fav-btn" data-id="${id}" aria-pressed="false">В избранное</button>`;
  const img = el.querySelector("img");
  img.onerror = () => {
    img.onerror = null;
    img.src = `img/placeholder-${cat}.svg`;
  };
  img.src = `img/guitars/${id}.jpg`;
  el._f = { cat, name: name.toLowerCase(), text: (name + desc).toLowerCase() };
  grid.append(el);
});
// Показываем только товары, подходящие под фильтр и поиск
function apply() {
  let shown = 0;
  [...grid.children].forEach((el) => {
    const f = el._f;
    const ok =
      (filter === "all" || f.cat === filter || (f.cat !== filter && f.name.startsWith(filter))) &&
      f.text.includes(q.value.toLowerCase());
    el.hidden = !ok;
    shown += ok;
  });
  empty.hidden = shown > 0;
}
// Кнопки фильтров (категории и бренды)
document.querySelectorAll(".filters button").forEach(
  (b) =>
    (b.onclick = () => {
      filter = b.dataset.f;
      document
        .querySelectorAll(".filters button")
        .forEach((x) => x.setAttribute("aria-pressed", x === b));
      apply();
    }),
);
q.oninput = apply;
