import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { MainComponent } from './main/main.component';
import { CreatePetComponent } from './pet/create-pet/create-pet.component';

const routes: Routes = [{path: '', component: MainComponent},
                        {path: 'login', component: LoginComponent},
                        
                        {path: 'createpet', component: CreatePetComponent}

                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
