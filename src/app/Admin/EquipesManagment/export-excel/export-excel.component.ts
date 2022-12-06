import { Component, OnInit } from '@angular/core';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';
import {MatTableDataSource} from '@angular/material/table';
import {Equipe, EquipeColumns} from '../../../models/Equipe';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-export-excel',
  templateUrl: './export-excel.component.html',
  styleUrls: ['./export-excel.component.scss']
})
export class ExportExcelComponent implements OnInit {
  columnsSchema: any = EquipeColumns;
  displayedColumns: string[] = EquipeColumns.map((col) => col.key);
  constructor(private equipeService:EquipeService) { }
  dataSource = new MatTableDataSource<Equipe>();
  ngOnInit(): void {
    this.equipeService.findAllEquipes().subscribe((res: any) => {
      this.dataSource.data = res;
      // console.log(this.dataSource.data)
      for(let e of this.dataSource.data){
        //
        // this.equipeService.nbMembresParEquipe(e.idEquipe).subscribe( (res3:any)=>{
        //     this.nombreMembreParEquipe=res3;
        //     console.log(res3)
        // } )
      }

    });
  }
  display = false;
  display2 = false;
  displayMembres=false;
  onPress() {
    //this.display = true;

    //To toggle the component
    this.display = !this.display;
  }
  onPress2() {
    //this.display = true;

    //To toggle the component
    this.display2 = !this.display2;
  }

  public openPDF(): void {
    // let doc = new jsPDF();

    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 1000;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/jpg');
      let PDF = new jsPDF('l', 'pt', 'letter');
      let position = 0;

      PDF.text("Mounaaaaaaaaaaaaaaaaaa", 20, 20);
      PDF.addImage(FILEURI, 'JPG', 0, position, fileWidth, fileHeight);
      PDF.save('equipesEsprit.pdf');
    });
  }
  fileName='equipes.xlsx'
  exportexcel():void{
    let element=document.getElementById('htmlData')
    const ws:XLSX.WorkSheet=XLSX.utils.table_to_sheet(element)
    const wb:XLSX.WorkBook=XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(wb,ws,'Sheet1')
    XLSX.writeFile(wb,this.fileName)
  }
}
