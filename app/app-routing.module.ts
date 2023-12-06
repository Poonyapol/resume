import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes=[
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'resume', loadChildren: () => import('./resume/resume.module').then(m => m.ResumeModule) },
  { path: 'skill', loadChildren: () => import('./skill/skill.module').then(m => m.SkillModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule{}
