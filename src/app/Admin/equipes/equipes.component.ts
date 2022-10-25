import { Component, OnInit } from '@angular/core';
import { Equipe } from 'app/models/Equipe';
import { EquipeService } from 'app/Services/ServicesEquipes/equipe.service';
import {faFilm} from '@fortawesome/free-solid-svg-icons';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-equipes',
  templateUrl: './equipes.component.html',
  styleUrls: ['./equipes.component.scss']
})
export class EquipesComponent implements OnInit {
equipes:any;
  equipe : Equipe=new Equipe();
  constructor(private equipeService:EquipeService) { }
  isupdated = false;
  ngOnInit(): void {
    this.equipeService.findAllEquipes().subscribe(data => {
      this.equipes = data;
    });
  }

  updateEquipe(id: number){
    this.equipeService.getEquipe(id)
        .subscribe(
            data => {

              this.equipes=data
            },
            error => console.log(error));
  }

  equipeUpdateForm=new FormGroup({
    idEquipe:new FormControl(),
    nomEquipe:new FormControl(),

  });

  updateEq(updateEq){
    this.equipe=new Equipe();
    this.equipe.idEquipe=this.EquipeId.value;
    this.equipe.nomEquipe=this.EquipeNom.value;




    this.equipeService.updateEquipe(this.equipe.idEquipe,this.equipe).subscribe(
        data => {
          this.isupdated=true;
          this.equipeService.findAllEquipes().subscribe(data =>{
            this.equipes =data
          })
        },
        error => console.log(error));
  }

  get EquipeId(){
    return this.equipeUpdateForm.get('idEquipe');
  }
  get EquipeNom(){
    return this.equipeUpdateForm.get('nomEquipe');
  }
  changeisUpdate(){
    this.isupdated=false;
  }

}
