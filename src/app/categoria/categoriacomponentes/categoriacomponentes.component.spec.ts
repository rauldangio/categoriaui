import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriacomponentesComponent } from './categoriacomponentes.component';

describe('CategoriacomponentesComponent', () => {
  let component: CategoriacomponentesComponent;
  let fixture: ComponentFixture<CategoriacomponentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriacomponentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriacomponentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
