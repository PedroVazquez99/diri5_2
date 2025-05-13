import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig(({ mode }) => {
//     // Cargamos variables de entorno según el mode
//     // (staging, production, etc.)
//     // process requiere npm install -D @types/node
//     const env = loadEnv(mode, process.cwd(), '')
//     return {
//         base: env.VITE_APP_BASE_URL || '/',
//         plugins: [react()], 
//     }
// })

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
        return {
            base: env.VITE_APP_BASE_URL || '/', // Ajusta la base según la variable
            build: {
            outDir: 'docs',
        },
            plugins: [react()],
    }
})