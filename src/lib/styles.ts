type ColorType = 'blue';
type VariantType = 'normal' | 'outlined';

export interface BtnStyleProps {
	color?: ColorType;
	variant?: VariantType;
}

export function BtnStyle(props: BtnStyleProps = {}): string {
	const variant: VariantType = props.variant ?? 'normal';
	const color: ColorType = props.color ?? 'blue';

	let classes = ['py-1', 'px-2'];

	if (variant === 'outlined') {
		classes = [...classes, 'border'];
		switch (color) {
			default:
				classes = [
					...classes,
					'text-blue-500',
					'border-blue-500',
					'hover:bg-blue-500',
					'hover:text-white'
				];
		}
	} else {
		classes = [...classes, 'text-white'];
		switch (color) {
			default:
				classes = [...classes, 'bg-blue-500', 'hover:bg-blue-600'];
		}
	}

	return `${classes.join(' ')}`;
}
