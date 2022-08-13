import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';
import { presetTypography, presetIcons, presetUno } from 'unocss';
import { extractorSvelte } from '@unocss/core';
import transformerDirective from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Unocss({
			extractors: [extractorSvelte],
			presets: [presetUno(), presetTypography(), presetIcons({ scale: 2.0 })],
			transformers: [transformerDirective(), transformerVariantGroup()]
		}),
		sveltekit()
	]
};

export default config;
