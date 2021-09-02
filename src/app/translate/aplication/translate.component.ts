import {Component, OnInit} from '@angular/core';
import {Clipboard} from '@angular/cdk/clipboard';
import {FormControl} from "@angular/forms";
import {TranslateService} from "../infrastructure/translate.service";

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.scss']
})
export class TranslateComponent implements OnInit {
  public entrada: string = "";
  public traduccion: string = "";
  public espanol: boolean = true;
  private anteriorletra: string = "";

  constructor(private clipBoard: Clipboard, private translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.listenerTraducir();
    this.listenerborrado();


  }

  public changeLanguage(): void {
    this.espanol = !this.espanol;
  }

  public copiar(): void {
    let contenido = new FormControl();
    contenido.patchValue(this.traduccion);
    this.clipBoard.copy(contenido.value);
  }

  private translate(texto: string, espanol: boolean): void {

    if (espanol) {
      this.translateService.translateToIngles(texto).subscribe(palabra => this.traduccion += " " + palabra.palabrasIngles[0].palabra);

    } else {
      this.translateService.translateToEspanol(texto).subscribe(palabra => this.traduccion += " " + palabra.palabraEspanol);
    }
  }

  private listenerborrado(): void {
    document.getElementById('textArea').addEventListener('keydown', (event) => {
      if (event.key == "Backspace") {
        this.traduccion = this.traduccion.substr(0, this.traduccion.lastIndexOf(' '));
        this.anteriorletra = this.traduccion.charAt(this.traduccion.length - 1);
      }

    });
  }

  private listenerTraducir(): void {
    document.getElementById('textArea').addEventListener('input', (event: InputEvent) => {
      this.anteriorletra = event.data;
      if (this.anteriorletra != " ") {
        let textooriginal = this.entrada.trim().split(" ");
        this.translate(textooriginal[textooriginal.length - 1], this.espanol);

      }

    });


  }


}
