class Login{
    constructor(){
        return this.Create();
    }

    Create(){
        this.div = document.createElement('div');
        this.div.id = 'Login';
        return this.Render();
    }

    Render(){
        this.div.appendChild(new IndroductionLogin());
        this.div.appendChild(new ContentLogin());
        return this.div;
    }
}

class IndroductionLogin{
    constructor(){
        return this.Create();
    }

    Create(){
        this.mainDiv = document.createElement('div');
        this.div = document.createElement('div');
        this.span = document.createElement('span');
        this.spanText = document.createTextNode('Seja bem vindo ao Health Track');
        this.p = document.createElement('p');
        this.pText = document.createTextNode(
            'Acompanhe sua alimentação e crie rotinas '+
            'de treinos de forma simples, você verá ' +
            'resultados com rotinas organizadas e de fácil acesso.'
            );
        return this.StyleMedia();
    }

    StyleMedia(){
        this.mainDiv.classList.add('intr-login');
        return this.Render();
    }

    Render(){
        this.mainDiv.appendChild(this.div);
        this.div.appendChild(this.span);
        this.span.appendChild(this.spanText);
        this.div.appendChild(this.p);
        this.p.appendChild(this.pText);
        return this.mainDiv;
    }
}

class ContentLogin{
    constructor(){
        return this.Create();
    }

    Create(){
        debugger
        this.mainDiv = document.createElement('div');
        this.emailDiv = document.createElement('div');
        this.passDiv = document.createElement('div');
        this.registerDiv = document.createElement('div');
        this.googleDiv = document.createElement('div');
        this.emailInput = document.createElement('input');
        this.passInput = document.createElement('input');
        this.registerlInput = document.createElement('input');
        this.googleSpan = document.createElement('span');
        this.googleLabel = document.createElement('label');
        this.labelText = document.createTextNode('Google');
        return this.StyleMedia();
    }

    StyleMedia(){
        debugger
        this.mainDiv.classList.add('reg-login');
        this.registerDiv.id = 'btn';
        this.googleDiv.id = 'google';
        this.emailInput.placeholder = 'Email...';
        this.emailInput.type = 'text';
        this.passInput.placeholder = 'Senha...';
        this.passInput.type = 'text';
        this.registerlInput.type = 'submit';
        this.registerlInput.value = 'Cadastrar';
        this.googleSpan.classList.add('fab', 'fa-google');
        return this.Event();

    }

    Event(){
        debugger
        this.registerlInput.addEventListener('click', this.EventRegister);
        this.googleDiv.addEventListener('click', this.EventGoogle);
        return this.Render();
    }

    EventRegister(){
        debugger
        window._PAGE = 2;
        document.getElementById('Login').remove();
        Render();
    }

    EventGoogle(){
        debugger
        window._PAGE = 3;
        Render();
    }

    Render(){
        debugger
        this.mainDiv.appendChild(this.emailDiv);
        this.emailDiv.appendChild(this.emailInput);
        this.mainDiv.appendChild(this.passDiv);
        this.passDiv.appendChild(this.passInput);
        this.mainDiv.appendChild(this.registerDiv);
        this.registerDiv.appendChild(this.registerlInput);
        this.mainDiv.appendChild(this.googleDiv);
        this.googleDiv.appendChild(this.googleSpan);
        this.googleDiv.appendChild(this.googleLabel);
        this.googleLabel.appendChild(this.labelText);
        return this.mainDiv;
    }
}