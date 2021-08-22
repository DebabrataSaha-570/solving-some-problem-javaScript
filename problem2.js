//  ৫০ থেকে ৮০ এর মধ্যে যতো বিজোড় সংখ্যা আছে সেগুলাকে দেখাবে।



function showOddNumber(number1, number2) {
    if (number1 >= 50 && number2 <= 80) {
        for (i = number1; i <= number2; i++) {
            if (i % 2 != 0) {
                console.log(i);
                // return i;
            }
        }
    }
    else {
        // console.log('give number between 50 to 80')
        return ('give number between 50 to 80')
    }
}

console.log(showOddNumber(55, 80))
// showOddNumber(50, 80)
