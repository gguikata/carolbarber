import { Component, CUSTOM_ELEMENTS_SCHEMA, HostListener } from '@angular/core';



@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainComponent {
  slidesPerView: number = 3;
  screenWidth!: number;
}

// @HostListener('window:resize')
// getScreenWidth(){
//   this.screenWidth = window.innerWidth;
//   if(this.screenWidth >= 250 && this.screenWidth <= 600){
//     this.slidesPerView = 1;
//   }
// }

