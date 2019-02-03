import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username: string;

  constructor() { }

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  logout() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    localStorage.removeItem('wallet');
    localStorage.removeItem('walletId');
    window.location.reload()
  }
}
