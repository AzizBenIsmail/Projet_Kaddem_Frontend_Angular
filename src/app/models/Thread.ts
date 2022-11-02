import { Reponse } from './Reponse';
import { ThreadType } from './ThreadType';
export class Thread{
    id:number;
    question:String;
    nb_likes:number;
    postDate:Date;
    display: boolean;
    threadType:ThreadType;
    etudiant:number;
    verified: boolean;
    updatedAt: Date;

}