import initButtonRadio from './initButtonRadio'

function main(): void
{
    initSex('block');
    initCalc ();
   
}

let previousSexButton = document.getElementById('women') as HTMLInputElement;

function initSex(button: string): void
{
    const input = document.getElementsByClassName( button ) as NodeListOf<Element>

	const onExtern = ( event: Event ): void => 
	{	
		if ( event == undefined )
		{
			return;
		}
		const target = event.target as HTMLInputElement;
		if ( target.name == undefined )
		{
			return;
        }
        if (target.name == 'sex')
        {
            previousSexButton = target;
        }
    }
    initButtonRadio( input[0], onExtern );
    
}


function initCalc (): void
{
    const button = document.getElementById('calculate') as HTMLButtonElement;
    let elem = document.getElementById('cl-index') as HTMLElement;
    let elem2 = document.getElementById('day-cal') as HTMLElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        const s = previousSexButton.value as string;
        const form = document.forms[0];
        const h = (<HTMLInputElement>form.elements[0]).value;
        const w = (<HTMLInputElement>form.elements[1]).value;
        const a = (<HTMLInputElement>form.elements[2]).value;
        const sbi =calculateSBI (String(s), Number(h), Number(w), Number(a));
        const imt = calculateIMT (Number(h), Number(w));
        elem.innerHTML = String(imt);
        elem2.innerHTML = String(sbi);
    };
	button.addEventListener( 'click', onExtern);
}



function calculateSBI (s: String, h: number, w: number, a: number): number
{
    if ( s === 'women' ) {
        return Math.round(( 447.6+(9.2*w)+(3.1*h)-(4.3*a)));
    } else {
        return Math.round(( (88.36+(13.4*w)+(4.8*h)-(5.7*a))));
    }
    
}

function calculateIMT ( h: number, w: number): number
{
    return Math.round((w / ( Math.pow(h / 100, 2 ) ))*10)/10;
}

export{
    main as default,
};