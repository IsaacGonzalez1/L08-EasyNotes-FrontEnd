import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.scss']
})
export class EditnoteComponent implements OnInit {
  noteForm!:FormGroup;
  notes: any;
  id:any;
  checkboxValue:any;


  constructor(
    private noteService: NoteService,
    private route: ActivatedRoute) { }

  ngOnInit(){

    const routeParams=this.route.snapshot.paramMap;
    this.id=Number(routeParams.get('noteID'));
    console.log(this.id);
    this.noteService.findNote(this.id).subscribe(
      (note)=>{
        this.notes=note
        this.noteForm=new FormGroup({
        title: new FormControl(this.notes.title),
        content: new FormControl(this.notes.content),
        is_shared: new FormControl(this.notes.is_shared),
        user_id: new FormControl(this.notes.user_id) ,
        })
      })
  }

  onSubmit(){
    this.noteService.updateNote(this.noteForm.value,this.id).subscribe(
      (note)=>{
        console.log("Note Updated Successfully!!");
      }
    )
    window.history.back();
  }

}
