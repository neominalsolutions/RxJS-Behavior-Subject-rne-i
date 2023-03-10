import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsSubjectsComponent } from './rxjs-subjects/rxjs-subjects.component';
import { ReactiveProgramlamaComponent } from './rxjs/reactive-programlama/reactive-programlama.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: ReactiveProgramlamaComponent,
  },
  {
    path: 'rxjs-subjects',
    component: RxjsSubjectsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
