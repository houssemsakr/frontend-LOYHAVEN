import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcolocationComponent } from './addcolocation.component';

describe('AddcolocationComponent', () => {
  let component: AddcolocationComponent;
  let fixture: ComponentFixture<AddcolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddcolocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddcolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
