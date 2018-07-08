import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/product/home/home.component';
import { CreateComponent } from './components/product/create/create.component';
import { UpdateComponent } from './components/product/update/update.component';
import { CcreateComponent } from './components/comment/ccreate/ccreate.component';
import { ChomeComponent } from './components/comment/chome/chome.component';
import { CupdateComponent } from './components/comment/cupdate/cupdate.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/create', component: CreateComponent },
  { path: 'product/update/:id', component: UpdateComponent },
  { path: 'comment/create', component: CcreateComponent },
  { path: 'comment/home', component: ChomeComponent },
  { path: 'comment/update/:id', component: CupdateComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    CcreateComponent,
    ChomeComponent,
    CupdateComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
