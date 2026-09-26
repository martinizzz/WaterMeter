<template>
  <div class="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-between">
    <div class="flex justify-between items-start">
      <h3 class="text-gray-500 font-semibold">Flujo de Agua</h3>
      <span class="relative flex h-3 w-3 mt-1">
        <span v-if="estado" class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-water opacity-75"></span>
        <span class="relative inline-flex rounded-full h-3 w-3" :class="estado ? 'bg-brand-water' : 'bg-gray-300'"></span>
      </span>
    </div>
    
    <div class="mt-6 flex flex-col items-center justify-center flex-1">
      <p class="text-5xl font-extrabold" :class="estado ? 'text-brand-water' : 'text-gray-300'">
        {{ caudal }}
      </p>
      <p class="text-gray-500 font-medium mt-2">Litros / Minuto</p>
    </div>

    <div class="mt-6 text-center">
      <span class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium" 
            :class="estado ? 'bg-blue-50 text-blue-700' : 'bg-gray-50 text-gray-500'">
        {{ estado ? 'Agua corriendo' : 'Tubería inactiva' }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ caudal: number; estado: boolean }>();
</script>