import { Component, OnInit } from '@angular/core';
import { Projet } from 'app/models/Projet';
import { ProjetService } from 'app/Services/ProjetService/projet.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-projet',
  templateUrl: './projet.component.html',
  styleUrls: ['./projet.component.scss']

})
export class ProjetComponent implements OnInit {
  projets: Projet[] = [];
 projet : Projet=new Projet();
  constructor(private _projetService: ProjetService) {
   
   }

  ngOnInit(): void {
   
      this.listProjets();
    }


    listProjets() {
      this._projetService.getProjets().subscribe(data => {
        this.projets = data;
      });
    }
  
  }


