
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhateverDataTableComponent } from './whatever-data-table.component';

describe('WhateverDataTableComponent', () => {
  let component: WhateverDataTableComponent;
  let fixture: ComponentFixture<WhateverDataTableComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ WhateverDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhateverDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
