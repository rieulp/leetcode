function isPalindrome(s: string): boolean {
    const plainText = s.replace(/[^0-9a-z]/gi, '').toUpperCase()
    const len = plainText.length;

    for (let i = 0; i <= len / 2; i++) {
        if (plainText[i] !== plainText[len - i - 1]) return false
    }
    return true;
};