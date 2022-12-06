import { Reponse } from "./../../../../models/Reponse";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Etudiant } from "app/models/Etudiant";
import { ReponseService } from "app/Services/ReponseService/reponse.service";

@Component({
  selector: "app-details-thread",
  templateUrl: "./details-thread.component.html",
  styleUrls: ["./details-thread.component.scss"],
})
export class DetailsThreadComponent implements OnInit {

  updateR :number =1;
  id: number; 
 reply: FormControl;
 object2: String;
  // display: FormControl;
  // nb_likes: FormControl; 
   question: FormControl; 
  //etudiant: FormControl;
  etudiant:Etudiant; 
  by: number; 
  reponseForm: FormGroup;
  object: String; 
 // replydate: FormControl; 
  //updatedAt: FormControl; 
  threadDate: Date;
  question2: String;

  reponse: Reponse = new Reponse();
  errorMessage: string = "";
  reponse1: Reponse = new Reponse();

  etudiant1: Etudiant = new Etudiant();
  constructor(private ReponseService: ReponseService) {



    ReponseService.getById(3).subscribe(
      (data) => {
this.id=data.id;
this.etudiant=data.etudiant

        this.by=data.thread.etudiant.idE;
       
        this.threadDate=data.thread.postDate;
        console.log("AYOOOOOOOO"+data.reply);
        this.reponse = data;
        console.log("AYOOOOOOOO"+this.reponse.reply);

if(this.updateR==0){

        this.reponseForm = new FormGroup({
          //object: new FormControl(this.reponse.thread.object),
        //  by: new FormControl(this.reponse.thread.etudiant.idE),
         // threadDate: new FormControl(this.reponse.thread.postDate),
         object:new FormControl(this.reponse.thread.object),
          question: new FormControl(this.reponse.thread.question),
          reply: new FormControl(this.reponse.reply),
    
    
      });
    }
    else{
      this.object2 =data.thread.object;
      this.question2=this.reponse.thread.question;
      this.reponseForm = new FormGroup({
        //object: new FormControl(this.reponse.thread.object),
      //  by: new FormControl(this.reponse.thread.etudiant.idE),
       // threadDate: new FormControl(this.reponse.thread.postDate),
       reply: new FormControl(this.reponse.reply),
  
  
    });
    }

      },
      (err) => {
        this.reponse = err.error;
        console.log(err);

      },
    );
  }



  charge(){
 alert(this.reponse.reply);


    

  }

  ngOnInit(): void {

   
   // this.createFormControls(this.reponse);
    //this.createForm();
  }

  // createFormControls(reponse: Reponse) {
  //   this.reply = new FormControl(reponse.reply);
  //   this.display = new FormControl(reponse.display);
  //   this.nb_likes = new FormControl(reponse.nb_likes);
  //   this.question = new FormControl(reponse.thread.question);
  //   this.object = new FormControl(reponse.thread.object);
  // }

  // createForm() {
  //   this.reponseForm = new FormGroup({
  //     reply: this.reply,
  //     display: this.display,
  //     nb_likes: this.nb_likes,
  //     question: this.question,
  //     object: this.object,
  //   });
  // }

  update() {
    // console.log(this.reply);
    // console.log(this.display);
    // console.log(this.nb_likes);
    // console.log(this.question);
  }
  addReply(){

  }
}
