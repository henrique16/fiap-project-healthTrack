class Perfil{
    constructor(){
        return this.Create();
    }

    Create(){
        this.div = document.createElement('div');
        this.div.id = 'Perfil';
        return this.Render();
    }

    Render(){
        return this.div;
    }
}