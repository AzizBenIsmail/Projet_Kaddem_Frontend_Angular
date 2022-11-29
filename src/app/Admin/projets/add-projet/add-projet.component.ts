import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { ProjetService } from 'app/Services/ProjetService/projet.service';

@Component({
  selector: 'app-add-projet',
  templateUrl: './add-projet.component.html',
  styleUrls: ['./add-projet.component.scss']
})
export class AddProjetComponent implements OnInit {

  projets: Projet[] = [];
  projet : Projet=new Projet();

 
  constructor(private _projetService: ProjetService , private _routerAdd: Router,
    private _activatedRoute: ActivatedRoute, private fb:FormBuilder) { }

  ngOnInit(): void {
   
  }
  enregistrerProjet(f:NgForm){
      
    this._projetService.saveProjet(this.projet).subscribe(
      data => {
        console.log('response', data);
        this._routerAdd.navigateByUrl("Projets");
      })

  }

 

  

    
     


  }
