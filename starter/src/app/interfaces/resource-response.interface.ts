import { TipoDto } from "../Dto/tipo.dto";
import { CategoriaDto } from "../Dto/categoria.dto";

export interface ResourceResponse{
    title: string;
    anyo: string;
    autor: string;
    content: string;
    type: TipoDto;
    category: CategoriaDto;
    free: boolean;
    id: string;
}