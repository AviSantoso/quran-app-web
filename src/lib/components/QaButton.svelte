<script lang="ts">
	import { BtnStyle } from '$lib/styles';

	type ColorType = 'blue';
	type VariantType = 'normal' | 'outlined';

	let color: ColorType = 'blue';
	let variant: VariantType = 'normal';
	let className: string = '';

	const props = $$restProps;
</script>

<button {...props} class={BtnStyle({})}>
	<slot />
</button>
