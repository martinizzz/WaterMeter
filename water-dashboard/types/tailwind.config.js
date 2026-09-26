/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./components/**/*.{js,vue,ts}",
        "./layouts/**/*.vue",
        "./pages/**/*.vue",
        "./plugins/**/*.{js,ts}",
        "./app.vue",
        "./error.vue",
    ],
    theme: {
        extend: {
            colors: {
                brand: {
                    water: '#3b82f6', // Azul principal para el agua
                    alert: '#ef4444',
                    success: '#22c55e'
                }
            }
        },
    },
    plugins: [],
}