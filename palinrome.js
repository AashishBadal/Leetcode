var isPalindrome = function(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;

    let reversed = 0;
    let original = x;
    
    while (x > reversed) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;
        x = Math.floor(x / 10);
    }

    // Works for both odd and even length numbers
    return x === reversed || x === Math.floor(reversed / 10);
};
