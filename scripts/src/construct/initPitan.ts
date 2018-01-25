function main(): void
{
    initPit ();
    init1200();
    init1400();
    init1600();
    init1800();
    init2000();
    init2200();
   
}

function initPit(): void
{
    const button = document.getElementById('Pitanie') as HTMLButtonElement;
    const b = document.getElementById('basis') as HTMLButtonElement;
    const c = document.getElementById('cor') as HTMLButtonElement;
    const r = document.getElementById('retur') as HTMLButtonElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }
        b.style.display = 'none';
        c.style.display = 'block';
        r.style.display = 'block';
    };
    button.addEventListener( 'click', onExtern);
}

function init1200(): void
{
    const button = document.getElementById('1200') as HTMLButtonElement;
    let x12=document.getElementById('p1200') as HTMLElement;
    let x14=document.getElementById('p1400') as HTMLElement;
    let x16=document.getElementById('p1600') as HTMLElement;
    let x18=document.getElementById('p1800') as HTMLElement;
    let x20=document.getElementById('p2000') as HTMLElement;
    let x22=document.getElementById('p2200') as HTMLElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }

        x12.style.display = 'block';
        x14.style.display = 'none';
        x16.style.display = 'none';
        x18.style.display = 'none';
        x20.style.display = 'none';
        x22.style.display = 'none';
    };
    button.addEventListener( 'click', onExtern);
}

function init1400(): void
{
    const button = document.getElementById('1400') as HTMLButtonElement;
    let x12=document.getElementById('p1200') as HTMLElement;
    let x14=document.getElementById('p1400') as HTMLElement;
    let x16=document.getElementById('p1600') as HTMLElement;
    let x18=document.getElementById('p1800') as HTMLElement;
    let x20=document.getElementById('p2000') as HTMLElement;
    let x22=document.getElementById('p2200') as HTMLElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }

        x12.style.display = 'none';
        x14.style.display = 'block';
        x16.style.display = 'none';
        x18.style.display = 'none';
        x20.style.display = 'none';
        x22.style.display = 'none';
    };
    button.addEventListener( 'click', onExtern);
}

function init1600(): void
{
    const button = document.getElementById('1600') as HTMLButtonElement;
    let x12=document.getElementById('p1200') as HTMLElement;
    let x14=document.getElementById('p1400') as HTMLElement;
    let x16=document.getElementById('p1600') as HTMLElement;
    let x18=document.getElementById('p1800') as HTMLElement;
    let x20=document.getElementById('p2000') as HTMLElement;
    let x22=document.getElementById('p2200') as HTMLElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }

        x12.style.display = 'none';
        x14.style.display = 'none';
        x16.style.display = 'block';
        x18.style.display = 'none';
        x20.style.display = 'none';
        x22.style.display = 'none';
    };
    button.addEventListener( 'click', onExtern);
}

function init1800(): void
{
    const button = document.getElementById('1800') as HTMLButtonElement;
    let x12=document.getElementById('p1200') as HTMLElement;
    let x14=document.getElementById('p1400') as HTMLElement;
    let x16=document.getElementById('p1600') as HTMLElement;
    let x18=document.getElementById('p1800') as HTMLElement;
    let x20=document.getElementById('p2000') as HTMLElement;
    let x22=document.getElementById('p2200') as HTMLElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }

        x12.style.display = 'none';
        x14.style.display = 'none';
        x16.style.display = 'none';
        x18.style.display = 'block';
        x20.style.display = 'none';
        x22.style.display = 'none';
    };
    button.addEventListener( 'click', onExtern);
}

function init2000(): void
{
    const button = document.getElementById('2000') as HTMLButtonElement;
    let x12=document.getElementById('p1200') as HTMLElement;
    let x14=document.getElementById('p1400') as HTMLElement;
    let x16=document.getElementById('p1600') as HTMLElement;
    let x18=document.getElementById('p1800') as HTMLElement;
    let x20=document.getElementById('p2000') as HTMLElement;
    let x22=document.getElementById('p2200') as HTMLElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }

        x12.style.display = 'none';
        x14.style.display = 'none';
        x16.style.display = 'none';
        x18.style.display = 'none';
        x20.style.display = 'block';
        x22.style.display = 'none';
    };
    button.addEventListener( 'click', onExtern);
}

function init2200(): void
{
    const button = document.getElementById('2200') as HTMLButtonElement;
    let x12=document.getElementById('p1200') as HTMLElement;
    let x14=document.getElementById('p1400') as HTMLElement;
    let x16=document.getElementById('p1600') as HTMLElement;
    let x18=document.getElementById('p1800') as HTMLElement;
    let x20=document.getElementById('p2000') as HTMLElement;
    let x22=document.getElementById('p2200') as HTMLElement;
    const onExtern = ( event: Event ): void => 
	{	
        if (event == undefined) {
            return;
        }

        x12.style.display = 'none';
        x14.style.display = 'none';
        x16.style.display = 'none';
        x18.style.display = 'none';
        x20.style.display = 'none';
        x22.style.display = 'block';
    };
    button.addEventListener( 'click', onExtern);
}

export{
    main as default,
};