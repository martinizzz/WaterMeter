<template>
  <div v-if="mensaje" 
       class="mb-6 border-l-4 p-4 rounded-r-lg shadow-sm flex items-center justify-between"
       :class="tipo === 'danger' ? 'bg-red-50 border-red-500 text-red-700' : 'bg-yellow-50 border-yellow-500 text-yellow-700'">
    <div class="flex items-center">
      <span class="text-2xl mr-3">{{ tipo === 'danger' ? '🚨' : '⚠️' }}</span>
      <p class="font-medium">{{ mensaje }}</p>
    </div>
    <button @click="$emit('dismiss')" class="text-gray-400 hover:text-gray-600 transition-colors">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  mensaje: string | null;
  tipo?: 'warning' | 'danger';
}>();

defineEmits(['dismiss']);
</script>