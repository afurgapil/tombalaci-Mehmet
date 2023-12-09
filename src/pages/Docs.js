import React from "react";
import { BsGithub } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
function Docs() {
  return (
    <div className="">
      <Helmet>
        <title>Documentation| Tombalaci Mehmet</title>
        <meta
          name="description"
          content="documentation for the tombalaci mehmet"
        />
      </Helmet>
      <div className="flex flex-row justify-between items-center bg-docHeader py-2 px-4">
        <div className="header-r">
          <Link className="text-center w-full font-bold text-2xl" to="/">
            TOMBALACI MEHMET
          </Link>
        </div>
        <div className="flex flex-row justify-between items-center w-10/12">
          <NavLink to="/" className="text-3xl">
            Home
          </NavLink>
          <a
            href="https://github.com/afurgapil/tombalaci-Mehmet-with-reactjs"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center text-3xl"
          >
            <BsGithub></BsGithub>
          </a>
        </div>
      </div>
      <div className="flex justify-end min-h-screen  ">
        <aside className="w-2/12 bg-docAside min-h-screen flex flex-col justify-start items-start py-2 px-4 fixed top-0 left-0">
          <ul className="flex flex-col justify-start items-start first-letter">
            <li className="list-disc my-2">
              <a
                className="text-sm md:text-2xl font-light md:font-bold"
                href="#intro"
              >
                Tombalaci Mehmet
              </a>
            </li>
            <li className="list-disc my-2">
              <a
                className="text-sm md:text-2xl font-light md:font-bold"
                href="#games"
              >
                Oyunlar
              </a>
            </li>
            <li className="list-disc my-2">
              <a
                className="text-sm md:text-2xl font-light md:font-bold"
                href="#randomnumber"
              >
                Sayıların Rastgeleliği
              </a>
            </li>
            <li className="list-disc my-2">
              <a
                className="text-sm md:text-2xl font-light md:font-bold"
                href="#rates"
              >
                Kazanç/Kayıp Oranları
              </a>
            </li>
            <li className="list-disc my-2">
              <a
                className="text-sm md:text-2xl font-light md:font-bold"
                href="#emoji"
              >
                Emojiler
              </a>
            </li>
            <li className="list-disc my-2">
              <a
                className="text-sm md:text-2xl font-light md:font-bold"
                href="#swap"
              >
                Takas
              </a>
            </li>
          </ul>
        </aside>
        <section className="w-10/12 py-5 px-3 min-h-screen flex flex-col justify-start items-start bg-docMain">
          <div className="m-1" id="intro">
            <p className="text-xl font-bold">
              Tombalaci Mehmet, eğlenceli oyunlar oynayabileceğiniz interaktif
              bir platformdur. Bu belgelendirme sayfası, Tombalaci Mehmet'e yeni
              katılan oyuncular için bir rehber sunmayı amaçlamaktadır. Burada,
              oyunlarımızın nasıl çalıştığı, kazanç oranları ve diğer önemli
              bilgiler hakkında detaylı bilgiler bulabilirsiniz.
            </p>
          </div>
          <div className="mt-4" id="games">
            <h2 className="font-extrabold text-3xl my-2">Oyunlar</h2>
            <p className="p-2">
              Sitede bulunan oyunlar temel olarak ikiye ayrılırlar:
              <br />
              - Bahis oynayabileceğiniz klasik oyunlar
              <br />- Bahis özelliği bulunmayan interaktif oyunlar
            </p>
            <h3 className="font-bold my-2 text-2xl">Klasik Oyunlar</h3>
            <p className="p-2 ">
              Güncel olarak klasik oyun kategorisinde 5 farklı oyun
              bulunmaktadır.
              <ul className="p-4">
                <li className="list-disc ">Yazı-Tura</li>
                <li className="list-disc ">Zar Atma</li>
                <li className="list-disc ">Taş-Kağıt-Makas</li>
                <li className="list-disc ">Rulet</li>
                <li className="list-disc ">Slot</li>
              </ul>
              <h4 className="font-semibold text-xl">Yazı-Tura</h4>
              <p>
                Kullanıcı yazı ya da tura seçeneğinden birisini tercih ederek
                doğru sonuca ulaşmaya çalışır. Kazanç/Kayıp Oranı 1/1'dir.
              </p>
              <h4 className="font-semibold text-xl">Zar Atma</h4>
              <p>
                Kullanıcı bir zar atar. Direkt sonuç için tahminde
                bulunabileceği gibi gelen rakamın özellikleri için de farklı
                bahislerde bulunabilir. Kazanç/Kayıp Oranları 1/5 ve 1/1'dir.
              </p>
              <h4 className="font-semibold text-xl">Taş-Kağıt-Makas</h4>
              <p>
                Kullanıcı bilgisayara karşı taş, kağıt, makas tercihlerinde
                bulunarak onu alt etmeye çalışır. Kazanç/Kayıp oranı 1/2'dir.
                (Beraberlik durumunda puan kaybı yaşanmaz)
              </p>
              <h4 className="font-semibold text-xl">Rulet</h4>
              <p>
                Bir çark üzerinde dönen bir topun duracağı sayıyı tahmin etme
                oyunudur. Oyuncular, bir sayıya, sayı aralığına, rengine veya
                diğer bahis seçeneklerine bahis yapabilir. Kazanç/Kayıp oranları
                1/36, 1/3 ve 1/2'dir.
              </p>
              <h4 className="font-semibold text-xl">Slot</h4>
              <p>
                Oyuncular, çarkların üzerindeki sembollerin belirli bir
                kombinasyonunu elde etmeye çalışır. Sütun sayısına ve index
                sayısına göre 3 farklı kazanç/kayıp oranına sahip slot oyunu
                bulunmaktadır.
              </p>
            </p>
          </div>

          <div className="mt-4" id="randomnumber">
            <h2 className="font-bold text-3xl">Sayıların Rastgeleliği</h2>
            <p className="px-2 py-1">
              Oyun sonucunu belirleyecek tüm sayılar kriptografik yöntemler ile
              oluşturulmuştur. İşte örnek bir fonksiyon:
            </p>
            <pre className="bg-docCode w-fit p-2 font-thin mt-4">
              <code>
                {`function getRandomFloat() {
  const array = new Uint32Array(1);
  window.crypto.getRandomValues(array);
  return array[0] / 4294967295;
}`}
              </code>
            </pre>
          </div>
          <div className=" mt-4" id="rates">
            <h2 className="font-bold text-3xl">Kazanç/Kayıp Oranları</h2>
            <p className="px-2 py-1">
              Tüm oyunlar istatistiksel olarak eşit kazanç oranına sahiptir ve
              bu oran sabittir. Tüm oyunlarda oynanılan bahis miktarı sabittir
              ve kazanç durumu buna göre hesaplanır. Toplam olasılık sayısından
              1 çıkarılır ve bu kazanç oranını belirlemiş olur.
            </p>
            <p className="px-2 py-1">
              Örneğin, 10 farklı sonuçlu bir oyunda, 9 durumda kayıp, 1 durumda
              kazanç var ise 10 puan ile girilen bahiste kazanılan puan 90
              olacaktır.
            </p>
          </div>
          <div className="mt-4" id="emoji">
            <h2 className="font-bold text-3xl">Emojiler</h2>
            <p className="px-2 py-1">
              Oyunlarımızda, farklı durumları ve tahminleri ifade etmek için
              çeşitli emojiler kullanıyoruz. Bu emojiler, oyuncularımıza
              oyunlarında heyecan ve eğlence katmak için özenle seçilmiştir.
              Emojiler, yapay zeka algoritmaları tarafından tahminlere dayalı
              olarak oluşturulmuştur.
            </p>
            <p className="px-2 py-1">
              Her bir emoji, oyuncularımızın oyunlarında doğru tahminleri
              yapmalarını teşvik etmek ve kazançlarını artırmak için bir ipucu
              veya işaret niteliğindedir. Emojileri doğru bir şekilde yorumlamak
              ve tahminlerinizde kullanmak, oyunlarınızda başarı elde etmenize
              yardımcı olabilir.
            </p>
          </div>
          <div className="mt-4" id="swap">
            <h2 className="font-bold text-3xl">Takas Mekanizması</h2>
            <p className="px-2 py-1">
              Klasik oyunları oynayarak kazandığınız puanları kripto varlıklarla
              takas edebilirsiniz! Profil sekmesinden takas alanına giderek,
              token karşılığında puan satabilir veya puan toplamak için
              tokenlerinizi kullanabilirsiniz. Şu an için test sürecinde
              olduğumuzdan dolayı sadece Polygon Testnet (Mumbai) ağı ve MATIC
              tokeni desteklenmektedir. (Belki oyunlardan puan yerine
              <strong> $TMB </strong>
              kazanmaya başlarız.)
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Docs;
