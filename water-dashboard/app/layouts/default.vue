<template>
  <div class="min-h-screen bg-slate-50">
    <nav class="bg-white shadow-sm border-b border-gray-100 px-6 py-4">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <h1 class="text-xl font-bold text-gray-800 flex items-center gap-2">
          <span class="text-brand-water">💧</span> SmartWater IoT
        </h1>
        <div class="text-sm text-gray-500 font-medium">Estado: Configurando...</div>
      </div>
    </nav>
    
    <main class="max-w-7xl mx-auto p-6">
      <slot />
    </main>
  </div>
</template>