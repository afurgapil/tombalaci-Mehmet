function Slot() {
  const [col11, setCol11] = useState(0);
  const [col21, setCol21] = useState(0);
  const [col31, setCol31] = useState(0);

  function cccccc() {
    function checkResult1() {
      if (col11 === col21 && col21 === col31) {
        return true;
      } else {
        return false;
      }
    }
  }
  function checkResult() {
    const row1 = checkResult1();
    // const row2 = checkResult2();
    // const row3 = checkResult3();
    // const jackpot = checkJackpot();
    // console.log(row1);
    // console.log(row2);
    // console.log(row3);
    // console.log(jackpot);
    // console.log(col12);
    // console.log(col22);
    // console.log(col32);

    if (row1 === true && row2 === true) {
      setScore(score + 20000);
      localStorage.setItem("score", score + 20000);
      alertify.success("Congrats!row1-2 +20000", 1);
    }
  }
  checkResult();
}

function gameResult() {
  spin();

  setTimeout(() => {
    cccccc();
  }, 3000);
}

function spin() {
  let numbergenerator1 = setInterval(() => {
    let nu1 = Math.floor(Math.random() * (1 + 1));
    let nu2 = Math.floor(Math.random() * (1 + 1));
    let nu3 = Math.floor(Math.random() * (1 + 1));
    setCol11(nu1);
    setCol12(nu2);
    setCol13(nu3);
    switch (nu1) {
      case 0:
        setCol11("\ud83c\udf47");
        break;
      case 1:
        setCol11("\uD83C\uDF49");
        break;
      case 2:
        setCol11("\uD83C\uDF51");

        break;
      case 3:
        setCol11("\uD83C\uDF4B");
        break;
      case 4:
        setCol11("\uD83C\uDF4F");
        break;
      case 5:
        setCol11("\uD83C\uDF52");
        break;

      default:
        setCol11("\uD83D\uDCB0");
    }
    switch (nu2) {
      case 0:
        setCol12("\ud83c\udf47");
        break;
      case 1:
        setCol12("\uD83C\uDF49");
        break;
      case 2:
        setCol12("\uD83C\uDF51");

        break;
      case 3:
        setCol12("\uD83C\uDF4B");
        break;
      case 4:
        setCol12("\uD83C\uDF4F");
        break;
      case 5:
        setCol12("\uD83C\uDF52");
        break;

      default:
        setCol12("\uD83D\uDCB0");
    }
    switch (nu3) {
      case 0:
        setCol13("\ud83c\udf47");
        break;
      case 1:
        setCol13("\uD83C\uDF49");
        break;
      case 2:
        setCol13("\uD83C\uDF51");

        break;
      case 3:
        setCol13("\uD83C\uDF4B");
        break;
      case 4:
        setCol13("\uD83C\uDF4F");
        break;
      case 5:
        setCol13("\uD83C\uDF52");
        break;

      default:
        setCol13("\uD83D\uDCB0");
    }
  }, 100);
  let numbergenerator2 = setInterval(() => {
    let nu4 = Math.floor(Math.random() * (1 + 1));
    let nu5 = Math.floor(Math.random() * (1 + 1));
    let nu6 = Math.floor(Math.random() * (1 + 1));

    setCol21(nu4);
    setCol22(nu5);
    setCol23(nu6);
    switch (nu4) {
      case 0:
        setCol21("\ud83c\udf47");
        break;
      case 1:
        setCol21("\uD83C\uDF49");
        break;
      case 2:
        setCol21("\uD83C\uDF51");

        break;
      case 3:
        setCol21("\uD83C\uDF4B");
        break;
      case 4:
        setCol21("\uD83C\uDF4F");
        break;
      case 5:
        setCol21("\uD83C\uDF52");
        break;

      default:
        setCol21("\uD83D\uDCB0");
    }
    switch (nu5) {
      case 0:
        setCol22("\ud83c\udf47");
        break;
      case 1:
        setCol22("\uD83C\uDF49");
        break;
      case 2:
        setCol22("\uD83C\uDF51");

        break;
      case 3:
        setCol22("\uD83C\uDF4B");
        break;
      case 4:
        setCol22("\uD83C\uDF4F");
        break;
      case 5:
        setCol22("\uD83C\uDF52");
        break;

      default:
        setCol22("\uD83D\uDCB0");
    }
    switch (nu6) {
      case 0:
        setCol23("\ud83c\udf47");
        break;
      case 1:
        setCol23("\uD83C\uDF49");
        break;
      case 2:
        setCol23("\uD83C\uDF51");

        break;
      case 3:
        setCol23("\uD83C\uDF4B");
        break;
      case 4:
        setCol23("\uD83C\uDF4F");
        break;
      case 5:
        setCol23("\uD83C\uDF52");
        break;

      default:
        setCol23("\uD83D\uDCB0");
    }
  }, 100);
  let numbergenerator3 = setInterval(() => {
    let nu7 = Math.floor(Math.random() * (1 + 1));
    let nu8 = Math.floor(Math.random() * (1 + 1));
    let nu9 = Math.floor(Math.random() * (1 + 1));

    setCol31(nu7);
    setCol32(nu8);
    setCol33(nu9);
    switch (nu7) {
      case 0:
        setCol31("\ud83c\udf47");
        break;
      case 1:
        setCol31("\uD83C\uDF49");
        break;
      case 2:
        setCol31("\uD83C\uDF51");

        break;
      case 3:
        setCol31("\uD83C\uDF4B");
        break;
      case 4:
        setCol31("\uD83C\uDF4F");
        break;
      case 5:
        setCol31("\uD83C\uDF52");
        break;

      default:
        setCol31("\uD83D\uDCB0");
    }
    switch (nu8) {
      case 0:
        setCol32("\ud83c\udf47");
        break;
      case 1:
        setCol32("\uD83C\uDF49");
        break;
      case 2:
        setCol32("\uD83C\uDF51");

        break;
      case 3:
        setCol32("\uD83C\uDF4B");
        break;
      case 4:
        setCol32("\uD83C\uDF4F");
        break;
      case 5:
        setCol32("\uD83C\uDF52");
        break;

      default:
        setCol32("\uD83D\uDCB0");
    }
    switch (nu9) {
      case 0:
        setCol33("\ud83c\udf47");
        break;
      case 1:
        setCol33("\uD83C\uDF49");
        break;
      case 2:
        setCol33("\uD83C\uDF51");

        break;
      case 3:
        setCol33("\uD83C\uDF4B");
        break;
      case 4:
        setCol33("\uD83C\uDF4F");
        break;
      case 5:
        setCol33("\uD83C\uDF52");
        break;

      default:
        setCol33("\uD83D\uDCB0");
    }
  }, 100);

  setTimeout(() => {
    clearInterval(numbergenerator1);
  }, 1000);
  setTimeout(() => {
    clearInterval(numbergenerator2);
  }, 1500);
  setTimeout(() => {
    clearInterval(numbergenerator3);
  }, 2000);

  return (
    <div>
      <div className="slot-table-container">
        {/* <div className="slot-title">
          <h1>SLOT MACHINE</h1>
        </div> */}
        <div className="slot-table">
          <div className="col">
            <p className="number">{col11}</p>
          </div>
          <div className="col">
            <p className="number">{col21}</p>
          </div>
          <div className="col">
            <p className="number">{col31}</p>
          </div>

          <div className="slot-buttons">
            <button
              className="spin-button"
              onClick={() => {
                gameResult();
              }}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slot;
