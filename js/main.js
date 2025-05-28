//inizializzo il for con la variabile che viene incrementata da 1 a 100
for (i = 1; i <= 100; i++) {
    //metto la condizione se il numero è divisibile per entrambi con il conseguente messaggio
    if (i % 3 == 0 && i % 5 == 0) {
        console.log(i, "FizzBuzz")
    //altrimenti se non è divisibile metto un altra condizione, 
    // ovvero, se è divisibile solo per 3 con il conseguente messaggio
    } else if (i % 3 == 0) {
        console.log(i, "Fizz")
    //altra condizione nel caso in cui non fosse divisibile ne per entrambi ne per 3 ma fosse
    //per 5 con conseguente messaggio
    } else if (i % 5 == 0) {
        console.log(i, "Buzz")
    //altrimenti stammpa il semplice valore di i 
    } else {
        console.log(i)
    }
}