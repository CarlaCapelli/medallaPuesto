let num1: string = document.getElementById("num1");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let numUno: number = Number(num1.value);

  if (numUno === 1) {
    console.log("gano la medalla de oro");
  } else {
    if (numUno === 2) {
      console.log("gano la medalla de plata");
    } else {
      if (numUno === 3) {
        console.log("gano la medalla de bronce");
      } else {
        console.log("gracias por participar");
      }
    }
  }
});
