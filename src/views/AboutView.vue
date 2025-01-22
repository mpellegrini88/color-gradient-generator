<template>
  <div class="flex flex-col min-h-screen  space-y-5 p-60 bg-slate-800">
    <!-- Header -->
    <header class="bg-white shadow "></header>

    <!-- Main content -->
    <main class="flex-1 flex items-center justify-center">
      <div class="flex space-x-20">
        <!-- Caso 1: Gradient da un colore -->
        <section class="w-1/3">
          <h2 class="text-4xl font-bold mb-4 text-cyan-200">
            Caso 1:<br><span>Gradient da un colore</span>
          </h2>
          <div class="space-y-4">
            <div class="flex items-center space-x-2 text-cyan-200">
              <label class="font-medium text-lg text-cyan-400 w-full">Colore di base:</label>
              <input
                type="color"
                v-model="baseColor1"
                class="border rounded p-1 text-yellow-400 w-4/6"
              />
            </div>
            <div class="flex items-center space-x-2">
              <label class="font-medium text-cyan-400 mb-4 w-full">Numero di colori:</label>
              <input
                type="number"
                min="2"
                v-model.number="colorCount1"
                class="border rounded p-1 w-4/6"
              />
            </div>
            <button
              @click="generateColors1"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-4/6"
            >
              Genera Colorazioni
            </button>
          </div>
          <!-- Container flessibile per i colori -->
          <div class="flex flex-wrap gap-2 mt-4">
            <div
              v-for="(color, index) in colors1"
              :key="index"
              :style="{ background: color }"
              class="w-12 h-12 rounded"
            ></div>
          </div>
        </section>

        <!-- Caso 2: Gradient tra due colori -->
        <section class="w-1/3">
          <h2 class="text-4xl font-bold mb-4 text-cyan-200">
            Caso 2:<br><span>Gradient tra due colori</span>
          </h2>
          <div class="space-y-4">
            <div class="flex items-center space-x-2 text-cyan-200">
              <label class="font-medium text-lg text-cyan-400 w-full">Colore di inizio:</label>
              <input
                type="color"
                v-model="startColor"
                class="border rounded p-1 text-yellow-400 w-4/6"
              />
            </div>
            <div class="flex items-center space-x-2">
              <label class="font-medium text-cyan-400 mb-4 w-full">Colore di fine:</label>
              <input
                type="color"
                v-model="endColor"
                class="border rounded p-1 w-4/6"
              />
            </div>
            <div class="flex items-center space-x-2">
              <label class="font-medium text-cyan-400 mb-4 w-full">Numero di colori:</label>
              <input
                type="number"
                min="2"
                v-model.number="colorCount2"
                class="border rounded p-1 w-4/6"
              />
            </div>
            <button
              @click="generateColors2"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-4/6"
            >
              Genera Colorazioni
            </button>
          </div>
          <!-- Container flessibile per i colori -->
          <div class="flex flex-wrap gap-2 mt-4">
            <div
              v-for="(color, index) in colors2"
              :key="index"
              :style="{ background: color }"
              class="w-12 h-12 rounded"
            ></div>
          </div>
        </section>

        <!-- Caso 3: Gradiente da un colore selezionato -->
        <section class="w-1/3">
          <h2 class="text-4xl font-bold mb-4 text-cyan-200">
            Caso 3:<br><span>Gradient da un colore selezionato</span>
          </h2>
          <div class="space-y-4">
            <div class="flex flex-wrap gap-2">
              <div
                v-for="(color, index) in predefinedColors"
                :key="index"
                :style="{ background: color }"
                class="w-12 h-12 rounded cursor-pointer border border-gray-500"
                @click="selectedColor = color; generateColors3()"
              ></div>
            </div>
            <div class="">
              <label class="font-medium text-cyan-400  w-full mr-2">Numero di colori:</label>
              <input
                type="number"
                min="2"
                v-model.number="colorCount3"
                class="border rounded p-1 w-2/6"
              />
            </div>
          </div>
          <!-- Container flessibile per i gradienti -->
          <div class="flex flex-wrap gap-2 mt-4">
            <div
              v-for="(color, index) in colors3"
              :key="index"
              :style="{ background: color }"
              class="w-12 h-12 rounded"
            ></div>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import chroma from 'chroma-js'

/* Caso 1: Gradient da un singolo colore verso tonalità più scure */
const baseColor1 = ref('#3498db')
const colorCount1 = ref(5)
const colors1 = ref([])
function generateColors1() {
  colors1.value = chroma
    .scale([baseColor1.value, '#000']) // Scala dal colore base al nero
    .mode('lab')
    .colors(colorCount1.value)
}

/* Caso 2: Gradient tra due colori */
const startColor = ref('#3498db')
const endColor = ref('#000000')
const colorCount2 = ref(5)
const colors2 = ref([])
function generateColors2() {
  colors2.value = chroma
    .scale([startColor.value, endColor.value]) // Scala tra i due colori
    .mode('lab')
    .colors(colorCount2.value)
}

/* Caso 3: Gradient da un colore selezionato */
const predefinedColors = ref(['#3498db', '#e74c3c', '#2ecc71', '#9b59b6', '#f1c40f'])
const selectedColor = ref('#3498db')
const colorCount3 = ref(5)
const colors3 = ref([])
function generateColors3() {
  colors3.value = chroma
    .scale([selectedColor.value, '#000']) // Scala dal colore selezionato al nero
    .mode('lab')
    .colors(colorCount3.value)
}
</script>
