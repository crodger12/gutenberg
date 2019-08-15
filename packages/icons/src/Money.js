
/**
 * WordPress dependencies
 */
import { primitives } from '@wordpress/components';

/**
 * Internal dependencies
 */
import { getIconClassName } from '../icon-class';

const { Path, SVG } = primitives;

export default function Money( { size = 20, className, ariaPressed, ...props } ) {
	const iconClass = getIconClassName( 'money', className, ariaPressed );
	return (
		<SVG
			aria-hidden
			role="img"
			focusable="false"
			className={ iconClass }
			xmlns="http://www.w3.org/2000/svg"
			width={ size }
			height={ size }
			viewBox="0 0 20 20"
			{ ...props }
		>
			<Path d="M0 3h20v12h-.75c0-1.79-1.46-3.25-3.25-3.25-1.31 0-2.42.79-2.94 1.91-.25-.1-.52-.16-.81-.16-.98 0-1.8.63-2.11 1.5H0V3zm8.37 3.11c-.06.15-.1.31-.11.47s-.01.33.01.5l.02.08c.01.06.02.14.05.23.02.1.06.2.1.31.03.11.09.22.15.33.07.12.15.22.23.31s.18.17.31.23c.12.06.25.09.4.09.14 0 .27-.03.39-.09s.22-.14.3-.22c.09-.09.16-.2.22-.32.07-.12.12-.23.16-.33s.07-.2.09-.31c.03-.11.04-.18.05-.22s.01-.07.01-.09c.05-.29.03-.56-.04-.82s-.21-.48-.41-.66c-.21-.18-.47-.27-.79-.27-.19 0-.36.03-.52.1-.15.07-.28.16-.38.28-.09.11-.17.25-.24.4zm4.48 6.04v-1.14c0-.33-.1-.66-.29-.98s-.45-.59-.77-.79c-.32-.21-.66-.31-1.02-.31l-1.24.84-1.28-.82c-.37 0-.72.1-1.04.3-.31.2-.56.46-.74.77-.18.32-.27.65-.27.99v1.14l.18.05c.12.04.29.08.51.14.23.05.47.1.74.15.26.05.57.09.91.13.34.03.67.05.99.05.3 0 .63-.02.98-.05.34-.04.64-.08.89-.13.25-.04.5-.1.76-.16l.5-.12c.08-.02.14-.04.19-.06zm3.15.1c1.52 0 2.75 1.23 2.75 2.75s-1.23 2.75-2.75 2.75c-.73 0-1.38-.3-1.87-.77.23-.35.37-.78.37-1.23 0-.77-.39-1.46-.99-1.86.43-.96 1.37-1.64 2.49-1.64zm-5.5 3.5c0-.96.79-1.75 1.75-1.75s1.75.79 1.75 1.75-.79 1.75-1.75 1.75-1.75-.79-1.75-1.75z" />
		</SVG>
	);
}
