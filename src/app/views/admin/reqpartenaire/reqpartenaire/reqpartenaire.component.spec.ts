import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqpartenaireComponent } from './reqpartenaire.component';

describe('ReqpartenaireComponent', () => {
  let component: ReqpartenaireComponent;
  let fixture: ComponentFixture<ReqpartenaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqpartenaireComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReqpartenaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
