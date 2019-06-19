window.addEventListener('DOMContentLoaded', Render);

window._PAGE = 1;

function Render(){
    debugger
    switch(window._PAGE){
        case 1:
            document.body.appendChild(new Nav());
            document.body.appendChild(new Login());
        break;

        case 2:
            document.body.appendChild(new Register());
        break;

        case 3:
            document.body.appendChild(document.createTextNode('popup conta google'));
        break;

        case 4:
            debugger
            if(document.getElementById('Nav') !== null)
                document.getElementById('Nav').remove();
            document.body.appendChild(new Menu());
            document.body.appendChild(new Home());
        break;
    }
}