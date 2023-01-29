function deneme() {
  const sayilar = [];

  if (!(sayi in sayilar)) {
    let sayi = Math.floor(Math.random() * 90) + 1;
    sayilar.push(sayi);
  }
}
deneme();
console.log(sayi);
