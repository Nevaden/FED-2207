import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LargeBlurbsComponent } from './large-blurbs.component';

describe('LargeBlurbsComponent', () => {
  let component: LargeBlurbsComponent;
  let fixture: ComponentFixture<LargeBlurbsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LargeBlurbsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LargeBlurbsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
