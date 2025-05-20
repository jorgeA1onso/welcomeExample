import { users as ModelUser } from '@prisma/client';
import { professions as ProfessionModel } from "@prisma/client";

export interface UserWithProfession extends Omit<ModelUser, 'profession'>{
    profession: ProfessionModel[];
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