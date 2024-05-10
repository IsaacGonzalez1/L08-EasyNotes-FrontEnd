import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CollectionService } from '../services/collection.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editcollection',
  templateUrl: './editcollection.component.html',
  styleUrls: ['./editcollection.component.scss']
})
export class EditcollectionComponent implements OnInit {
  collectionForm!:FormGroup;
  collections: any;
  id:any;


  constructor(
    private collectionService: CollectionService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(){
    
    const routeParams=this.route.snapshot.paramMap;
    this.id=Number(routeParams.get('collectionID'));
    
    this.collectionService.getCollection(this.id).subscribe(
      
      (collection)=>{
        this.collections=collection
        console.log(this.collections);
        this.collectionForm=new FormGroup({
        description: new FormControl(this.collections.description),
        id_user: new FormControl(this.collections.id_user)})
      })
     
  }

  onSubmit(){
    this.collectionService.updateCollection(this.collectionForm.value,this.id).subscribe(
      (collection)=>{
        console.log("Collection Updated Successfully!!");
      }
    )
    window.history.back();
  }


}
