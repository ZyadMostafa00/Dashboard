import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-btnup',
  templateUrl: './btnup.component.html',
  styleUrl: './btnup.component.css'
})
export class BtnupComponent {
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isVisible = window.pageYOffset > 600; // Show button after scrolling 100px
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
