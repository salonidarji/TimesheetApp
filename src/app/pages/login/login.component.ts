import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService} from "../../layouts/auth-layout/auth.service";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(public authService:AuthService) {}

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
