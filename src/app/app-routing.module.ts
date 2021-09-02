import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TranslateComponent} from "./translate/aplication/translate.component";
import {RegisterComponent} from "./dictionaryAdmin/aplication/register/register.component";

const routes: Routes = [
  {path:"",component:TranslateComponent,pathMatch:"full"},
  {path:"register",component:RegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
