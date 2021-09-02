export interface Palabra {
}

export interface EspanolOutputDto extends Palabra {
  id: number;
  palabra: string;
  descripcion: string;
  fechaAlta: string;
  fechaModificacion: string;
  palabrasIngles: InglesSimpleDtoOutput[];
}

export interface EspanolSimpleDtoOutput extends Palabra {
  id: number;
  palabra: string;
  descripcion: string;
  fechaAlta: string;
  fechaModificacion: string;
}

export interface EspanolInputDto extends Palabra {
  palabra: string;
  descripcion: string;
}

export interface InglesOutputDto extends Palabra {
  id: number;
  palabra: string;
  palabraEspanol: string;
  fechaAlta: string;
  fechaModificacion: string;
  espanolSimpleOutputDto: EspanolSimpleDtoOutput;


}

export interface InglesSimpleDtoOutput extends Palabra {
  id: number;
  palabra: string;
  palabraEspanol: string;
  fechaAlta: string;
  fechaModificacion: string;
}

export interface InglesInputDto extends Palabra {
  palabra: string;
  palabraEspanol: string;

}
