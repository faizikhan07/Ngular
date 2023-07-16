import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  length:number = 0;
  includeLetters:boolean = false;
  includeNumbers:boolean = false;
  includeSymbols:boolean = false;
  password:string = '';

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if(!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeUseLetters(): void {                   // Event Handler
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers(): void {                  // Event Handler
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols(): void {                  // Event Handler
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick(): void {                       // Event Handler
    const numbers: string = '1234567890';
    const letters: string = 'abcdefghijklmnopqrstuvwxyz';
    const symbols: string = '!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters) {
      validChars += letters;
    }
    if(this.includeNumbers) {
      validChars += numbers;
    }
    if(this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword: string = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    this.password = generatedPassword;
  }

  getPassword(): string {
    return this.password;
  }
}

/*
In this app, we have covered the below topics of angular
1. Event binding
2. Property binding
3. Interpolation
4. Structural Directives
*/