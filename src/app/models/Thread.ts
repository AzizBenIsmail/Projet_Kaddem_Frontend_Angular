import { Reponse } from "./Reponse";
export class Thread {
  id: number;
  question: String;
  nb_likes: number = 0;
  postDate: Date = new Date();
  display: boolean;
  object: String;
  etudiant: number;
  verified: boolean = false;
  updatedAt: Date = new Date();
}
