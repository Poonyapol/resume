import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  manus = [{
    name: 'Home',
    path: 'home'
  },{
    name: 'Resume',
    path: 'resume'
  },{
    name:'Skill',
    path: 'skill'
  }]

  path = ''
constructor(private router: Router) {}


  goToNabigatePath(path: string): void {
    this.path = path
    this.router.navigate([path])
  }
}
