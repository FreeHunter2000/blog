import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtikelSeiteComponent } from './artikel-seite.component';

describe('ArtikelSeiteComponent', () => {
  let component: ArtikelSeiteComponent;
  let fixture: ComponentFixture<ArtikelSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArtikelSeiteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArtikelSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
