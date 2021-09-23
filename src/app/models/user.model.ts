import { Address } from './address.model';

export class User{

    constructor(public firstname: string,
                public lastname: string,
                public email: string,
                public address: Address, //pour l'adresse, on va créer un nouveau model qui va s'appeler **address.model.ts** qui comprendra tous les éléments
                public description: string,
                public dateBirth: string,
                public aliases?: string[],   //"?" pour un champ optionnel, pas forcement besoin pour initialiser un User
                ){

                }
}
