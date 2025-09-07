import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqcolocationComponent } from './reqcolocation.component';

describe('ReqcolocationComponent', () => {
  let component: ReqcolocationComponent;
  let fixture: ComponentFixture<ReqcolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReqcolocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReqcolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
