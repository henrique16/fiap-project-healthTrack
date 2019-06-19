class Menu{
    constructor(){
        return this.Create();
    }

    Create(){
        debugger
        this.mainDiv = document.createElement('div');
        this.homeDiv = document.createElement('div');
        this.dinnerDiv = document.createElement('div');
        this.exerDiv = document.createElement('div');
        this.userDiv = document.createElement('div');
        this.homeSpan = document.createElement('span');
        this.dinnerSpan = document.createElement('span');
        this.exerSpan = document.createElement('span');
        this.userSpan = document.createElement('span');
        return this.StyleMedia();
    }

    StyleMedia(){
        debugger
        this.mainDiv.classList.add('menu');
        this.homeSpan.classList.add('fas', 'fa-home');
        this.homeSpan.id = 'home';
        this.dinnerSpan.classList.add('fas', 'fa-utensils');
        this.exerSpan.classList.add('fas', 'fa-dumbbell');
        this.userSpan.classList.add('fas', 'fa-user')
        return this.Render();
    }

    Render(){
        debugger
        this.mainDiv.appendChild(this.homeDiv);
        this.homeDiv.appendChild(this.homeSpan);
        this.mainDiv.appendChild(this.dinnerDiv);
        this.dinnerDiv.appendChild(this.dinnerSpan);
        this.mainDiv.appendChild(this.exerDiv);
        this.exerDiv.appendChild(this.exerSpan);
        this.mainDiv.appendChild(this.userDiv);
        this.userDiv.appendChild(this.userSpan);

        return this.mainDiv;
    }
}