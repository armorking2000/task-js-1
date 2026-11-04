let height = "";
let weight = "";
let bmi = weight / (height * height);
console.log("BMI", bmi);
const form = document.querySelector("form");
const heightInput = document.getElementById("main__input1");
const weightInput = document.getElementById("main__input2");
const result = document.getElementById("result");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = Number(heightInput.value) / 100;
  const weight = Number(weightInput.value);
  const age = document.querySelector('input[name="age"]:checked');
  if (!height || !weight || height <= 0 || weight <= 0) {
    result.textContent = "لطفاً قد و وزن را درست وارد کنید.";
    return;
  }
  const bmi = weight / (height * height);
  const bmiText = bmi.toFixed(1);
  if (age && age.value === "adult") {
    let status;
    if (bmi < 18.5) status = "کم‌وزن";
    else if (bmi < 25) status = "وزن نرمال";
    else if (bmi < 30) status = "اضافه‌وزن";
    else status = "چاقی";
    result.textContent = `BMI شما ${bmiText} است: ${status}`;
  } else {
    result.textContent = `BMI شما ${bmiText} است . باید توسط پزشک معاینه شوید`;
  }
});
