<template>
  <div class="flex flex-col gap-6 h-full">
    <!-- Pronóstico Mensual -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center">
      <p class="text-gray-500 text-sm font-medium">Acumulado del Mes</p>
      <p class="text-3xl font-bold text-gray-800 mt-1">{{ acumuladoMensual }} m³</p>
      <p class="text-xs mt-2" :class="acumuladoMensual > metaMensual ? 'text-brand-alert font-medium' : 'text-brand-success'">
        {{ acumuladoMensual > metaMensual ? 'Has superado la meta' : 'Dentro del límite ideal' }} de {{ metaMensual }} m³
      </p>
    </div>

    <!-- Promedio Diario -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center">
      <p class="text-gray-500 text-sm font-medium">Promedio Diario</p>
      <p class="text-2xl font-bold text-gray-800 mt-1">{{ promedioDiario }} L/día</p>
    </div>

    <!-- Hora Pico -->
    <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex-1 flex flex-col justify-center">
      <p class="text-gray-500 text-sm font-medium">Hora Pico Histórica</p>
      <p class="text-2xl font-bold text-gray-800 mt-1">{{ horaPico }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ 
  acumuladoMensual: number; 
  promedioDiario: number; 
  horaPico: string;
}>();
const metaMensual = 12; // Meta fija de 12 m3 dictada en los requisitos
</script>