import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NomgenComponent } from './nomgen.component';

describe('NomgenComponent', () => {
  let component: NomgenComponent;
  let fixture: ComponentFixture<NomgenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NomgenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NomgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
