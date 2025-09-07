import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllappartementComponent } from './allappartement.component';

describe('AllappartementComponent', () => {
  let component: AllappartementComponent;
  let fixture: ComponentFixture<AllappartementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllappartementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllappartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
