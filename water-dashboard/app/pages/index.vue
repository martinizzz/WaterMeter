<template>
  <div>
    <header class="mb-8">
      <h2 class="text-2xl font-bold text-gray-800">Dashboard en Tiempo Real</h2>
      <p class="text-gray-500">Monitoreo de consumo y nivel de tinaco</p>
    </header>

    <!-- Grid Principal en Tiempo Real -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <template v-if="isLoading">
        <UiSkeletonCard v-for="i in 3" :key="i" />
      </template>
      <template v-else>
        <DashboardTankLevelCard 
          :porcentaje="realTimeData.nivel_tinaco.porcentaje" 
          :volumen="realTimeData.nivel_tinaco.volumen_litros" 
        />
        <DashboardConsumptionCard 
          :consumoLts="realTimeData.consumo_hoy" 
        />
        <DashboardFlowStatusCard 
          :caudal="realTimeData.flujo_actual.caudal" 
          :estado="realTimeData.flujo_actual.estado" 
        />
      </template>
    </div>

    <!-- El resto de la vista de analíticas se queda en esqueletos para la Fase 3 -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="col-span-1 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[300px] flex items-center justify-center">
        <p class="text-gray-400 font-medium">Gráficas Históricas (Próxima Fase)</p>
      </div>
      <div class="col-span-1 flex flex-col gap-6">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[140px] flex items-center justify-center">
          <p class="text-gray-400 font-medium">KPIs (Próxima Fase)</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useWaterData } from '~/composables/useWaterData';

const { realTimeData, isLoading, listenToRealTimeData } = useWaterData();

onMounted(() => {
  listenToRealTimeData();
});
</script>