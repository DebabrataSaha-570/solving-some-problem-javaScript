/*
১. তোমাকে ফাংশনের ইনপুট হিসেবে সেলসিয়াস দিবে। তুমি ক্যালকুলেশন করে তাপমাত্রা ফারেনহাইট এ কনভার্ট করে সেটার আউটপুট রিটার্ন করবে .

২. একইভাবে উল্টা হিসাব করবে। যাতে তোমাকে ফারেনহাইট হিসেবে তাপমাত্রা দিলে সেটাকে সেলসিয়াস এ কনভার্ট করে আউটপুট দিবে।

*/

// Celsius to Fahrenheit formula (1°C × 9/5) + 32 = 33.8°F


function CelsiusToFahrenheit(celcius) {
    var Fahrenheit = (celcius * 9 / 5) + 32
    return Fahrenheit;
}

console.log(CelsiusToFahrenheit(55))
console.log(CelsiusToFahrenheit(-10))


// Fahrenheit to celcius formula (1°F − 32) × 5/9 = -17.22°C

function FahrenheitToCelsius(fahrenheit) {
    var celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
}
console.log(FahrenheitToCelsius(50))
