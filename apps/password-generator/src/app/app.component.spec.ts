import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app).toBeTruthy();
  });

  it(`should initialize the class properties correctly'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    expect(app.hasLetters).toBeFalsy();
    expect(app.hasNumbers).toBeFalsy();
    expect(app.hasSymbols).toBeFalsy();
    expect(app.length).toBeFalsy();
    expect(app.password).toBeFalsy();
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);

    fixture.detectChanges();

    const compiled = fixture.nativeElement;

    expect(compiled.querySelector('h1').textContent).toContain(
      'Angular - Password Generator'
    );
  });
});
