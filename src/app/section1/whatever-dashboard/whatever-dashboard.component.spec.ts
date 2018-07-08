
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhateverDashboardComponent } from './whatever-dashboard.component';

describe('WhateverDashboardComponent', () => {
  let component: WhateverDashboardComponent;
  let fixture: ComponentFixture<WhateverDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhateverDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhateverDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
