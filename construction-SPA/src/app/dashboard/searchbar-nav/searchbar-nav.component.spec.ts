import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarNavComponent } from './searchbar-nav.component';

describe('SearchbarNavComponent', () => {
  let component: SearchbarNavComponent;
  let fixture: ComponentFixture<SearchbarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
