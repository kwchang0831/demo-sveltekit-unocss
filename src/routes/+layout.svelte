<script lang="ts">
	import '@unocss/reset/tailwind.css';
	import 'uno.css';
</script>

<slot />

<style>
	:global(body) {
		--at-apply: 'bg-[#E1E3DD]/[0.9] text-black';
	}
	:global(body.dark) {
		--at-apply: 'bg-[#191919]/[0.9] text-white';
	}
</style>
