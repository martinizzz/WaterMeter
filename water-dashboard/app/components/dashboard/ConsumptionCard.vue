<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col items-center">
    <h3 class="text-gray-500 font-semibold mb-2">Consumo de Hoy</h3>
    <ClientOnly>
      <apexchart 
        type="radialBar" 
        height="250" 
        :options="chartOptions" 
        :series="[porcentajeConsumo]" 
      />
      <template #fallback>
        <div class="h-[250px] flex items-center justify-center animate-pulse bg-gray-50 w-full rounded-full"></div>
      </template>
    </ClientOnly>
    <p class="text-2xl font-bold text-gray-800 mt-[-20px]">{{ consumoLts }} / {{ metaDiaria }} L</p>
    <p class="text-sm text-gray-400">Meta diaria</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{ consumoLts: number }>();
const metaDiaria = 400; // Meta fija temporal (litros)

const porcentajeConsumo = computed(() => {
  const p = (props.consumoLts / metaDiaria) * 100;
  return p > 100 ? 100 : p; // Topamos al 100% en la gráfica
});

const chartOptions = computed(() => ({
  chart: { type: 'radialBar' },
  plotOptions: {
    radialBar: {
      startAngle: -90,
      endAngle: 90,
      hollow: { size: '60%' },
      dataLabels: {
        value: { fontSize: '22px', fontWeight: 'bold', color: '#1f2937', formatter: (val: number) => `${val.toFixed(1)}%` },
        name: { show: false }
      }
    }
  },
  colors: ['#10b981'], // Verde esmeralda
}));
</script>