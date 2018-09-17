import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Firebase Integration App';
  isLoggedIn = false;

  constructor(private authService: AuthService) {
  }

}
