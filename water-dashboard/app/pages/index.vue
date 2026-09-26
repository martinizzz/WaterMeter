<template>
  <div>
    <header class="mb-8">
      <h2 class="text-2xl font-bold text-gray-800">Dashboard en Tiempo Real</h2>
      <p class="text-gray-500">Monitoreo de consumo y nivel de tinaco</p>
    </header>

    <!-- Grid Principal de Métricas en Tiempo Real -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <!-- Estos serán reemplazados por los componentes reales en la Fase 2 -->
      <UiSkeletonCard />
      <UiSkeletonCard />
      <UiSkeletonCard />
    </div>

    <!-- Grid Secundario para Analítica e Histórico -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="col-span-1 lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[300px] flex items-center justify-center">
        <p class="text-gray-400 font-medium animate-pulse">Esqueleto de Gráfica de 7 Días...</p>
      </div>
      <div class="col-span-1 flex flex-col gap-6">
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[140px] flex items-center justify-center">
          <p class="text-gray-400 font-medium animate-pulse">Esqueleto KPI 1...</p>
        </div>
        <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 min-h-[140px] flex items-center justify-center">
          <p class="text-gray-400 font-medium animate-pulse">Esqueleto KPI 2...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// En Nuxt 3, las páginas usan layouts automáticamente si están configurados en app.vue
</script>