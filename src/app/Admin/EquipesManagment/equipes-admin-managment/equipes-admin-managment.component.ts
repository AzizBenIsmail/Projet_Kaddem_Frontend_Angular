import {AfterViewInit, Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {Equipe, EquipeColumns} from '../../../models/Equipe';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import {FormControl, FormGroup} from '@angular/forms';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddEquipeComponent} from '../add-equipe/add-equipe.component';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {ConfirmDialogComponent} from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-equipes-admin-managment',
  templateUrl: './equipes-admin-managment.component.html',
  styleUrls: ['./equipes-admin-managment.component.css']
})
export class EquipesAdminManagmentComponent   {
  listEquipe:any;
text:String="";
 // @ViewChild(AddEquipeComponent) addview !:AddEquipeComponent

 // closeResult = '';
  displayedColumns: string[] = EquipeColumns.map((col) => col.key);
  columnsSchema: any = EquipeColumns;
  equipes:any;
  equipe : Equipe
  dataSource = new MatTableDataSource<Equipe>();
  valid: any = {};



  constructor(private equipeService:EquipeService,public dialog: MatDialog) {
    this.equipe = new Equipe();
  }

  ngOnInit() {
    this.equipeService.findAllEquipes().subscribe((res: any) => {
      this.dataSource.data = res;

    });


  }


  editRow(row) {
    if (row.id === 0) {
      this.equipeService.save(row).subscribe((newEquipe: Equipe) => {
        row.idEquipe = newEquipe.idEquipe;
        row.isEdit = false;
      });
    }
    else
    {
      this.equipeService.updateEquipe(row.idEquipe,row).subscribe(() => (row.isEdit = false));
    }}




  saveEquipe(e:Equipe){
    console.log(e.idEquipe)
this.equipeService.save(e).
subscribe(data=>{

  alert("Cree avec succé")
});
  }
  onSubmit() {
    this.equipeService.save(this.equipe).subscribe(result => {
      alert("Cree avec succé")
    });
  }


  addRow() {
    const newRow: Equipe = {
      idEquipe: 0,
      nomEquipe: '',
      isValid: true,
      isDeleted:false,
      niveau:'',
      isSelected:false,
      isEdit:true


    };
    this.dataSource.data = [newRow, ...this.dataSource.data];
  }

  removeRow(id:number) {
    console.log("hii1")
    this.equipeService.deleteEquipe(id).subscribe(() => {
      console.log(id)
      this.dataSource.data = this.dataSource.data.filter(
          (e: Equipe) => e.idEquipe !== id
      );
    });
  }
  ChangeValiditeRow(id:number,idD:number) {
    console.log("hii1")

    this.equipeService.changeValidite(id,idD).subscribe(() => {
      console.log(id,idD)



    });
let lista :any ;
   this.equipeService.findAllEquipes().subscribe((res: any) => {
      this.dataSource.data = res;
lista=res;
for(let i =0;i<lista.length;i++){
  console.log(lista[i].idEquipe)
  if(lista[i].idEquipe==id){
  if(lista[i].isValid==0){
    this.text="non valideeeee"
  }if(lista[i].isValid==1){
    this.text="valideeee"
  }}
}


    });



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





 /*


  get EquipeId(){
    return this.equipeUpdateForm.get('idEquipe');
  }
  get EquipeNom(){
    return this.equipeUpdateForm.get('nomEquipe');
  }*/


 /* changeisUpdate(){
    this.isupdated=false;
  }
*/


}
