import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../user';
import { CollectionService } from '../services/collection.service';
@Component({
  selector: 'app-listcollection',
  templateUrl: './listcollection.component.html',
  styleUrls: ['./listcollection.component.scss']
})
export class ListcollectionComponent {
  userID: any;
  collections: any;
  user:any;
  userLogged:any;

  constructor(
    private collectionService: CollectionService,
    private authenticationService: AuthenticationService,
    private activateRoute: ActivatedRoute,
    private collection_noteService:CollectionService
  ) {}

  ngOnInit() {

    const rParams = this.activateRoute.snapshot.paramMap;
    this.userID = rParams.get('userID');
    this.user = this.authenticationService.getUserById(this.userID);
    this.user.subscribe((val: any) => this.CollectionsList(val));
  }

  CollectionDelete(id: any) {
    this.collectionService.deleteCollection(id).subscribe((collection) => {
      console.log('Collection has been deleted');
    });
    window.location.reload();
  }

  CollectionsList(val:any) {
    this.collections = this.collectionService.findCollectionByUser(val.id).subscribe((collection) => {
      this.collections = collection;
      console.log(this.collections);
    });
  }
}






