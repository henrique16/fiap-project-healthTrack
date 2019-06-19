class Register{
    constructor(){
        debugger
        return this.Create();
    }

    Create(){
        this.div = document.createElement('div');
        this.div.id = 'Register';
        return this.Render();
    }

    Render(){
        debugger
        this.div.appendChild(new IndroductionRegister());
        this.div.appendChild(new ContentRegister());
        return this.div;
    }
}

class IndroductionRegister{
    constructor(){
        return this.Create();
    }

    Create(){
        this.mainDiv = document.createElement('div');
        this.div = document.createElement('div');
        this.span = document.createElement('span');
        this.textSpan = document.createTextNode('Falta pouco.');
        this.p = document.createElement('p');
        this.textP = document.createTextNode('Vamos lá, preencha as informações para ajudarmos você.');
        return this.StyleMedia();
    }

    StyleMedia(){
        this.mainDiv.classList.add('intr-register');
        return this.Render();
    }

    Render(){
        this.mainDiv.appendChild(this.div);
        this.div.appendChild(this.span);
        this.span.appendChild(this.textSpan);
        this.div.appendChild(this.p);
        this.p.appendChild(this.textP);
        return this.mainDiv;
    }
}

class ContentRegister{
    constructor(){
        return this.Create();
    }

    Create(){
        this.mainDiv = document.createElement('div');
        this.nomeDiv = document.createElement('div');
        this.idadeDiv = document.createElement('div');
        this.pesoDiv = document.createElement('div');
        this.alturaDiv = document.createElement('div');
        this.sexoDicv = document.createElement('div');
        this.btnDiv = document.createElement('div');
        this.nomeInput = document.createElement('input');
        this.idadeInput = document.createElement('input');
        this.pesoInput = document.createElement('input');
        this.alturaInput = document.createElement('input');
        this.mascInput = document.createElement('input');
        this.femiInput = document.createElement('input');
        this.mascSpan = document.createElement('span');
        this.femiSpan = document.createElement('span');
        this.btnInput = document.createElement('input');
        return this.StyleMedia();
    }

    StyleMedia(){
        debugger
        this.mainDiv.classList.add('info-register');
        this.nomeInput.placeholder = 'Nome...';
        this.nomeInput.type = 'text';
        this.idadeInput.placeholder = 'Idade...';
        this.idadeInput.type = 'text';
        this.pesoInput.placeholder = 'Peso...';
        this.pesoInput.type = 'text';
        this.alturaInput.placeholder = 'Altura...';
        this.sexoDicv.id = 'sexo';
        this.alturaInput.type = 'text';
        this.mascInput.id = 'm';
        this.mascInput.type = 'radio';
        this.mascInput.name = 'radio';
        this.mascInput.checked = true;
        this.femiInput.id = 'f';
        this.femiInput.type = 'radio';
        this.femiInput.name = 'radio';
        this.mascSpan.id = 'male';
        this.mascSpan.classList.add('fas', 'fa-male');
        this.femiSpan.classList.add('fas', 'fa-female');
        this.btnInput.type = 'submit';
        this.btnInput.value = 'Salvar';
        return this.Event();
    }

    Event(){
        this.btnInput.addEventListener('click', this.btnInputEvent);
        return this.Render();
    }

    btnInputEvent(){
        document.getElementById('Register').remove();
        window._PAGE = 4;
        Render();
    }

    Render(){
        debugger
        this.mainDiv.appendChild(this.nomeDiv);
        this.nomeDiv.appendChild(this.nomeInput);
        this.mainDiv.appendChild(this.idadeDiv);
        this.idadeDiv.appendChild(this.idadeInput);
        this.mainDiv.appendChild(this.pesoDiv);
        this.pesoDiv.appendChild(this.pesoInput);
        this.mainDiv.appendChild(this.alturaDiv);
        this.alturaDiv.appendChild(this.alturaInput);
        this.mainDiv.appendChild(this.sexoDicv);
        this.sexoDicv.appendChild(this.mascInput);
        this.sexoDicv.appendChild(this.mascSpan);
        this.sexoDicv.appendChild(this.femiInput);
        this.sexoDicv.appendChild(this.femiSpan);
        this.mainDiv.appendChild(this.btnDiv);
        this.btnDiv.appendChild(this.btnInput);
        return this.mainDiv;
    }
}