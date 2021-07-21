/* 
    !TODO:

    //1. stampa i numeri da 1 a 100
    //2. per i multipli di 3 scrvi Fizz
    //3. per i multipli di 5 scrivi Buzz
    //4. per i multipli sia di 3 sia di 5 scrivi FizzBuzz
    
*/

for (let index = 1; index < 101; index++) {
    
    if (index % 3 == 0) {
        console.log("Fizz");
    } else if (index % 5 == 0) {
        console.log("Buzz");
    } else if (index % 3 == 0 && index % 5 == 0) {
        console.log("FizzBuzz");
    } else {
        console.log(index);
    }

}