import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialDetalhesComponent } from './tutorial-detalhes.component';

describe('TutorialDetalhesComponent', () => {
  let component: TutorialDetalhesComponent;
  let fixture: ComponentFixture<TutorialDetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TutorialDetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
