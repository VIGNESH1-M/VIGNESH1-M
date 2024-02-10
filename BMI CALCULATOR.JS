function calculateBMI() {
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight && height) {
        const bmi = (weight / ((height / 100) ** 2)).toFixed(2);

        let category = '';
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 25) {
            category = 'Normal weight';
        } else if (bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        document.getElementById('result').innerHTML = `Your BMI: ${bmi}<br>Category: ${category}`;
    } else {
        document.getElementById('result').innerHTML = 'Please enter both weight and height.';
    }
}
