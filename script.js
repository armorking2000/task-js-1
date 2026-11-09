const inputHeight = document.getElementById("main__input1");
const inputWeight = document.getElementById("main__input2");
const bmiText = document.getElementById("result");
const form = document.querySelector("form");
function bmiCalculator(weight, height) {
  const bmi = weight / (height / 100) ** 2;
  const bmiResult = bmi.toFixed(1);
  let status;
  if (bmiResult < 18.5) {
    status = "لاغری";
  } else if (bmiResult > 18.5 && bmiResult < 25) {
    status = "نرمال";
  } else if (bmiResult > 25 && bmiResult < 30) {
    status = "اضافه وزن";
  } else {
    status = "چاقی";
  }
  bmiText.textContent = `BMI شما ${bmiResult} است : ${status}`;
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = Number(inputHeight.value);
  const weight = Number(inputWeight.value);
  const selected = document.querySelector("input[name=age]:checked");
  if (!selected) {
    bmiText.textContent = "لطفاً گروه سنی را انتخاب کنید";
    return;
  }
  bmiCalculator(weight, height, selected.value);
});
