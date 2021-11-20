import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MessageService]
})
export class HomeComponent implements OnInit {

  playerForm: FormGroup;
  submitted = false;
  PlayerName: any;
  PlayerNameArray : any = [];
  GuardActive : boolean
  // @Output() event = new EventEmitter<string>();

  constructor(private formBuild: FormBuilder, private router: Router, private messageService: MessageService) { }

  ngOnInit() {
    this.GuardActive = false
    if (localStorage.getItem('All_Players')) {
      this.PlayerNameArray = JSON.parse(localStorage.getItem('All_Players'))
    }
    this.playerForm = this.formBuild.group({
      fullName: ['', Validators.required]
    })
  }

  get f() {
    return this.playerForm.controls;
  }

  onReject(){
    localStorage.removeItem('EnableGuard')
    this.messageService.clear('S')
  }

  SubmitPlayer() {
    this.submitted = true;
    if (this.playerForm.invalid) {
      return
    }
    this.GuardActive = true
    localStorage.setItem("PlayerName", this.PlayerName)
    localStorage.setItem('EnableGuard', JSON.stringify(this.GuardActive))

    if(localStorage.getItem('All_Players')){
      var existingPlayers = this.PlayerNameArray.some(res => {
        return res.playerName.toLowerCase() == this.PlayerName.toLowerCase()
     })
 
     if(existingPlayers === true){
         this.messageService.add({key: 'S', sticky: true, severity:'warn', detail:'Confirm to proceed with this player?'});
         return 
     }
    }
    this.PlayerNameArray.push({
      playerName: this.PlayerName,
      correctAnswers: 0,
      wrongAnswers: 0
    })
    console.log(this.PlayerNameArray)
    localStorage.setItem('All_Players', JSON.stringify(this.PlayerNameArray))
    // this.event.emit(this.PlayerName)
    this.router.navigate(['/playgame'])
  }

  TryWithExisting(){
    this.router.navigate(['/playgame'])
  }

}
