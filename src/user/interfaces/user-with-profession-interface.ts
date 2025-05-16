import { user_s as ModelUser } from '@prisma/client';
import { profession_s as ProfessionModel } from "generated/prisma";

export interface UserWithProfession extends ModelUser{
    professions?: ProfessionModel[];
}

/** 
 * Interface a corregir
 * 
 * Error: No tiene caso crear una interface como tipo de dato, si no mas bien darle el objetivo de que sea un conjunto de modelos
 * 
        export interface GetOneUserById {
            id_user: number;
            name_user: string;
            last_name: string;
            age: number;
        }
*/