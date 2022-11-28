import { ThreadService } from './../../../../Services/ThreadService/thread.service';
import { Component, OnInit } from '@angular/core';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { Thread } from 'app/models/Thread';

@Component({
  selector: 'app-create-thread',
  templateUrl: './create-thread.component.html',
  styleUrls: ['./create-thread.component.scss']
})
export class CreateThreadComponent implements OnInit {

thread: Thread= new Thread();
faUser= faUserFriends;
errorMessage: string="";

  constructor(private threadService:ThreadService) { }

  ngOnInit(): void {
  }

  addThread(){
    this.thread.etudiant=1;
    this.threadService.create(this.thread).subscribe(data =>{
      console.log("added successfully")
    },
    
    err=>{
      console.log(this.thread)
      if(err?.status){
        this.errorMessage="erro";
      }

    }
      )
  }
}
