import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireDetailsComponent } from './partenaire-details.component';

describe('PartenaireDetailsComponent', () => {
  let component: PartenaireDetailsComponent;
  let fixture: ComponentFixture<PartenaireDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PartenaireDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PartenaireDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
