import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {EquipeService} from '../../../Services/ServicesEquipes/equipe.service';

@Component({
  selector: 'app-contact-admin-dev-equipes',
  templateUrl: './contact-admin-dev-equipes.component.html',
  styleUrls: ['./contact-admin-dev-equipes.component.scss']
})
export class ContactAdminDevEquipesComponent implements OnInit {
  sendMailForm = this.fb.group({
    title: ["", Validators.required],
    body: ["", Validators.required]
  });
  failed = false;
  isLoading = false;
  constructor( private fb: FormBuilder,
               private EquipeService: EquipeService
  ) { }

  ngOnInit(): void {
  }
  onSubmit = () => {

    if (this.sendMailForm.valid) {


      const formdata: FormData = new FormData();

      formdata.append("title", this.sendMailForm.value.title);

      formdata.append("body", this.sendMailForm.value.body);

      this.EquipeService.sendMailToAdminDev(formdata).subscribe(
          () => {

            this.isLoading = false;
          },
          err => {
            this.isLoading = false;
            this.failed = true;
          }
      );
    }
  };
}
