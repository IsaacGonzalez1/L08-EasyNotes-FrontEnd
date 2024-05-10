import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListnotesComponent } from './listnotes/listnotes.component';
import { CreatenoteComponent } from './createnote/createnote.component';
import { EditnoteComponent } from './editnote/editnote.component';


import { HttpClientModule } from '@angular/common/http';
import { DeletenoteComponent } from './deletenote/deletenote.component'
import { ReactiveFormsModule } from '@angular/forms';
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


@NgModule({
  declarations: [
    AppComponent,
    ListnotesComponent,
    CreatenoteComponent,
    EditnoteComponent,
    DeletenoteComponent,
    LoginComponent,
    RegisterComponent,
    AdminUIComponent,
    EdituserComponent,
    ListcollectionComponent,
    CreatecollectionComponent,
    EditcollectionComponent,
    FriendshipsComponent,
    CreateFriendshipComponent,
    ViewcollectionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
