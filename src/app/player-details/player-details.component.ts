import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.css'],
  providers: [MessageService]
})
export class PlayerDetailsComponent implements OnInit {

  players = [];
  cols: any[];
  deleteIndex: any;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.players = JSON.parse(localStorage.getItem('All_Players'))
    this.cols = [
      { field: 'playerName', header: 'Player Name' },
      { field: 'correctAnswers', header: 'Correct Answers' },
      { field: 'wrongAnswers', header: 'Wrong Answers' }
    ];
  }

  OpenDeletePlayers(index) {
    this.deleteIndex = index
    this.messageService.add({ key: 'S', sticky: true, severity: 'success', summary: 'Are You Sure?', detail: 'Confirm to proceed' })
  }

  ConfirmDeletePlayer() {
    this.players.splice(this.deleteIndex, 1);
    this.messageService.clear('S')
    localStorage.setItem("All_Players", JSON.stringify(this.players))
  }

  onReject() {
    this.messageService.clear('S')
  }
}
