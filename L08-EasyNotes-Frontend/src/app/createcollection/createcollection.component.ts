import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormControlName, FormBuilder, Validators } from '@angular/forms';
import { NoteService } from '../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../services/collection.service';




@Component({
  selector: 'app-createcollection',
  templateUrl: './createcollection.component.html',
  styleUrls: ['./createcollection.component.scss']
})


export class CreatecollectionComponent {
  collection: any
  urlAnterior:any;
  userID: any;

  collectionForm: any;



  constructor(private collectionService:CollectionService, private fbuilder: FormBuilder,private activateRoute: ActivatedRoute) {

  }


  ngOnInit(): void {
    const rParams = this.activateRoute.snapshot.paramMap;
    this.userID = rParams.get('userID');
    this.collectionForm = this.fbuilder.group({
      description: ['', Validators.required],
      id_user: this.userID,
    });
  }

  getPreviousUrl(): string {
    const history = window.history;
    const previousUrl = history.length > 1 ? history.state.navigationUrl : '';
    console.log(previousUrl)
    return previousUrl;
  }

  onSubmit(){
    this.collectionService.createCollection(this.collectionForm.value).subscribe(
      collection =>{
        this.collection =collection
      }
    );

    console.log(this.collectionForm.value);
    window.history.back()
  }

}




