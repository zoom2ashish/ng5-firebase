import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  public onSignOut() {
    this.authService.doLogout().then((res) => {
      console.log('Logged Out');
      this.router.navigate(['login']);
    }, (err) => {
      console.log('Failed to log out');
    });
  }
}
