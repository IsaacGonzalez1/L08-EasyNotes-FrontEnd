import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListnotesComponent } from './listnotes/listnotes.component';

import { CreatenoteComponent } from './createnote/createnote.component';
import { EditnoteComponent } from './editnote/editnote.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminUIComponent } from './admin-ui/admin-ui.component';
import { EdituserComponent } from './edituser/edituser.component';
import { ListcollectionComponent } from './listcollection/listcollection.component';
import { CreatecollectionComponent } from './createcollection/createcollection.component';
import { EditcollectionComponent } from './editcollection/editcollection.component';
import { FriendshipsComponent } from './friendships/friendships.component';
import { CreateFriendshipComponent } from './create-friendship/create-friendship.component';
import { ViewcollectionComponent } from './viewcollection/viewcollection.component';
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'list-notes', component: ListnotesComponent },
  { path: 'view-collection/:collectionID', component: ViewcollectionComponent },
  { path: 'list-collections/:userID', component: ListcollectionComponent },
  { path: 'create-collection/:userID', component: CreatecollectionComponent },
  { path: 'create-note/:userID', component: CreatenoteComponent },
  { path: 'list-user', component: AdminUIComponent },
  { path: 'edit-user/:userID', component: EdituserComponent },
  { path: 'edit-note/:noteID', component: EditnoteComponent },
  { path: 'edit-collection/:collectionID', component: EditcollectionComponent },
  { path: 'login', component: LoginComponent },
  { path: 'list-notes/:userID', component: ListnotesComponent },
  { path: 'users/signup', component: RegisterComponent },
  { path: 'list-friendships/:userID', component: FriendshipsComponent },
  { path: 'create-friendships/:userID', component: CreateFriendshipComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
