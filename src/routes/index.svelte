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

<div class=":uno: flex h-screen text-center select-none all:transition-400">
	<div class=":uno: absolute top-2 right-2">
		<button aria-label="Dark Mode Switch" on:click={darkmodeSwitch}>
			<div class=":uno: !w-[2rem] !h-[2rem] text-inherit i-carbon-sun dark:i-carbon-moon" />
		</button>
	</div>

	<div class="ma">
		<div
			class=":uno: text-5xl text-black dark:text-blue-500 fw100 animate-bounce-alt animate-count-infinite animate-duration-1s"
		>
			unocss
		</div>
		<div class=":uno: text-lg op60 fw300 m1">The instant on-demand Atomic CSS engine.</div>
		<div class=":uno: flex justify-center text-2xl m2 op60 hover:op100">
			<a href="https://github.com/unocss/unocss" target="_blank" aria-label="Get UnoCSS">
				<div class=":uno: !w-[2rem] !h-[2rem]  i-carbon-logo-github text-inherit" />
			</a>
		</div>
	</div>
</div>
<div class=":uno: absolute left-0 right-0 text-center bottom-5 op60 fw300">
	on-demand · instant · fully customizable
</div>
