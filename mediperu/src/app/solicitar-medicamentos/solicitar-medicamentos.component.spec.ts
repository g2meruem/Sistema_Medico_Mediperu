import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarMedicamentosComponent } from './solicitar-medicamentos.component';

describe('SolicitarMedicamentosComponent', () => {
  let component: SolicitarMedicamentosComponent;
  let fixture: ComponentFixture<SolicitarMedicamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolicitarMedicamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolicitarMedicamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
