import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      const bannerImg = document.querySelector('#banner img') as HTMLElement;
      if (bannerImg) {
        const offset = window.scrollY * 0.1;
        bannerImg.style.transform = `translateY(${offset}px)`;
      }
    });
  }
  

}
