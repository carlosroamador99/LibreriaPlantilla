import { TipoDto } from "../Dto/tipo.dto";
import { CategoriaDto } from "../Dto/categoria.dto";

export interface ResourceResponse{
    title: string;
    autor: string;
    anyo: string;
    content: string;
    type: TipoDto;
    category: CategoriaDto;
    user: string;
    free: boolean;
    id: string;
}