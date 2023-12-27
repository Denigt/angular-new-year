import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiftMessageComponent } from './gift-message.component';

describe('GiftMessageComponent', () => {
  let component: GiftMessageComponent;
  let fixture: ComponentFixture<GiftMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GiftMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GiftMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
