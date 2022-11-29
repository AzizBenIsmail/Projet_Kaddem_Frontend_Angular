import { Component, OnInit } from '@angular/core';
import { DepartementserviceService } from 'app/Services/ServicesDepartement/departementservice.service';

@Component({
  selector: 'app-alldepartement',
  templateUrl: './alldepartement.component.html',
  styleUrls: ['./alldepartement.component.scss']
})
export class AlldepartementComponent implements OnInit {
  departements:any;

  constructor(private departementService:DepartementserviceService) { }

  ngOnInit(): void {
    this.departementService.findAllDepartement().subscribe(
      (d)=>{
        console.log(d);
this.departements=d;
      }
    )
  }

}
