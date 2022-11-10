import { sveltekit } from '@sveltejs/kit/vite';
import Unocss from 'unocss/vite';
import {
	presetTypography,
	presetIcons,
	presetUno,
  transformerDirectives,
	transformerVariantGroup,
	transformerCompileClass,
} from 'unocss'
import { extractorSvelte } from '@unocss/core';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [
		Unocss({
			extractors: [extractorSvelte],
			presets: [presetUno(), presetTypography(), presetIcons({ scale: 2.0 })],
			transformers: [transformerDirectives(), transformerVariantGroup(), transformerCompileClass()]
		}),
		sveltekit()
	]
};

export default config;
