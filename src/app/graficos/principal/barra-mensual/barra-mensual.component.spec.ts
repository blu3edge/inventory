import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraMensualComponent } from './barra-mensual.component';

describe('BarraMensualComponent', () => {
  let component: BarraMensualComponent;
  let fixture: ComponentFixture<BarraMensualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraMensualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraMensualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
