import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-play-game',
  templateUrl: './play-game.component.html',
  styleUrls: ['./play-game.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [MessageService]
})
export class PlayGameComponent implements OnInit {

  PlayerName: any
  Colors: any
  timeLeft: number = 25;
  interval;

  borderColorArray: any = ['blue', 'green', 'yellow', 'red', 'orange', 'purple', 'violet', 'brown', 'cyan', 'grey', 'pink', 'black', 'white', 'tomato', 'indigo', 'maroon', 'ivory'];

  fontColorArray = ['ivory', 'maroon', 'indigo', 'tomato', 'white', 'black', 'pink', 'grey', 'blue', 'green', 'yellow', 'red', 'orange', 'purple', 'violet', 'brown', 'cyan'];

  Bordercount: number = 0;
  FontName: any;
  InputForm: FormGroup;
  submitted = false;
  disabledBtns = false;
  EnableSubBtn = true;
  PlayerScores: any;
  MatchAns: any;
  CorrectAnswers: number = 0;
  WrongAnswers: number = 0;
  PlayerNameArray: any = [];

  constructor(private router: Router, private formBuilder: FormBuilder, private messageService: MessageService) { }

  ngOnInit() {
    this.PlayerName = localStorage.getItem('PlayerName')
    this.InputForm = this.formBuilder.group({
      colorName: ['', Validators.required]
    })
    this.PlayerNameArray = JSON.parse(localStorage.getItem('All_Players'))
    console.log("All_Players", this.PlayerNameArray)
  }

  get f() {
    return this.InputForm.controls;
  }

  StartGame(fontId, circleId) {
    this.disabledBtns = true;
    this.EnableSubBtn = false;
    this.FontName = this.fontColorArray[0]
    this.MatchAns = document.getElementById(circleId).style.borderColor = this.borderColorArray[0];
    document.getElementById(fontId).style.color = this.fontColorArray[0];
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        for (var i = 0; i < this.PlayerNameArray.length; i++) {
          var index = this.PlayerNameArray[i].playerName === this.PlayerName
          if (index === true) {
            this.PlayerNameArray[i].correctAnswers = this.CorrectAnswers;
            this.PlayerNameArray[i].wrongAnswers = this.WrongAnswers;
            localStorage.setItem('All_Players', JSON.stringify(this.PlayerNameArray))
          }
        }
        this.messageService.add({ key: 'S', sticky: true, severity: 'success', summary: 'Your Scores' })
        clearInterval(this.interval)

      }

    }, 1000)
  }

  SubmitResults(circleId, fontId) {
    this.submitted = true;
    if (this.InputForm.invalid) {
      return false;
    }
    if (this.MatchAns === this.PlayerScores) {
      this.CorrectAnswers++;
      console.log("RIGHT", this.CorrectAnswers)
    } else {
      this.WrongAnswers++;
      console.log("WRONG", this.WrongAnswers)
    }


    var len = this.borderColorArray.length;
    var index = (Math.floor(Math.random() * len) + 1) - 1;

    this.MatchAns = document.getElementById(circleId).style.borderColor = this.borderColorArray[index];
    document.getElementById(fontId).style.color = this.fontColorArray[index];
    this.FontName = this.fontColorArray[index]

    this.InputForm.reset()
  }

  GameTryAgain() {
    this.messageService.clear('S')
    this.submitted = false;
    this.disabledBtns = false;
    this.EnableSubBtn = true;
    this.timeLeft = 25;
    this.CorrectAnswers = 0;
    this.WrongAnswers = 0;
  }


  ExitGame() {
    localStorage.removeItem('EnableGuard');
    this.router.navigate([''])
  }
}