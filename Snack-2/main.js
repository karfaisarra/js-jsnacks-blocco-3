/* A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’] */

//A partire da un array di stringhe
const names = ['sarra', 'vIctoria', 'anGelica'];//[Sarra, Victoria, Angelica];

const newArray = names.map (name =>{
    //consol.log(name)

    //slezione la parola, e la trasformo in miniscolo
    const lowerCaseWord = name.toLowerCase();
    console.log(lowerCaseWord);

    //seleziono il primo crattere e lo trasformo in minuscolo
    const firstChar = lowerCaseWord.charAt(0).toUpperCase()
    console.log(firstChar);

    //restituisco il primo carattere più una prozione della stringa originale..
    const wordSlice = lowerCaseWord.slice(1)
    console.log(wordSlice);

    //riconstruire la stringa
    const newWord = firstChar + wordSlice
    return newWord
})
console.log(newArray);







/*
//trasformare tutti i nomi in lower case poi prima lettera in uppercase
const nomiModificati = nomi.map {
    for (let i = 0; i < arrayExpl.length; i++) {
        const nome = arrayExpl[i].toLowerCase();
        //console.log(nome);
        const nomeModificato = capitalizeFirstLetter(nome);
        console.log(nomeModificato);
        return nomeModificato
    
    }
} ; 

    
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}*/