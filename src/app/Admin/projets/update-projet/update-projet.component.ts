import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input()projet:Projet;
  
  projets: Projet[] = [];
 // projet : Projet=new Projet();
  date: string;
  startDate= new Date();
  constructor(private _projetService: ProjetService ,private _routerUp: Router ,  private _activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {

   
    
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      
      
      this.date= yyyy + '-' + mm + '-' + dd;



  
    }


  enregistrerProjet(data:Projet){
      
    this._projetService.updateProjet(data,this.projet.idProjet).subscribe(
      data => {
        console.log('response', data);
      
        this.reloadComponent();
      })

  }
  onDateChange(): void {
    this.startDate = this.projet.dateDebutP;
  
  }  


  reloadComponent() {
    this._routerUp.routeReuseStrategy.shouldReuseRoute = () => false;
    this._routerUp.onSameUrlNavigation = 'reload';
    this._routerUp.navigate(['/Projets']);
}





}