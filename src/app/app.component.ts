import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'matomo';

  constructor(private router: Router){

  }

   firstClick(){
      this.router.navigate(["/tracker1"]);
   }

   secondClick(){
    this.router.navigate(["/tracker2"]);
   }

   thirdClick(){
    this.router.navigate(["/tracker3"]);
   }

   fourthClick(){
    this.router.navigate(["/tracker4"]);
   }

}
