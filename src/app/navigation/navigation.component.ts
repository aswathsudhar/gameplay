import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  PlayerName : any
  NameBoolean = false;
  constructor() { }

  ngOnInit() {
    this.PlayerName = localStorage.getItem("PlayerName")

    if(this.PlayerName){
      this.NameBoolean = true
    }
  }

}
