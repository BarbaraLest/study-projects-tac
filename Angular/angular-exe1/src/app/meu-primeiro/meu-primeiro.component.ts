import { Component } from "@angular/core";

@Component({
    selector: 'app-meu-primeiro',
    //template: '<b> Primeiro Componente </b> <p> Feito por mim</p>',
    templateUrl: './meu-primeiro.component.html',
    styles: ['.destaque {color: blue; background: yellow}']
})

export class MeuPrimeiroComponent{
    nome: string = "Barbara R";
    hobbies: string[] = ['ver serie', 'ouvir musica'];

    destacar:  boolean = false;

    public digaOi(){
        alert("Oi " + this.nome);
    }

    public mudarDestaque = () => {
        this.destacar = !this.destacar;
        console.log(this.destacar);
    }


}