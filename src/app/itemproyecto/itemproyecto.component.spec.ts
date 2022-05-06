import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemproyectoComponent } from './itemproyecto.component';

describe('ItemproyectoComponent', () => {
  let component: ItemproyectoComponent;
  let fixture: ComponentFixture<ItemproyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemproyectoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemproyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
