import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpartenaireComponent } from './addpartenaire.component';

describe('AddpartenaireComponent', () => {
  let component: AddpartenaireComponent;
  let fixture: ComponentFixture<AddpartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddpartenaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
