
<script setup lang="ts">
import { onMounted } from 'vue';
import { useWaterData } from '~/composables/useWaterData';

// Aquí extraemos TODAS las variables que el template necesita
const { 
  realTimeData, 
  historicalData, 
  statsData, 
  isLoading, 
  isLoadingHistory, 
  listenToRealTimeData 
} = useWaterData();

onMounted(() => {
  listenToRealTimeData();
});
</script>
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

  <!-- Grid Secundario para Analítica e Histórico -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="col-span-1 lg:col-span-2">
        <template v-if="isLoadingHistory">
          <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-300px animate-pulse"></div>
        </template>
        <template v-else>
          <DashboardHistoryChartCard :datosSemana="historicalData?.ultimos_7_dias || [0,0,0,0,0,0,0]" />
        </template>
      </div>
      
      <div class="col-span-1">
        <template v-if="isLoadingHistory">
          <div class="flex flex-col gap-6 h-full">
            <div v-for="i in 3" :key="i" class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 h-32 animate-pulse"></div>
          </div>
        </template>
        <template v-else>
          <DashboardKpiBoard 
            :acumuladoMensual="historicalData?.mes_actual || 0"
            :promedioDiario="statsData?.promedio_diario || 0"
            :horaPico="statsData?.hora_pico || '00:00 AM'"
          />
        </template>
      </div>
    </div>
  </div>
</template>

