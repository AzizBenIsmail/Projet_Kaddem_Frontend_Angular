import { Component, OnInit } from '@angular/core';
import { Universite } from 'app/models/Universite';
import { UniversiteserviceService } from 'app/Services/ServicesUniversite/universiteservice.service';

@Component({
  selector: 'app-all-universite',
  templateUrl: './all-universite.component.html',
  styleUrls: ['./all-universite.component.scss']
})
export class AllUniversiteComponent implements OnInit {
universites:any;
  constructor(private universiteService:UniversiteserviceService) { }

  ngOnInit(): void {
    this.universiteService.findAllUniversite().subscribe(
      (d)=>{
        console.log(d);
this.universites=d;
      }
    )
  }

}
