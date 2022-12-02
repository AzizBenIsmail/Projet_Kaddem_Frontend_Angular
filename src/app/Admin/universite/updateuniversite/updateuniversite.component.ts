import { Component, OnInit } from '@angular/core';
import {FormBuilder, NgForm} from '@angular/forms';
import {Universite} from '../../../models/Universite';
import {UniversiteserviceService} from '../../../Services/ServicesUniversite/universiteservice.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-updateuniversite',
    templateUrl: './updateuniversite.component.html',
    styleUrls: ['./updateuniversite.component.scss']
})
export class UpdateuniversiteComponent implements OnInit {

    universites: Universite[] = [];
    uni: Object = new Universite();
    universite: Universite = new Universite();

    constructor(private universiteservice: UniversiteserviceService,private _routerUp: Router ,  private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit(): void {


        const isIdPresent = this._activatedRoute.snapshot.paramMap.has('id');

        if (isIdPresent) {
            const id = +this._activatedRoute.snapshot.paramMap.get('id');
            this.universiteservice.getUniversite(id).subscribe(
                data => this.universite = <Universite>data
            )
        }

    }
    enregistrerUniversite(f: NgForm) {

        this.universiteservice.save(this.universite).subscribe(
            data => {
                console.log('response', data);
                this._routerUp.navigateByUrl('Universite');
            })
    }
}
