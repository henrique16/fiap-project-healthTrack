class Nav{
    constructor(){
        return this.Create();
    }

    Create(){
        this.div = document.createElement('div');
        this.icon = document.createElement('span');
        this.span = document.createElement('span');
        this.text = document.createTextNode('TRACK');
        return this.StyleMedia();
    }

    StyleMedia(){
        this.div.classList.add('nav');
        this.div.id = 'Nav';
        this.icon.classList.add('fas', 'fa-trophy');
        this.icon.id = 'icon';
        return this.Render();
    }

    Render(){
        this.div.appendChild(this.icon);
        this.div.appendChild(this.span);
        this.span.appendChild(this.text);
        return this.div; 
    }
}