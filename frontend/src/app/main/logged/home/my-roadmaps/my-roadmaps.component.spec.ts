import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRoadmapsComponent } from './my-roadmaps.component';

describe('MyRoadmapsComponent', () => {
  let component: MyRoadmapsComponent;
  let fixture: ComponentFixture<MyRoadmapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRoadmapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRoadmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
