import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: true,
		strictPort: true,
		// Open Code / code-server proxy hostnames can vary.
		// Allow proxied Host headers in dev to avoid Vite 403s.
		allowedHosts: true
	},
	plugins: [tailwindcss(), sveltekit()]
});
