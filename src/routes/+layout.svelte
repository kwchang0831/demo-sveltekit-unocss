<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'uno.css';

	import SvelteTheme from 'svelte-themes/SvelteTheme.svelte';
</script>

<SvelteTheme attribute="class" enableSystem={false} />
<slot />
