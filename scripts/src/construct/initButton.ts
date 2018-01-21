/**
 * Инициализация кнопки
 * 
 * @module
 */
;

/**
 * Инициализация кнопки
 * 
 * @param button Кнопка
 * @returns
 */

function buttonAction (button: HTMLButtonElement, act: (event: Event) => void ): void
{
	const onAct = (event: Event): void =>
	{
		act(event);
		event.preventDefault();
	};
	button.addEventListener( 'click', onAct );
}

export {
	buttonAction as default,
};