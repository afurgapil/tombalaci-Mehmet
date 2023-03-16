const heros = [
  { name: "Aatrox", emojis: ["🗡️", "🩸", "🔥"] },
  {
    name: "Ahri",
    emojis: ["🦊", "🔮", "❤️"],
  },
  {
    name: "Akali",
    emojis: ["🗡️", "👤", "💨"],
  },
  {
    name: "Akshan",
    emojis: ["🏹", "🪃", "👤"],
  },
  {
    name: "Alistar",
    emojis: ["🐮", "🛡️", "👊"],
  },
  {
    name: "Amumu",
    emojis: ["😢", "🔮", "🩸"],
  },
  {
    name: "Anivia",
    emojis: ["🦢", "❄️", "🌀"],
  },
  {
    name: "Annie",
    emojis: ["🧒", "🔥", "🧸"],
  },
  {
    name: "Aphelios",
    emojis: ["🏹", "🌙", "🔥"],
  },
  {
    name: "Ashe",
    emojis: ["🏹", "❄️", "🐻"],
  },
  {
    name: "Aurelion Sol",
    emojis: ["🐉", "🌟", "🌀"],
  },
  {
    name: "Azir",
    emojis: ["🦅", "👑", "🌞"],
  },
  {
    name: "Bard",
    emojis: ["🎶", "🧚", "🌌"],
  },
  {
    name: "Bel'Veth",
    emojis: ["😈", "🐡", "🍴"],
  },
  {
    name: "Blitzcrank",
    emojis: ["🤖", "⚡", "👊"],
  },
  {
    name: "Brand",
    emojis: ["🔥", "💀", "🌋"],
  },
  {
    name: "Braum",
    emojis: ["🛡️", "❤️", "👊"],
  },
  {
    name: "Caitlyn",
    emojis: ["🔫", "👮", "🕵️"],
  },
  {
    name: "Camille",
    emojis: ["🗡️", "🦵", "🕰️"],
  },
  {
    name: "Cassiopeia",
    emojis: ["🐍", "👑", "🐲"],
  },
  {
    name: "Cho'Gath",
    emojis: ["🐛", "🍴", "🔪"],
  },
  {
    name: "Corki",
    emojis: ["✈️", "🔥", "🍾"],
  },
  {
    name: "Darius",
    emojis: ["🗡️", "💪", "🩸"],
  },
  {
    name: "Diana",
    emojis: ["🌙", "🗡️", "🔮"],
  },
  {
    name: "Dr. Mundo",
    emojis: ["👨‍⚕️", "💉", "🏋️"],
  },
  {
    name: "Draven",
    emojis: ["🎭", "🔪", "👑"],
  },
  {
    name: "Ekko",
    emojis: ["⏰", "👊", "🛹"],
  },
  {
    name: "Elise",
    emojis: ["🕷️", "🕸️", "👩"],
  },
  {
    name: "Evelynn",
    emojis: ["😈", "🗡️", "👀"],
  },
  {
    name: "Ezreal",
    emojis: ["🏹", "🔮", "💎"],
  },
  {
    name: "Fiddlesticks",
    emojis: ["🎃", "🦆", "🗡️"],
  },
  {
    name: "Fiora",
    emojis: ["🗡️", "👩", "🩸"],
  },
  {
    name: "Fizz",
    emojis: ["🐟", "🎣", "💦"],
  },
  {
    name: "Galio",
    emojis: ["🗿", "🛡️", "🕊️"],
  },
  {
    name: "Gangplank",
    emojis: ["🏴‍☠️", "🔫", "💰"],
  },
  {
    name: "Garen",
    emojis: ["⚔️", "👑", "💪"],
  },
  {
    name: "Gnar",
    emojis: ["🦕", "🦖", "❄️"],
  },
  {
    name: "Gragas",
    emojis: ["🍺", "🍾", "🛡️"],
  },
  {
    name: "Graves",
    emojis: ["🔫", "🤠", "🍺"],
  },
  {
    name: "Gwen",
    emojis: ["✂", "🪡", "💨"],
  },
  {
    name: "Hecarim",
    emojis: ["🐎", "💀", "🔥"],
  },
  {
    name: "Heimerdinger",
    emojis: ["🧑‍🔬", "🔬", "🤖"],
  },
  {
    name: "Illaoi",
    emojis: ["🐙", "🗡️", "👑"],
  },
  {
    name: "Irelia",
    emojis: ["🗡️", "👩", "🌸"],
  },
  {
    name: "Ivern",
    emojis: ["🌿", "🌳", "🌼"],
  },
  {
    name: "Janna",
    emojis: ["🌪️", "🧚", "🌀"],
  },
  {
    name: "Jarvan IV",
    emojis: ["🛡️", "⚔️", "👑"],
  },
  {
    name: "Jax",
    emojis: ["🗡️", "🛡️", "💪"],
  },
  {
    name: "Jayce",
    emojis: ["🦾", "🤖", "⚡"],
  },
  {
    name: "Jhin",
    emojis: ["🔫", "🩸", "🎭"],
  },
  {
    name: "Jinx",
    emojis: ["💣", "🤡", "🔥"],
  },
  {
    name: "K'Sante",
    emojis: ["🛡️", "🪨", "⚔️"],
  },
  {
    name: "Kai'Sa",
    emojis: ["🐛", "👽", "🗡️"],
  },
  {
    name: "Kalista",
    emojis: ["🏹", "🩸", "🕸️"],
  },
  {
    name: "Karma",
    emojis: ["🧘", "🔮", "💫"],
  },
  {
    name: "Karthus",
    emojis: ["💀", "🎶", "🔥"],
  },
  {
    name: "Kassadin",
    emojis: ["👽", "🌀", "🌌"],
  },
  {
    name: "Katarina",
    emojis: ["🗡️", "🩸", "😈"],
  },
  {
    name: "Kayle",
    emojis: ["🗡️", "👼", "🔥"],
  },
  {
    name: "Kayn",
    emojis: ["🔪", "🌕", "🌑"],
  },
  {
    name: "Kennen",
    emojis: ["🦝", "⚡", "🔥"],
  },
  {
    name: "Kha'Zix",
    emojis: ["🐛", "🔪", "🌌"],
  },
  {
    name: "Kindred",
    emojis: ["🐺", "🐑", "🏹"],
  },
  {
    name: "Kled",
    emojis: ["🐴", "🔪", "🤠"],
  },
  {
    name: "Kog'Maw",
    emojis: ["🐛", "👄", "🔥"],
  },
  {
    name: "LeBlanc",
    emojis: ["👑", "🗡️", "👩"],
  },
  {
    name: "Lee Sin",
    emojis: ["🥋", "👊", "👀"],
  },
  {
    name: "Leona",
    emojis: ["🛡️", "🌞", "⚔️"],
  },
  {
    name: "Lillia",
    emojis: ["🦊", "🌸", "🌀"],
  },
  {
    name: "Lissandra",
    emojis: ["❄️", "👑", "🕯️"],
  },
  {
    name: "Lucian",
    emojis: ["🔫", "💔", "👻"],
  },
  {
    name: "Lulu",
    emojis: ["🧚", "🎂", "🐉"],
  },
  {
    name: "Lux",
    emojis: ["💫", "🔮", "✨"],
  },
  {
    name: "Malphite",
    emojis: ["🗿", "🌋", "⛰️"],
  },
  {
    name: "Malzahar",
    emojis: ["👁️", "🐛", "🔥"],
  },
  {
    name: "Maokai",
    emojis: ["🌳", "🍂", "🎃"],
  },
  {
    name: "Master Yi",
    emojis: ["🗡️", "👺", "🌕"],
  },
  {
    name: "Miss Fortune",
    emojis: ["🔫", "💰", "💣"],
  },
  {
    name: "Mordekaiser",
    emojis: ["🗡️", "💀", "🔥"],
  },
  {
    name: "Morgana",
    emojis: ["🖤", "👼", "🕊️"],
  },
  {
    name: "Nami",
    emojis: ["🐟", "🌊", "🧜"],
  },
  {
    name: "Nasus",
    emojis: ["🐕", "🗡️", "🔥"],
  },
  {
    name: "Nautilus",
    emojis: ["⚓", "🐙", "🛡️"],
  },
  {
    name: "Neeko",
    emojis: ["🦎", "🌺", "🌈"],
  },
  {
    name: "Nidalee",
    emojis: ["🐆", "🏹", "🗡️"],
  },
  {
    name: "Nilah",
    emojis: ["💧", "🌙", "🌀"],
  },
  {
    name: "Nocturne",
    emojis: ["🌃", "🗡️", "😈"],
  },
  {
    name: "Nunu & Willump",
    emojis: ["🐻", "🐧", "❄️"],
  },
  {
    name: "Olaf",
    emojis: ["⚔️", "🛡️", "🍺"],
  },
  {
    name: "Orianna",
    emojis: ["⏰", "🤖", "⚙️"],
  },
  {
    name: "Ornn",
    emojis: ["🐗", "🛠️", "❄️"],
  },
  {
    name: "Pantheon",
    emojis: ["🗡️", "🛡️", "🌞"],
  },
  {
    name: "Poppy",
    emojis: ["🐴", "🛡️", "🤏"],
  },
  {
    name: "Pyke",
    emojis: ["🗡️", "🦈", "💰"],
  },
  {
    name: "Qiyana",
    emojis: ["🌺", "🔥", "💎"],
  },
  {
    name: "Quinn",
    emojis: ["🦅", "🏹", "🔥"],
  },
  {
    name: "Rakan",
    emojis: ["🐦", "💃", "🌸"],
  },
  {
    name: "Rammus",
    emojis: ["🐢", "🛡️", "💨"],
  },
  {
    name: "Rek'Sai",
    emojis: ["🐛", "👁️", "🌌"],
  },
  {
    name: "Rell",
    emojis: ["🛡️", "🐴", "🔗"],
  },
  {
    name: "Renekton",
    emojis: ["🐊", "🗡️", "🔥"],
  },
  {
    name: "Reneta Glasc",
    emojis: ["☠", "💨", "🔥"],
  },
  {
    name: "Rengar",
    emojis: ["🐆", "🗡️", "😼"],
  },
  {
    name: "Riven",
    emojis: ["🗡️", "🔥", "👊"],
  },
  {
    name: "Rumble",
    emojis: ["🦔", "🔥", "🛠️"],
  },
  {
    name: "Ryze",
    emojis: ["📜", "🔮", "⚡"],
  },
  {
    name: "Samira",
    emojis: ["🗡️", "🔫", "💃"],
  },
  {
    name: "Sejuani",
    emojis: ["🐷", "🛡️", "❄️"],
  },
  {
    name: "Senna",
    emojis: ["🔫", "🕯️", "💀"],
  },
  {
    name: "Seraphine",
    emojis: ["🎤", "🎶", "💖"],
  },
  {
    name: "Sett",
    emojis: ["🥊", "🦍", "💪"],
  },
  {
    name: "Shaco",
    emojis: ["🃏", "🗡️", "😈"],
  },
  {
    name: "Shen",
    emojis: ["🗡️", "🛡️", "💫"],
  },
  {
    name: "Shyvana",
    emojis: ["🐲", "🔥", "🗡️"],
  },
  {
    name: "Singed",
    emojis: ["🧪", "💨", "😷"],
  },
  {
    name: "Sion",
    emojis: ["💀", "🔨", "⚔️"],
  },
  {
    name: "Sivir",
    emojis: ["🛡️", "🗡️", "💰"],
  },
  {
    name: "Skarner",
    emojis: ["🦂", "🗡️", "🔮"],
  },
  {
    name: "Sona",
    emojis: ["🎼", "🎵", "🌟"],
  },
  {
    name: "Soraka",
    emojis: ["🦄", "🌟", "💫"],
  },
  {
    name: "Swain",
    emojis: ["🕊️", "🔮", "🔥"],
  },
  {
    name: "Sylas",
    emojis: ["🔒", "🗡️", "🔮"],
  },
  {
    name: "Syndra",
    emojis: ["🔮", "🌌", "💀"],
  },
  {
    name: "Tahm Kench",
    emojis: ["🐟", "🎩", "👅"],
  },
  {
    name: "Taliyah",
    emojis: ["🌪️", "🗻", "💎"],
  },
  {
    name: "Talon",
    emojis: ["🗡️", "🔪", "🔥"],
  },
  {
    name: "Taric",
    emojis: ["💎", "🛡️", "🌟"],
  },
  {
    name: "Teemo",
    emojis: ["🐰", "🌼", "🍄"],
  },
  {
    name: "Thresh",
    emojis: ["👻", "🗝️", "🔗"],
  },
  {
    name: "Tristana",
    emojis: ["🐰", "🚀", "💥"],
  },
  {
    name: "Trundle",
    emojis: ["🐭", "🏋️", "🧊"],
  },
  {
    name: "Tryndamere",
    emojis: ["🗡️", "🔥", "💪"],
  },
  {
    name: "Twisted Fate",
    emojis: ["🎴", "🔮", "💰"],
  },
  {
    name: "Twitch",
    emojis: ["🐀", "🔫", "💉"],
  },
  {
    name: "Udyr",
    emojis: ["🐻", "🐍", "🐢"],
  },
  {
    name: "Urgot",
    emojis: ["🤖", "🦾", "🔫"],
  },
  {
    name: "Varus",
    emojis: ["🏹", "🌲", "🔮"],
  },
  {
    name: "Vayne",
    emojis: ["🏹", "🌕", "🦇"],
  },
  {
    name: "Veigar",
    emojis: ["🧙", "🔮", "💥"],
  },
  {
    name: "Vel'Koz",
    emojis: ["🦑", "🔮", "🌌"],
  },
  {
    name: "Vex",
    emojis: ["😈", "😱", "👻"],
  },
  {
    name: "Vi",
    emojis: ["🥊", "🔨", "💪"],
  },
  {
    name: "Viego",
    emojis: ["🗡️", "💀", "🌺"],
  },
  {
    name: "Viktor",
    emojis: ["🤖", "🔧", "🔮"],
  },
  {
    name: "Vladimir",
    emojis: ["🩸", "🗡️", "🧛"],
  },
  {
    name: "Volibear",
    emojis: ["🐻", "⚡", "🌩️"],
  },
  {
    name: "Warwick",
    emojis: ["🐺", "🔪", "💉"],
  },
  {
    name: "Wukong",
    emojis: ["🐒", "🗡️", "💪"],
  },
  {
    name: "Xayah",
    emojis: ["🦜", "🏹", "🌟"],
  },
  {
    name: "Xerath",
    emojis: ["🧙", "🔮", "⚡"],
  },
  {
    name: "Xin Zhao",
    emojis: ["🗡️", "🛡️", "💪"],
  },
  {
    name: "Yasuo",
    emojis: ["🗡️", "🔥", "🌪️"],
  },
  {
    name: "Yone",
    emojis: ["🗡️", "🔥", "💨"],
  },
  {
    name: "Yorick",
    emojis: ["💀", "🌹", "🔮"],
  },
  {
    name: "Yuumi",
    emojis: ["🐱", "📚", "🌟"],
  },
  {
    name: "Zac",
    emojis: ["💦", "🧪", "🔬"],
  },
  {
    name: "Zed",
    emojis: ["🗡️", "💀", "🔥"],
  },
  {
    name: "Zeri",
    emojis: ["🏃‍♀️", "☇", "⚡"],
  },
  {
    name: "Ziggs",
    emojis: ["💣", "🧪", "🌋"],
  },
  {
    name: "Zilean",
    emojis: ["⏳", "🕰️", "🧙"],
  },
  {
    name: "Zoe",
    emojis: ["🧚", "🔮", "🌟"],
  },
  {
    name: "Zyra",
    emojis: ["🌱", "🌸", "🍃"],
  },
];

export default heros;
