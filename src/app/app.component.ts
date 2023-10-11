import { Component, OnInit } from '@angular/core';
import { AuthService } from './Pages/Auth/Services/auth.service';
import { Router } from '@angular/router';
import { SplashScreen } from '@capacitor/splash-screen';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {
    // Show the splash for two seconds and then automatically hide it:
    //  SplashScreen.show({
    //   showDuration: 2000,
    //   autoHide: true,
    // });
  }
  ngOnInit(): void {

    // this.authService.setRole("ADMIN")
    // this.authService.setToken("kdjslkfj")
    if (this.authService.isLogin() && this.authService.isProvider()) {
      this.router.navigate(['provider']);
    } else if (this.authService.isLogin() && this.authService.isUser()) {
      this.router.navigate(['customer']);
    } else if (!this.authService.isLogin()) {
      this.router.navigate(['auth/login']);
    }
  //   else if (this.authService.isLogin()) {
  //     this.router.navigate(['admin']);
    
  // }
}
}
