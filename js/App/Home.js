class Home{
    constructor(){
        return this.Create();
    }

    Create(){
        this.div = document.createElement('div');
        this.div.id = 'Home';
        return this.Render();
    }

    Render(){
        debugger
        this.div.appendChild(new User());
        this.div.appendChild(new Grafic());
        this.div.appendChild(new Plus());
        return this.div;
    }
}

class User{
    constructor(){
        return this.Create();
    }

    Create(){
        this.mainDiv = document.createElement('div');
        this.imgDiv = document.createElement('div');
        this.photoDiv = document.createElement('div');
        this.infoDiv = document.createElement('div');
        this.photoSpan = document.createElement('span');
        this.table = document.createElement('table');
        this.trH = document.createElement('tr');
        this.calTh = document.createElement('th');
        this.agTh = document.createElement('th');
        this.trD = document.createElement('tr');
        this.calTd = document.createElement('td');
        this.agTd = document.createElement('td');
        this.calDiv = document.createElement('div');
        this.agDiv = document.createElement('div');
        this.calSapn = document.createElement('span');
        this.agSapn = document.createElement('span');
        this.calText = document.createTextNode('Calorias');
        this.agText = document.createTextNode('Água');
        return this.StyleMedia();
    }

    StyleMedia(){
        this.mainDiv.classList.add('usuario');
        this.imgDiv.classList.add('imagem');
        this.infoDiv.classList.add('informacoes');
        this.photoSpan.classList.add('fas', 'fa-user-circle');
        return this.Render();
    }

    Render(){
        this.mainDiv.appendChild(this.imgDiv);
        this.imgDiv.appendChild(this.photoDiv);
        this.photoDiv.appendChild(this.photoSpan);
        this.mainDiv.appendChild(this.infoDiv);
        this.infoDiv.appendChild(this.table);
        this.table.appendChild(this.trH);
        this.trH.appendChild(this.calTh);
        this.calTh.appendChild(this.calText);
        this.trH.appendChild(this.agTh);
        this.agTh.appendChild(this.agText);
        this.table.appendChild(this.trD);
        this.trD.appendChild(this.calTd);
        this.calTd.appendChild(this.calDiv);
        this.calDiv.appendChild(this.calSapn);
        this.trD.appendChild(this.agTd);
        this.agTd.appendChild(this.agDiv);
        this.agDiv.appendChild(this.agSapn);
        return this.mainDiv;
    }
}

class Grafic{
    constructor(){
        return this.Create();
    }

    Create(){
        this.mainDiv = document.createElement('div');
        this.alimDiv = document.createElement('div');
        this.imgDiv = document.createElement('div');
        this.aliSpan = document.createElement('span');
        this.aliText = document.createTextNode('Alimentação');
        this.img = document.createElement('img');
        return this.StyleMedia();
    }

    StyleMedia(){
        this.mainDiv.classList.add('grafico-saude');
        this.img.src = 'img/tipos-de-graficos-matematica.jpg';
        this.img.alt = 'gráfico';
        return this.Render();
    }

    Render(){
        this.mainDiv.appendChild(this.alimDiv);
        this.alimDiv.appendChild(this.aliSpan);
        this.aliSpan.appendChild(this.aliText);
        this.mainDiv.appendChild(this.imgDiv);
        this.imgDiv.appendChild(this.img);
        return this.mainDiv;
    }
}

class Plus{
    constructor(){
        return this.Create();
    }

    Create(){
        this.mainDiv = document.createElement('div');
        this.span = document.createElement('span');
        return this.StyleMedia();
    }

    StyleMedia(){
        this.mainDiv.classList.add('mais');
        this.span.classList.add('fa', 'fa-plus');
        return this.Render();
    }

    Render(){
        this.mainDiv.appendChild(this.span);
        return this.mainDiv;
    }
}