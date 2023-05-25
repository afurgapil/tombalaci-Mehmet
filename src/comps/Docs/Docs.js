import React from "react";
import "./Docs.scss";
import { BsGithub } from "react-icons/bs";
function Docs() {
  return (
    <div id="docs">
      <div id="docs-header">
        <div className="header-r">
          <h2 className="title">TOMBALACI MEHMET</h2>
        </div>
        <div className="header-l">
          <a
            href="https://github.com/afurgapil/tombalaci-Mehmet-with-reactjs"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub></BsGithub>
          </a>
          //todo dark mode
        </div>
      </div>
      <div id="docs-main">
        <aside className="aside">
          <ul className="aside-nav">
            <li>
              <a href="#intro">Tombalaci Mehmet</a>
            </li>
            <li>
              <a href="#randomnumber">Sayıların Rastgeleliği</a>
            </li>
            <li>
              <a href="#rates">Kazanç/Kayıp Oranları</a>
            </li>
            <li>
              <a href="#games">Oyunlar</a>
            </li>
            <li>
              <a href="#emoji">Emojiler</a>
            </li>
          </ul>
        </aside>
        <section className="section">
          <div className="welcome">
            <h2 className="title">Tombalaci Mehmet</h2>
            <p>
              Tombalaci Mehmet, eğlenceli oyunlar oynayabileceğiniz interaktif
              bir platformdur. Bu belgelendirme sayfası, Tombalaci Mehmet'e yeni
              katılan oyuncular için bir rehber sunmayı amaçlamaktadır. Burada,
              oyunlarımızın nasıl çalıştığı, kazanç oranları ve diğer önemli
              bilgiler hakkında detaylı bilgiler bulabilirsiniz.
            </p>
          </div>
          <div className="games">
            <h2 id="games">Oyunlar</h2>
            <p>
              Sitede bulunan oyunlar temel olarak ikiye ayrılırlar:<br></br>-
              Bahis oynayabileceğiniz klasik oyunlar<br></br>- Bahis özelliği
              bulunmayan interaktif oyunlar
            </p>
            <h3>Klasik Oyunlar</h3>
            <p>
              Güncel olarak klasik oyun kategorisinde 5 farklı oyun
              bulunmaktadır.
              <ul>
                <li>Yazı-Tura</li>
                <li>Zar Atma</li>
                <li>Taş-Kağıt-Makas</li>
                <li>Rulet</li>
                <li>Slot</li>
              </ul>
              <h4>Yazı-Tura</h4>
              <p>
                Kullanıcı yazı ya da tura seçeneğinden birisini tercih ederek
                doğru sonuca ulaşmaya çalışır. Kazanç/Kayıp Oranı 1/1'dir.
              </p>
              <h4>Zar Atma</h4>
              <p>
                Kullanıcı bir zar atar. Direkt sonuç için tahminde
                bulunabileceği gibi gelen rakamın özellikleri için de farklı
                bahislerde bulunabilir. Kazanç/Kayıp Oranları 1/5 ve 1/1'dir.
              </p>
              <h4>Taş-Kağıt-Makas</h4>
              <p>
                Kullanıcı bilgisayara karşı taş, kağıt, makas tercihlerinde
                bulunarak onu alt etmeye çalışır. Kazanç/Kayıp oranı 1/2'dir.
                (Beraberlik durumunda puan kaybı yaşanmaz)
              </p>
              <h4>Rulet</h4>
              <p>
                Bir çark üzerinde dönen bir topun duracağı sayıyı tahmin etme
                oyunudur. Oyuncular, bir sayıya, sayı aralığına, rengine veya
                diğer bahis seçeneklerine bahis yapabilir. Kazanç/Kayıp oranları
                1/36, 1/3 ve 1/2'dir.
              </p>
              <h4>Slot</h4>
              <p>
                Oyuncular, çarkların üzerindeki sembollerin belirli bir
                kombinasyonunu elde etmeye çalışır. Sütun sayısına ve index
                sayısına göre 3 farklı kazanç/kayıp oranına sahip slot oyunu
                bulunmaktadır.
              </p>
            </p>
            <h3>Interaktif Oyunlar</h3>
            <p>
              Güncel olarak interaktif oyun kategorisinde 2 farklı oyun
              bulunmaktadır.
              <ul>
                <li>Emojify</li>
                <li>QuizBoxes</li>
              </ul>
              <h4>Emojify</h4>
              <p>
                Oyuncunun tercih ettiği temaya göre karşısına çeşitli emojiler
                gelir. Oyuncu bu emojilerden yola çıkarak doğru tahminde
                bulunmaya çalışır.
              </p>
              <h4>QuizBoxes</h4>
              <p>
                Oyuncu rastgele bir tahminde bulunarak oyunu başlatır. Ardından
                kutuların rengine göre doğru ve yanlış özelliklerden yola
                çıkarak doğru tahminde bulunmaya çalışır.
              </p>
            </p>
          </div>
          <div className="rates">
            <h2 id="rates">Kazanç/Kayıp Oranları</h2>
            <p>
              Tüm oyunlar istatistiksel olarak eşit kazanç oranına sahiptir ve
              bu oran sabittir. Tüm oyunlarda oynanılan bahis miktarı sabittir
              ve kazanç durumu buna göre hesaplanır. Toplam olasılık sayısından
              1 çıkarılır ve bu kazanç oranını belirlemiş olur.
            </p>
            <p>
              Örneğin, 10 farklı sonuçlu bir oyunda, 9 durumda kayıp, 1 durumda
              kazanç var ise 10 puan ile girilen bahiste kazanılan puan 90
              olacaktır.
            </p>
          </div>
          <div className="randomnumber">
            <h2 id="randomnumber">Sayıların Rastgeleliği</h2>
            <p>
              Oyun sonucunu belirleyecek tüm sayılar kriptografik yöntemler ile
              oluşturulmuştur. İşte örnek bir fonksiyon:
            </p>
            <pre className="code">
              <code>
                {`function getRandomFloat() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / 4294967295;
}`}
              </code>
            </pre>
          </div>
          <div className="emoji">
            <h2 id="emoji">Emojiler</h2>
            <p>
              Oyunlarda kullanilan emojiler yapay zeka kullanarak
              olusturulmustur. Yapay zekanin kullandigi verilerden kaynakli
              eksiklikler ya da hatalar bulunabilir.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Docs;
