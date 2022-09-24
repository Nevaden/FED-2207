import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBlurbsComponent } from './small-blurbs.component';

describe('SmallBlurbsComponent', () => {
  let component: SmallBlurbsComponent;
  let fixture: ComponentFixture<SmallBlurbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallBlurbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallBlurbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
