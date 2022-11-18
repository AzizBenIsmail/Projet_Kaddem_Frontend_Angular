import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { ProjetService } from 'app/Services/ProjetService/projet.service';

@Component({
  selector: 'app-update-projet',
  templateUrl: './update-projet.component.html',
  styleUrls: ['./update-projet.component.scss']
})
export class UpdateProjetComponent implements OnInit {

  projets: Projet[] = [];
  projet : Projet=new Projet();

  constructor(private _projetService: ProjetService ,private _routerUp: Router ,  private _activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {

   
      const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');
    
      if (isIdPresent) {
          const id = +this._activatedRoute.snapshot.paramMap.get('id');
          this._projetService.getProjet(id).subscribe(
            data => this.projet = data 
          )
      }
   



  
    }

  
  enregistrerProjet(f:NgForm){
      
    this._projetService.saveProjet(this.projet).subscribe(
      data => {
        console.log('response', data);
        this._routerUp.navigateByUrl("Projets");
      })

  }
}