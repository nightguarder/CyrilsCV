// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			title: string;
			author: string;
		}
		// interface PageState {}
		// interface Platform {}
	}

	// Add type declarations for .svx files
	declare module '*.svx' {
		import type { SvelteComponent } from 'svelte';
		export const metadata: {
			title: string;
			author: string;
		};
		const component: typeof SvelteComponent;
		export default component;
	}
}

export {};
