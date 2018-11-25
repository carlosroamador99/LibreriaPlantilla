import { TipoDto } from "../Dto/tipo.dto";
import { CategoriaDto } from "../Dto/categoria.dto";

export interface ResourceResponse{
    title: string;
    anyo: number;
    autor: string;
    content: string;
    type: TipoDto;
    category: CategoriaDto;
    free: boolean;
    id: number;
}