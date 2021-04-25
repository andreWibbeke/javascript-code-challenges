const initialize = () => {
  const greenBtn = document.querySelector("#green");
  const orangeBtn = document.querySelector("#orange");
  const redBtn = document.querySelector("#red");

  greenBtn.onclick = changeColor("green");

  orangeBtn.onclick = changeColor("orange");

  redBtn.onclick = changeColor("red");
};

function changeColor(color) {
  return () => {
    document.body.style.backgroundColor = color;
  };
}

initialize();

export default changeColor;

/* Solution without closure

const initialize = () => {
  const greenBtn = document.querySelector("#green");
  const orangeBtn = document.querySelector("#orange");
  const redBtn = document.querySelector("#red");

  greenBtn.onclick = () => {
    changeColor("green");
  };

  orangeBtn.onclick = () => {
    changeColor("orange");
  };

  redBtn.onclick = () => {
    changeColor("red");
  };
};

function changeColor(color) {
  document.body.style.backgroundColor = color;
}

initialize();

export default changeColor;
*/
