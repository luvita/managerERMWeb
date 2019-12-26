import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionNamesComponent } from './suggestion-names.component';

describe('SuggestionNamesComponent', () => {
  let component: SuggestionNamesComponent;
  let fixture: ComponentFixture<SuggestionNamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestionNamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
