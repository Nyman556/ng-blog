import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeBlogPostComponent } from './make-blog-post.component';

describe('MakeBlogPostComponent', () => {
  let component: MakeBlogPostComponent;
  let fixture: ComponentFixture<MakeBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeBlogPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
