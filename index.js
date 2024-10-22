const palindromeNumber = (num) => {
    let y = parseInt(num.toString().split('').map(Number).reverse().join(''))

    return y === num ? true : false;
}