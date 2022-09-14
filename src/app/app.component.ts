import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'todo';

  constructor(private authService: AuthService){}

  ngOnInit(): void {
    //this.authService.login({username: "4lexDel", password: "azerty1"});
    // this.authService.test();
  }
}
