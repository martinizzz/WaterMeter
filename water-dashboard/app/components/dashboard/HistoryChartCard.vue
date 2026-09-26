<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 w-full h-full flex flex-col">
    <div class="flex justify-between items-center mb-4">
      <h3 class="text-gray-500 font-semibold">Consumo Últimos 7 Días</h3>
      <span class="text-sm bg-blue-50 text-brand-water px-3 py-1 rounded-full font-medium">{{ totalSemana }} L Total</span>
    </div>
    <div class="flex-1 min-h-250px">
      <ClientOnly>
        <apexchart type="bar" height="100%" :options="chartOptions" :series="series" />
        <template #fallback>
          <div class="h-full w-full bg-gray-50 animate-pulse rounded-xl"></div>
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ datosSemana: number[] }>();
const totalSemana = computed(() => props.datosSemana.reduce((a, b) => a + b, 0));
const series = computed(() => [{ name: 'Litros', data: props.datosSemana }]);

const chartOptions = {
  chart: { type: 'bar', toolbar: { show: false }, parentHeightOffset: 0 },
  plotOptions: { bar: { borderRadius: 4, columnWidth: '50%' } },
  colors: ['#3b82f6'],
  dataLabels: { enabled: false },
  xaxis: {
    categories: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
    axisBorder: { show: false },
    axisTicks: { show: false }
  },
  yaxis: { show: false },
  grid: { yaxis: { lines: { show: false } }, padding: { top: 0, right: 0, bottom: 0, left: 0 } }
};
</script>