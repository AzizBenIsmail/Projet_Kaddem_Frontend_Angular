import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Projet } from 'app/models/Projet';
import { ProjetService } from 'app/Services/ProjetService/projet.service';
import { ProjetResolver } from '../ProjetResolver';

@Component({
  selector: 'app-get-projets',
  templateUrl: './get-projets.component.html',
  styleUrls: ['./get-projets.component.scss']
})
export class GetProjetsComponent implements OnInit {

  projets: Projet[] = [];
  projet : Projet=new Projet();



  
 


   constructor(private _projetService: ProjetService ,private router: Router ,  private _activatedRoute: ActivatedRoute
    ) {
    
    }
 
   ngOnInit(): void {
    
   this.listProjets();
 
     }
 
 
     listProjets() {
       this._projetService.getProjets().subscribe(data => {
         this.projets = data;
       });
     }
     deleteProjet(id:number){
       this._projetService.deleteProjet(id).subscribe(
         data => {
           console.log('deleted response', data);
           this.listProjets();
         }
       )
     }
 
   
    
    
 
   
     updateProjet(id: number){
      this.router.navigate(['update', id]);
    }
 
 
   
 
 
 
   }