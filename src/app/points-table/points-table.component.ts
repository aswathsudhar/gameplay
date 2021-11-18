import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points-table',
  templateUrl: './points-table.component.html',
  styleUrls: ['./points-table.component.css']
})
export class PointsTableComponent implements OnInit {

  players = [];
  cols: any[];

  constructor() { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('All_Players'))
    this.cols = [
      { field: 'playerName', header: 'Player Name' },
      { field: 'correctAnswers', header: 'Correct Answers' },
      { field: 'wrongAnswers', header: 'Wrong Answers' }
  ];

  }

}
