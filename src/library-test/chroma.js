import chroma from 'chroma-js';

const startColor = '#ff0000'; // rosso di partenza
const scale = chroma.scale([startColor, '#0000ff'])  // da rosso a blu
                   .mode('lab')                   // utilizza lo spazio colore Lab per una transizione più uniforme
                   .colors(10);                   // genera 10 colori nella scala

console.log(scale);
