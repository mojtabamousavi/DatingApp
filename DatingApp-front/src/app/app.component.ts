import { Component, Injectable, OnInit } from '@angular/core';
import { error } from 'console';
import { urlToHttpOptions } from 'url';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})


export class AppComponent implements OnInit {
  title = 'DatingApp1';
  users: any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getusers();
  }


  getusers() {
    this.http.get("https://localhost:7012/user").subscribe(res => {
      this.users = res;
      console.log(this.users);
    },error => {
      console.log(error)
    })
  }
}
