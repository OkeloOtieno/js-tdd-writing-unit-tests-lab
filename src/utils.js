export function isPalindrome(str) {
    if(str.length === 0){
        return false
    }

    const cleanedStr = str.toLowerCase().replace(/[\W_]/g, '');

    if (/\d/.test(cleanedStr)) {
        throw new Error('Contains Numbers');
    }

    
    return cleanedStr === cleanedStr.split('').reverse().join('');
}