<script lang="ts">
	import themeStore, { setTheme } from 'svelte-themes';

	function darkmodeSwitch() {
		if ($themeStore.theme === 'dark') {
			setTheme('light');
		} else {
			setTheme('dark');
		}
	}
</script>

{#key $themeStore.theme}
	<div class="absolute top-2 right-2 all:transition-400 animate-slide-in-down">
		<button aria-label="Dark Mode Switch" on:click={darkmodeSwitch}>
			<div class="i-carbon-sun dark:i-carbon-moon" />
		</button>
	</div>
{/key}

<div class="flex h-screen text-center select-none all:transition-400">
	<div class="ma">
		<div
			class="text-5xl text-black hover:text-green-600 dark:text-blue-500 fw100 animate-bounce-alt animate-count-infinite animate-duration-1s"
		>
			unocss
		</div>
		<div class="text-lg op60 fw300 m1">The instant on-demand Atomic CSS engine.</div>
		<div class="flex justify-center text-2xl m2 op60 hover:op100">
			<a href="https://github.com/unocss/unocss" target="_blank" aria-label="Get UnoCSS">
				<div class="i-carbon-logo-github" />
			</a>
		</div>
	</div>
</div>
<div class="absolute left-0 right-0 text-center bottom-5 op60 fw300 select-none">
	on-demand · instant · fully customizable
</div>
