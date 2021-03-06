import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetalhesComponent } from './components/tutorial-detalhes/tutorial-detalhes.component';


const routes: Routes = [
  { path: '', redirectTo: 'tutorials', pathMatch: 'full' },
  { path: 'tutorials', component: AddTutorialComponent },
  { path: 'tutorials/:id', component: TutorialDetalhesComponent },
  { path: 'add', component: AddTutorialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
