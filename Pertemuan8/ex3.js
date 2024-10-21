// Buatlah object dengan properti:
// 1. firstName,
// 2. weight
// 3. height
// 4. function calculateBMI (gunakan tabel diberikut untuk menampilkan hasil)

let biodata = {
  firstName: "Emily",
  weight: 75,
  height: 1.6,

  output: (function hitungBMI(berat, tinggi) {
    let BMI = berat / (tinggi * tinggi);
    let category;

    if (BMI < 16.0) {
      category = "Severely Underweight";
    } else if (BMI >= 16.0 && BMI <= 18.4) {
      category = "Underweight";
    } else if (BMI >= 18.5 && BMI <= 24.9) {
      category = "Normal";
    } else if (BMI >= 25.0 && BMI < 29.9) {
      category = "Overweight";
    } else if (BMI >= 30.0 && BMI <= 34.9) {
      category = "Moderately Obese";
    } else if (BMI >= 35.0 && BMI <= 39.0) {
      category = "Severely Obese";
    } else if (BMI >= 40.0) {
      category = "Morbidly Obese";
    } else {
      category = "Tidak ada dalam WHO Adult BMI Categories";
    }

    return {
      BMI: BMI,
      category: category,
    };
  })(75, 1.6),
};

console.log(biodata);
console.log("BMI:", biodata.output.BMI);
console.log("Category:", biodata.output.category);