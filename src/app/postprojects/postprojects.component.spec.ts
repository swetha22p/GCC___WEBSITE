import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostprojectsComponent } from './postprojects.component';

describe('PostprojectsComponent', () => {
  let component: PostprojectsComponent;
  let fixture: ComponentFixture<PostprojectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostprojectsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostprojectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
