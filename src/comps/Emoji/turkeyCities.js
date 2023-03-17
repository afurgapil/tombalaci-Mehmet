let turkeyCities = [
  { name: "Adana", emojis: ["🌶️", "🥩", "🏢"] },
  {
    name: "Adıyaman",
    emojis: ["🏜️", "🌅", "🕌"],
  },
  {
    name: "Afyonkarahisar",
    emojis: ["🏞️", "🏛️", "🍂"],
  },
  {
    name: "Ağrı",
    emojis: ["❄️", "🏔️", "🕍"],
  },
  {
    name: "Amasya",
    emojis: ["🍎", "🏛️", "🍂"],
  },
  {
    name: "Ankara",
    emojis: ["🏛️", "🦃", "🌳"],
  },
  {
    name: "Antalya",
    emojis: ["🏖️", "🏊‍♂️", "🌞"],
  },
  {
    name: "Artvin",
    emojis: ["🏔️", "🌲", "🌊"],
  },
  {
    name: "Aydın",
    emojis: ["🌊", "🏖️", "🍊"],
  },
  {
    name: "Balıkesir",
    emojis: ["🏖️", "🏞️", "🌊"],
  },
  {
    name: "Bilecik",
    emojis: ["🏰", "🍂", "🌺"],
  },
  {
    name: "Bingöl",
    emojis: ["🏞️", "🍂", "🕌"],
  },
  {
    name: "Bitlis",
    emojis: ["🏞️", "🌨️", "🕍"],
  },
  {
    name: "Bolu",
    emojis: ["🏞️", "🌲", "❄️"],
  },
  {
    name: "Burdur",
    emojis: ["🏞️", "🏰", "🍂"],
  },
  {
    name: "Bursa",
    emojis: ["🏰", "🌸", "🏞️"],
  },
  {
    name: "Çanakkale",
    emojis: ["🏰", "🏖️", "🌊"],
  },
  {
    name: "Çankırı",
    emojis: ["🏰", "🌨️", "🍂"],
  },
  {
    name: "Çorum",
    emojis: ["🏛️", "🌽", "🍂"],
  },
  {
    name: "Denizli",
    emojis: ["🏛️", "🏞️", "🍊"],
  },
  {
    name: "Diyarbakır",
    emojis: ["🏰", "🍨", "🍢"],
  },
  {
    name: "Edirne",
    emojis: ["🏰", "🍂", "🌺"],
  },
  {
    name: "Elazığ",
    emojis: ["🏰", "🌄", "🕍"],
  },
  {
    name: "Erzincan",
    emojis: ["🏛️", "🍂", "🌲"],
  },
  {
    name: "Erzurum",
    emojis: ["🏔️", "🌨️", "🕍"],
  },
  {
    name: "Eskişehir",
    emojis: ["🏰", "🍂", "🌸"],
  },
  {
    name: "Gaziantep",
    emojis: ["🍗", "🍢", "🍺"],
  },
  {
    name: "Giresun",
    emojis: ["🌊", "🏛️", "🌲"],
  },
  {
    name: "Gümüşhane",
    emojis: ["🌲", "🌨️", "🏰"],
  },
  {
    name: "Hakkari",
    emojis: ["🏔️", "❄️", "🕌"],
  },
  {
    name: "Hatay",
    emojis: ["🌴", "🏰", "🍢"],
  },
  {
    name: "Isparta",
    emojis: ["🏞️", "🏰", "🍂"],
  },
  {
    name: "Mersin",
    emojis: ["🏖️", "🏊‍♂️", "🍊"],
  },
  {
    name: "Istanbul",
    emojis: ["🌉", "🕌", "🌞"],
  },
  {
    name: "Izmir",
    emojis: ["🏛️", "🌊", "🌞"],
  },
  {
    name: "Kars",
    emojis: ["🏔️", "❄️", "🕍"],
  },
  {
    name: "Kastamonu",
    emojis: ["🌲", "🏰", "🌧️"],
  },
  {
    name: "Kayseri",
    emojis: ["🏰", "❄️", "🏞️"],
  },
  {
    name: "Kırklareli",
    emojis: ["🏰", "🍂", "🌸"],
  },
  {
    name: "Kırşehir",
    emojis: ["🏰", "🍂", "🍁"],
  },
  {
    name: "Kocaeli",
    emojis: ["🌉", "🌊", "🌞"],
  },
  {
    name: "Konya",
    emojis: ["🕌", "🏞️", "🌾"],
  },
  {
    name: "Kütahya",
    emojis: ["🏰", "🍂", "🍁"],
  },
  {
    name: "Malatya",
    emojis: ["🏰", "🌄", "🍢"],
  },
  {
    name: "Manisa",
    emojis: ["🏛️", "🍊", "🏞️"],
  },
  {
    name: "Kahramanmaraş",
    emojis: ["🏰", "🌄", "🍢"],
  },
  {
    name: "Mardin",
    emojis: ["🏰", "🕌", "🍢"],
  },
  {
    name: "Muğla",
    emojis: ["🏖️", "🌊", "🍹"],
  },
  {
    name: "Muş",
    emojis: ["🏰", "🌨️", "🕍"],
  },
  {
    name: "Nevşehir",
    emojis: ["🏰", "🌄", "🌾"],
  },
  {
    name: "Niğde",
    emojis: ["🏰", "🌄", "🌾"],
  },
  {
    name: "Ordu",
    emojis: ["🌊", "🏛️", "🌲"],
  },
  {
    name: "Osmaniye",
    emojis: ["🏰", "🍢", "🏞️"],
  },
  {
    name: "Rize",
    emojis: ["🌊", "🏰", "🍵"],
  },
  {
    name: "Sakarya",
    emojis: ["🌉", "🏖️", "🌊"],
  },
  {
    name: "Samsun",
    emojis: ["🌊", "🏛️", "🌲"],
  },
  {
    name: "Siirt",
    emojis: ["🏰", "🍢", "🕌"],
  },
  {
    name: "Sinop",
    emojis: ["🌊", "🏰", "🌲"],
  },
  {
    name: "Sivas",
    emojis: ["🏰", "🌨️", "🕌"],
  },
  {
    name: "Tekirdağ",
    emojis: ["🏰", "🏖️", "🍺"],
  },
  {
    name: "Tokat",
    emojis: ["🏰", "🌲", "🍂"],
  },
  {
    name: "Trabzon",
    emojis: ["🏰", "🌊", "🌲"],
  },
  {
    name: "Tunceli",
    emojis: ["🏞️", "🌨️", "🕍"],
  },
  {
    name: "Şanlıurfa",
    emojis: ["🏰", "🍢", "🌵"],
  },
  {
    name: "Uşak",
    emojis: ["🏰", "🍂", "🍁"],
  },
  {
    name: "Van",
    emojis: ["🏔️", "❄️", "🕍"],
  },
  {
    name: "Yalova",
    emojis: ["🏰", "🌊", "🌞"],
  },
  {
    name: "Yozgat",
    emojis: ["🏰", "🌄", "🌾"],
  },
  {
    name: "Zonguldak",
    emojis: ["🏰", "🌊", "🍂"],
  },
  {
    name: "Aksaray",
    emojis: ["🏰", "🌋", "🕌"],
  },
  {
    name: "Bayburt",
    emojis: ["🌲", "🏔️", "🌞"],
  },
  {
    name: "Karaman",
    emojis: ["🏛️", "🕌", "🌳"],
  },
  {
    name: "Kirikkale",
    emojis: ["🌾", "🏭", "🏛️"],
  },
  {
    name: "Batman",
    emojis: ["🦇", "🏭", "🌳"],
  },
  {
    name: "Sirnak",
    emojis: ["🌵", "⛰️", "🏭"],
  },
  {
    name: "Bartin",
    emojis: ["🏖️", "🌊", "🏰"],
  },
  {
    name: "Ardahan",
    emojis: ["❄️", "⛰️", "🏭"],
  },
  {
    name: "Igdir",
    emojis: ["🗻", "🌞", "🕌"],
  },
  {
    name: "Yalova",
    emojis: ["🏖️", "🌊", "🍂"],
  },
  {
    name: "Karabuk",
    emojis: ["🏭", "🏰", "🍂"],
  },
  {
    name: "Kilis",
    emojis: ["🏢", "🕌", "🌳"],
  },
  {
    name: "Osmaniye",
    emojis: ["🍊", "🏖️", "🏰"],
  },
  {
    name: "Duzce",
    emojis: ["🏞️", "🏭", "🍂"],
  },
];
export default turkeyCities;
