// কেউ ১০০ এর মধ্যে কত মার্ক্স্ পেয়েছে সেটা তোমাকে বলে দিবে। তুমি একটা ফাংশন দিয়ে বলে দিবে সে এ+ পাবে নাকি অন্য কোন গ্রেড পাবে।

function findGrade(marks) {
    if (marks >= 80 && marks <= 100) {
        return 'You have got A+ '
    }
    else if (marks >= 70 && marks <= 79) {
        return 'You have got A '
    }
    else if (marks >= 60 && marks <= 69) {
        return 'You have got A-'
    }
    else if (marks >= 50 && marks <= 59) {
        return 'You have got B'
    }
    else if (marks >= 40 && marks <= 49) {
        return 'You have got C'
    }
    else if (marks >= 33 && marks <= 39) {
        return 'You have got D'
    }
    else if (marks >= 0 && marks <= 32) {
        return 'You have got F '
    }
}

console.log(findGrade(40))