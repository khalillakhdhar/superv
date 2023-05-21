import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: AuthComponent,

children: [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
]
},
// redirect to home if empty path


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
