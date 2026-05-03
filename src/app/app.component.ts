import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isva:boolean=false;
showAlert(e: any): void {
  if (e.target.value.length > 7) {
    this.isva = true;
  } else {
    this.isva = false;
  }

}
num:number=0;
  inc():void {
    this.num++;

  }
  dec() :void {
    if(this.num>0){
      this.num--;
    }
    else{
      this.num=0;
    }
  }
  res() :void {
    this.num = 0;
  }

}

