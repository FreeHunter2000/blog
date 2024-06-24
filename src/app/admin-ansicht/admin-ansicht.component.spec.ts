import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAnsichtComponent } from './admin-ansicht.component';

describe('AdminAnsichtComponent', () => {
  let component: AdminAnsichtComponent;
  let fixture: ComponentFixture<AdminAnsichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminAnsichtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminAnsichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
