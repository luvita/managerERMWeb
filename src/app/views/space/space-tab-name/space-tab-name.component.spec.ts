import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceTabNameComponent } from './space-tab-name.component';

describe('SpaceTabNameComponent', () => {
  let component: SpaceTabNameComponent;
  let fixture: ComponentFixture<SpaceTabNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceTabNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceTabNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
