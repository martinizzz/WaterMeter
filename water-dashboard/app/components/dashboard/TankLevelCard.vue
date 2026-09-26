<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center">
    <h3 class="text-gray-500 font-semibold mb-2">Nivel del Tinaco</h3>
    <ClientOnly>
      <apexchart 
        type="radialBar" 
        height="250" 
        :options="chartOptions" 
        :series="[porcentaje]" 
      />
      <template #fallback>
        <div class="h-[250px] flex items-center justify-center animate-pulse bg-gray-50 w-full rounded-full"></div>
      </template>
    </ClientOnly>
    <p class="text-2xl font-bold text-gray-800 mt-[-20px]">{{ volumen }} L</p>
    <p class="text-sm text-gray-400">Volumen estimado</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  porcentaje: number;
  volumen: number;
}>();

// Opciones de ApexCharts para una gráfica circular fluida
const chartOptions = computed(() => ({
  chart: { type: 'radialBar', animations: { dynamicAnimation: { speed: 1000 } } },
  plotOptions: {
    radialBar: {
      hollow: { size: '65%' },
      dataLabels: {
        value: { fontSize: '24px', fontWeight: 'bold', color: '#1f2937' },
        name: { show: false }
      }
    }
  },
  colors: [props.porcentaje < 20 ? '#ef4444' : '#3b82f6'],
  stroke: { lineCap: 'round' }
}));
</script>