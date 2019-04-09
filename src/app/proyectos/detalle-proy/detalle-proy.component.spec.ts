import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProyComponent } from './detalle-proy.component';

describe('DetalleProyComponent', () => {
  let component: DetalleProyComponent;
  let fixture: ComponentFixture<DetalleProyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleProyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleProyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
