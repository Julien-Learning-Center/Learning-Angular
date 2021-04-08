import { Component } from '@angular/core';

@Component({
  selector: 'learning-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hasLetters = false;
  hasNumbers = false;
  hasSymbols = false;
  length = 0;
  password = '';

  onButtonClick() {
    const letters = 'abcdefghijklmnopqrstuvwyxz';
    const numbers = '0123456789';
    const symbols = '&#$%*()[]^';

    let generatedPassword = '';
    let validCharacters = '';

    if (this.hasLetters) {
      validCharacters += letters;
    }

    if (this.hasNumbers) {
      validCharacters += numbers;
    }

    if (this.hasSymbols) {
      validCharacters += symbols;
    }

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCharacters.length);
      generatedPassword += validCharacters[index];
    }

    this.password = generatedPassword;
  }

  onChangeUseLetters() {
    this.hasLetters = !this.hasLetters;
  }

  onChangeUseNumbers() {
    this.hasNumbers = !this.hasNumbers;
  }

  onChangeUseSymbols() {
    this.hasSymbols = !this.hasSymbols;
  }

  onInputLength(value: string) {
    const parsedValue = parseInt(value);

    if (!isNaN(parsedValue)) {
      this.length = parseInt(value);
    }
  }
}
