let display = document.querySelector('.result_window');

let buttons = Array.from(document.querySelectorAll('.num_btn'));

buttons.map((button)=>{
    button.addEventListener('click',(e)=>{
        switch (e.target.innerText) {
            case 'AC':
                display.innerText = '0';
                break;
            case'=':
            let test = display.innerText
            display.innerText=(eval(test.replace('÷','/')))
            display.innerText=display.innerText.slice(0,10)
            console.log(display.innerText)
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

