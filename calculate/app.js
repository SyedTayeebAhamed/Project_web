function mycalculate() {
  const keys = document.getElementsByTagName("button");
  for (let key of keys) {
    key.onclick = handleclick;
  }
  const output = document.getElementById("output");
  let outnum = "",
    outnumNew = "",
    op = "",
    int = 0;

  function handleclick() {
    let num = this.innerText;
    if (this.classList.contains("number")) {
      outnum += num;
      output.value = outnum;
    } else {
      doCalu(num);
    }
  }
  function doClear() {
    output.value = "";
    outnum = "";
    outnumNew = "";
    op = "";
    int = 0;
  }
  function doCalu(calu) {
    if (calu === "C") {
      doClear();
    } else if (outnumNew !== "") {
      outnum = parseFloat(outnum);
      switch (op) {
        case "/":
          if (outnum !== 0) {
            int = outnumNew / outnum;
          } else {
            int = "error";
          }
          break;
        case "*":
          int = outnumNew * outnum;
          break;
        case "-":
          int = outnumNew - outnum;
          break;
        case "+":
          int = outnumNew + outnum;
          break;
        case "=":
          int = parseFloat(output.value);
          break;
      }
      if (isNaN(int)) {
        output.value = "error";
        setTimeout(function () {
          doClear();
        }, 2000);
      } else {
        output.value = int;
        outnumNew = int;
      }
    } else if (outnum !== "") {
      outnumNew = parseFloat(outnum);
    }
    op = calu;
    outnum = "";
  }
}
mycalculate();