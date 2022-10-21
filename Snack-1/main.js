/* Crea un array composto da 10 automobili.
Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).
Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
Infine stampa separatamente i 3 array */


//Crea un array composto da 10 automobili
const automobili = [
    {
        marca:'Fiat',
        modello:'Tipo',
        alimentazione:'diesel',
    },
    {
        marca:'Citoren',
        modello:'C3',
        alimentazione:'diesel',
    },
    {
        marca:'Fiat',
        modello:'500X',
        alimentazione:'benzina',
    },
    {
        marca:'Peugeot',
        modello:'208',
        alimentazione:'benzina',
    },
    {
        marca:'Jeep',
        modello:'Compass',
        alimentazione:'diesel',
    },
    {
        marca:'Volkswagen',
        modello:'T-Roc',
        alimentazione:'diesel',
    },
    {
        marca:'Dacia',
        modello:'Duster',
        alimentazione:'gpl',
    },
    {
        marca:'Fiat',
        modello:'500',
        alimentazione:'elettrico',
    },
    {
        marca:'Lancia',
        modello:'Ypsilon',
        alimentazione:'metano',
    },
    {
        marca:'DR',
        modello:'DR5.0',
        alimentazione:'gpl',
    },
];

//Dividi le automobili in 3 array separati
const benzina = automobili.filter(automobili => automobili.alimentazione =='benzina');
console.log(benzina);
const diesel = automobili.filter(automobili => automobili.alimentazione =='diesel');
console.log(diesel);
const resto = automobili.filter(automobili => automobili.alimentazione !=='diesel'&&automobili.alimentazione !=='benzina' );
console.log(resto);


