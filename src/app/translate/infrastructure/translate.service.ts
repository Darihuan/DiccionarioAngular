import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {
  EspanolInputDto,
  EspanolOutputDto,
  InglesInputDto,
  InglesOutputDto,
  Palabra
} from "../../general/model/IdiomasDto";

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  private apiDiccionario: String;

  constructor(private http: HttpClient) {
    this.apiDiccionario = environment.apiDiccionario;
  }

  public translateToIngles(palabra: string): Observable<EspanolOutputDto> {
    return this.http.get<EspanolOutputDto>(this.apiDiccionario + "espanol/" + palabra);
  }

  public translateToEspanol(palabra: string): Observable<InglesOutputDto> {
    return this.http.get<InglesOutputDto>(this.apiDiccionario + "ingles/" + palabra);

  }

}
