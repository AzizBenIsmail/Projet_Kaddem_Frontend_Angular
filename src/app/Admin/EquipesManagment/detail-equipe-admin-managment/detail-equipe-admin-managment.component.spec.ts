import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEquipeAdminManagmentComponent } from './detail-equipe-admin-managment.component';

describe('DetailEquipeAdminManagmentComponent', () => {
  let component: DetailEquipeAdminManagmentComponent;
  let fixture: ComponentFixture<DetailEquipeAdminManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEquipeAdminManagmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEquipeAdminManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
