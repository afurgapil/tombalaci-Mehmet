let turkeyCities = [
  { name: "Adana", emoji: ["🌶️", "🥩", "🏢"] },
  {
    name: "Adıyaman",
    emoji: ["🏜️", "🌅", "🕌"],
  },
  {
    name: "Afyonkarahisar",
    emoji: ["🏞️", "🏛️", "🍂"],
  },
  {
    name: "Ağrı",
    emoji: ["❄️", "🏔️", "🕍"],
  },
  {
    name: "Amasya",
    emoji: ["🍎", "🏛️", "🍂"],
  },
  {
    name: "Ankara",
    emoji: ["🏛️", "🦃", "🌳"],
  },
  {
    name: "Antalya",
    emoji: ["🏖️", "🏊‍♂️", "🌞"],
  },
  {
    name: "Artvin",
    emoji: ["🏔️", "🌲", "🌊"],
  },
  {
    name: "Aydın",
    emoji: ["🌊", "🏖️", "🍊"],
  },
  {
    name: "Balıkesir",
    emoji: ["🏖️", "🏞️", "🌊"],
  },
  {
    name: "Bilecik",
    emoji: ["🏰", "🍂", "🌺"],
  },
  {
    name: "Bingöl",
    emoji: ["🏞️", "🍂", "🕌"],
  },
  {
    name: "Bitlis",
    emoji: ["🏞️", "🌨️", "🕍"],
  },
  {
    name: "Bolu",
    emoji: ["🏞️", "🌲", "❄️"],
  },
  {
    name: "Burdur",
    emoji: ["🏞️", "🏰", "🍂"],
  },
  {
    name: "Bursa",
    emoji: ["🏰", "🌸", "🏞️"],
  },
  {
    name: "Çanakkale",
    emoji: ["🏰", "🏖️", "🌊"],
  },
  {
    name: "Çankırı",
    emoji: ["🏰", "🌨️", "🍂"],
  },
  {
    name: "Çorum",
    emoji: ["🏛️", "🌽", "🍂"],
  },
  {
    name: "Denizli",
    emoji: ["🏛️", "🏞️", "🍊"],
  },
  {
    name: "Diyarbakır",
    emoji: ["🏰", "🍨", "🍢"],
  },
  {
    name: "Edirne",
    emoji: ["🏰", "🍂", "🌺"],
  },
  {
    name: "Elazığ",
    emoji: ["🏰", "🌄", "🕍"],
  },
  {
    name: "Erzincan",
    emoji: ["🏛️", "🍂", "🌲"],
  },
  {
    name: "Erzurum",
    emoji: ["🏔️", "🌨️", "🕍"],
  },
  {
    name: "Eskişehir",
    emoji: ["🏰", "🍂", "🌸"],
  },
  {
    name: "Gaziantep",
    emoji: ["🍗", "🍢", "🍺"],
  },
  {
    name: "Giresun",
    emoji: ["🌊", "🏛️", "🌲"],
  },
  {
    name: "Gümüşhane",
    emoji: ["🌲", "🌨️", "🏰"],
  },
  {
    name: "Hakkari",
    emoji: ["🏔️", "❄️", "🕌"],
  },
  {
    name: "Hatay",
    emoji: ["🌴", "🏰", "🍢"],
  },
  {
    name: "Isparta",
    emoji: ["🏞️", "🏰", "🍂"],
  },
  {
    name: "Mersin",
    emoji: ["🏖️", "🏊‍♂️", "🍊"],
  },
  {
    name: "Istanbul",
    emoji: ["🌉", "🕌", "🌞"],
  },
  {
    name: "Izmir",
    emoji: ["🏛️", "🌊", "🌞"],
  },
  {
    name: "Kars",
    emoji: ["🏔️", "❄️", "🕍"],
  },
  {
    name: "Kastamonu",
    emoji: ["🌲", "🏰", "🌧️"],
  },
  {
    name: "Kayseri",
    emoji: ["🏰", "❄️", "🏞️"],
  },
  {
    name: "Kırklareli",
    emoji: ["🏰", "🍂", "🌸"],
  },
  {
    name: "Kırşehir",
    emoji: ["🏰", "🍂", "🍁"],
  },
  {
    name: "Kocaeli",
    emoji: ["🌉", "🌊", "🌞"],
  },
  {
    name: "Konya",
    emoji: ["🕌", "🏞️", "🌾"],
  },
  {
    name: "Kütahya",
    emoji: ["🏰", "🍂", "🍁"],
  },
  {
    name: "Malatya",
    emoji: ["🏰", "🌄", "🍢"],
  },
  {
    name: "Manisa",
    emoji: ["🏛️", "🍊", "🏞️"],
  },
  {
    name: "Kahramanmaraş",
    emoji: ["🏰", "🌄", "🍢"],
  },
  {
    name: "Mardin",
    emoji: ["🏰", "🕌", "🍢"],
  },
  {
    name: "Muğla",
    emoji: ["🏖️", "🌊", "🍹"],
  },
  {
    name: "Muş",
    emoji: ["🏰", "🌨️", "🕍"],
  },
  {
    name: "Nevşehir",
    emoji: ["🏰", "🌄", "🌾"],
  },
  {
    name: "Niğde",
    emoji: ["🏰", "🌄", "🌾"],
  },
  {
    name: "Ordu",
    emoji: ["🌊", "🏛️", "🌲"],
  },
  {
    name: "Osmaniye",
    emoji: ["🏰", "🍢", "🏞️"],
  },
  {
    name: "Rize",
    emoji: ["🌊", "🏰", "🍵"],
  },
  {
    name: "Sakarya",
    emoji: ["🌉", "🏖️", "🌊"],
  },
  {
    name: "Samsun",
    emoji: ["🌊", "🏛️", "🌲"],
  },
  {
    name: "Siirt",
    emoji: ["🏰", "🍢", "🕌"],
  },
  {
    name: "Sinop",
    emoji: ["🌊", "🏰", "🌲"],
  },
  {
    name: "Sivas",
    emoji: ["🏰", "🌨️", "🕌"],
  },
  {
    name: "Tekirdağ",
    emoji: ["🏰", "🏖️", "🍺"],
  },
  {
    name: "Tokat",
    emoji: ["🏰", "🌲", "🍂"],
  },
  {
    name: "Trabzon",
    emoji: ["🏰", "🌊", "🌲"],
  },
  {
    name: "Tunceli",
    emoji: ["🏞️", "🌨️", "🕍"],
  },
  {
    name: "Şanlıurfa",
    emoji: ["🏰", "🍢", "🌵"],
  },
  {
    name: "Uşak",
    emoji: ["🏰", "🍂", "🍁"],
  },
  {
    name: "Van",
    emoji: ["🏔️", "❄️", "🕍"],
  },
  {
    name: "Yalova",
    emoji: ["🏰", "🌊", "🌞"],
  },
  {
    name: "Yozgat",
    emoji: ["🏰", "🌄", "🌾"],
  },
  {
    name: "Zonguldak",
    emoji: ["🏰", "🌊", "🍂"],
  },
];
console.log(turkeyCities.length);
