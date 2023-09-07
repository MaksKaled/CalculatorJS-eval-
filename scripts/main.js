let display = document.querySelector('.result_window');

let buttons = Array.from(document.querySelectorAll('.num_btn'));

buttons.map((button)=>{
    button.addEventListener('click',(e)=>{
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '0';
                break;
            case'=':
            display.innerText=eval((display.innerText).replace('÷','/'))
            break;
            case'%':
            let procent = display.innerText;
            display.innerText=eval(procent+'/100')
            break;
            case'↵':
            let back = display.innerText
            display.innerText = back.slice(0,back.length -1);
            break;
            case '÷':
            
            default:
                if(display.innerText === '0' && e.target.innerText !=='.'){
                    display.innerText = e.target.innerText
                }
                else{display.innerText += e.target.innerText}

        }

        
    })
})

