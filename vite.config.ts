import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@Assets': path.resolve(__dirname, 'src/assets'),
            '@Components': path.resolve(__dirname, 'src/components'),
            '@Styles': path.resolve(__dirname, 'src/styles'),
            '@Content': path.resolve(__dirname, 'src/content'),
        }
    }
})
