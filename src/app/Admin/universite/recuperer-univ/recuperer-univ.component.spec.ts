import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecupererUnivComponent } from './recuperer-univ.component';

describe('RecupererUnivComponent', () => {
  let component: RecupererUnivComponent;
  let fixture: ComponentFixture<RecupererUnivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecupererUnivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecupererUnivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
