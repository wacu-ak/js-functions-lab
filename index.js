
function calculateTax(amount) {
    return amount * 0.10;
}

function convertToUpperCase(text) {
    return text.toUpperCase();
}

function findMaximum(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

function isPalindrome(word) {
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
}

function calculateDiscountedPrice(originalPrice, discountPercentage) {
    let discount = originalPrice * (discountPercentage / 100);
    return originalPrice - discount;
}

// Testing the functions
console.log(calculateTax(100));
console.log(convertToUpperCase("hello"));
console.log(findMaximum(15, 25));
console.log(isPalindrome("madam"));
console.log(calculateDiscountedPrice(100, 20));


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };