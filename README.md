# vue-project

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
# Documentazione: Generatore di Gradienti di Colore

## Introduzione

Questo progetto è un'applicazione Vue 3 per generare gradienti di colore in base a diverse configurazioni. Gli utenti possono:
- Generare gradienti partendo da un singolo colore.
- Creare gradienti tra due colori.
- Selezionare un colore da un set predefinito e generare gradienti basati su di esso.

---

## Come Funziona

### **Caso 1: Gradient da un singolo colore**

- L'utente seleziona un colore di base tramite un input di tipo `color`.
- Viene specificato un numero di colori da generare.
- Il gradiente viene calcolato utilizzando la libreria `chroma-js`, creando una scala dal colore selezionato fino al nero (`#000`).

#### Algoritmo:
1. Prendi il colore selezionato (`baseColor`).
2. Genera una scala di colori tra `baseColor` e il nero (`#000`).
3. Usa `chroma.scale([...]).colors(numberOfColors)` per calcolare i colori distribuiti uniformemente.

---

### **Caso 2: Gradient tra due colori**

- L'utente seleziona due colori tramite due input di tipo `color` (colore iniziale e finale).
- Viene specificato un numero di colori da generare.
- Il gradiente viene calcolato creando una scala uniforme tra i due colori selezionati.

#### Algoritmo:
1. Prendi i due colori selezionati (`startColor` e `endColor`).
2. Genera una scala lineare tra i due colori usando `chroma.scale([startColor, endColor])`.
3. Distribuisci il numero di colori specificato uniformemente lungo la scala.

---

### **Caso 3: Gradient da un colore selezionato da un set**

- L'utente seleziona un colore da un set predefinito di quadratini colorati.
- Viene specificato un numero di colori da generare.
- Il gradiente viene calcolato partendo dal colore selezionato e andando verso il nero (`#000`).

#### Algoritmo:
1. L'utente clicca su un quadratino, che imposta il colore selezionato (`selectedColor`).
2. Genera una scala dal colore selezionato fino al nero (`#000`) usando `chroma.scale([selectedColor, '#000'])`.
3. Calcola il numero di colori richiesto distribuiti uniformemente.

---

## Libreria Utilizzata: `chroma-js`

- **Funzione principale**: `chroma.scale()`
- **Modalità colore**: La modalità `lab` viene utilizzata per garantire una transizione uniforme tra i colori.
- **Metodo per generare colori**: `.colors(numberOfColors)` restituisce un array di colori HEX.

---

## Come Usarlo

1. **Seleziona il tipo di gradiente**: Scegli uno dei tre casi disponibili.
2. **Configura i parametri**:
   - Per il caso 1 e 2, seleziona i colori e specifica il numero di colori.
   - Per il caso 3, clicca su un colore dal set predefinito e specifica il numero di colori.
3. **Genera il gradiente**: Premi il pulsante "Genera Colorazioni" per visualizzare i colori generati.

---

Se hai bisogno di ulteriori dettagli o modifiche, fammi sapere!
