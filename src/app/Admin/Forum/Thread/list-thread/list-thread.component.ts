import { ThreadService } from "app/Services/ThreadService/thread.service";
import { Reponse } from "./../../../../models/Reponse";
import { Component, OnInit } from "@angular/core";
import { Thread } from "app/models/Thread";

@Component({
  selector: "app-list-thread",
  templateUrl: "./list-thread.component.html",
  styleUrls: ["./list-thread.component.scss"],
})
export class ListThreadComponent implements OnInit {
  threads: any;
  // thread: Thread = new Thread();
  thread3: Thread = new Thread();
  thread2: any;
  myDate = new Date();
  constructor(private threadService: ThreadService) {
    this.threadService.findAll().subscribe(
      (data) => {
        this.threads = data;

        for (let i = 0; i < data.length; i++) {
          this.threads[i].etudiant=data[i].etudiant.idE;
        }
        console.log(this.threads);

      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnInit(): void {

  }
}
