import { Component, OnInit } from '@angular/core';
import { Universite, UniversiteColumns } from 'app/models/Universite';
import { UniversiteserviceService } from 'app/Services/ServicesUniversite/universiteservice.service';
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.scss']
})
export class UniversiteComponent implements OnInit {
  /*
  Universites:any;
  universite : Universite = new Universite();
  isupdated = false;

  constructor(private universiteService:UniversiteserviceService) { }

  ngOnInit(): void {
    this.universiteService.findAllUniversite().subscribe(data => {
      this.Universites = data;
      console.log(this.Universites);
    });
  }

  updateUniversite(id: number){
    this.universiteService.getUniversite(id)
        .subscribe(
            data => {

              this.Universites=data
            },
            error => console.log(error));
  }

  UniversiteUpdateForm=new FormGroup({
    idUniversite:new FormControl(),
    nomUniversite:new FormControl(),

  });

  updateUniver(updateUniversite){
    this.universite=new Universite();
    this.universite.idUniversite=this.universiteId.value;
    this.universite.nomUniversite=this.universiteNom.value;

    this.universiteService.updateUniversite(this.universite.idUniversite,this.universite).subscribe(
      data => {
        this.isupdated=true;
        this.universiteService.findAllUniversite().subscribe(data =>{
          this.Universites =data
        })
      },
      error => console.log(error));
}
get universiteId(){
  return this.UniversiteUpdateForm.get('idUniversite');
}
get universiteNom(){
  return this.UniversiteUpdateForm.get('nomUniversite');
}

changeisUpdate(){
  this.isupdated=false;
}
*/

listUniversite:any;
text:String="";
displayedColumns: string[] = UniversiteColumns.map((col) => col.key);
  columnsSchema: any = UniversiteColumns;
  Universites:any;
  universite : Universite
  dataSource = new MatTableDataSource<Universite>();
  valid: any = {};

  constructor(private universiteService:UniversiteserviceService) { 
        this.universite = new Universite();
  }

  ngOnInit() {
    this.universiteService.findAllUniversite().subscribe((res: any) => {
      this.dataSource.data = res;

    });

}
editRow(row) {
  if (row.id === 0) {
    this.universiteService.save(row).subscribe((newUniversite: Universite) => {
      row.idUniversite = newUniversite.idUniversite;
      row.isEdit = false;
    });
  }
  else
  {
    this.universiteService.updateUniversite(row.idUniversite,row).subscribe(() => (row.isEdit = false));
  }}

  aveEquipe(e:Universite){
    console.log(e.idUniversite)
this.universiteService.save(e).
subscribe(data=>{

  alert("Cree avec succé")
});
  }
  onSubmit() {
    this.universiteService.save(this.universite).subscribe(result => {
      alert("Cree avec succé")
    });
  }

  addRow() {
    const newRow: Universite = {
      idUniversite: 0,
      nomUniversite: '',
      isValid: true,
      isDeleted:false,
      isSelected:false,
      isEdit:true


    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id:number) {
    console.log("hii1")
    this.universiteService.deleteUniversite(id).subscribe(() => {
      console.log(id)
      this.dataSource.data = this.dataSource.data.filter(
          (e: Universite) => e.idUniversite !== id
      );
    });
  }

  ChangeValiditeRow(id:number,idD:number) {
    console.log("hii1")

    this.universiteService.changeValidite(id,idD).subscribe(() => {
      console.log(id,idD)



    });
let lista :any ;
   this.universiteService.findAllUniversite().subscribe((res: any) => {
      this.dataSource.data = res;
lista=res;
for(let i =0;i<lista.length;i++){
  console.log(lista[i].idUniversite)
  if(lista[i].idUniversite==id){
  if(lista[i].isValid==0){
    this.text="non valideeeee"
  }if(lista[i].isValid==1){
    this.text="valideeee"
  }}
}    });

}
inputHandler(e: any, id: number, key: string) {
  if (!this.valid[id]) {
    this.valid[id] = {};
  }
  this.valid[id][key] = e.target.validity.valid;
}

disableSubmit(id: number) {
  if (this.valid[id]) {
    return Object.values(this.valid[id]).some((item) => item === false);
  }
  return false;
}
  

  display = false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
  }