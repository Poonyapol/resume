import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  skillsList: Skills[] =[{
    skill_name: 'HTML',
    icon: 'assets/icon/html-5.png',
  },{
    skill_name:'CSS',
    icon:'assets/icon/cascading-style-sheets.png'
  },{
    skill_name:'JavaScript/TypeScript',
    icon:'assets/icon/java-script.png'
  },{
    skill_name:'Node.js',
    icon:'assets/icon/nodejs.png'
  },{
    skill_name:'Angular',
    icon:'favicon.ico'
  },{
    skill_name:'PHP',
    icon:'assets/icon/php.png'
  },{
    skill_name:'React',
    icon:'assets/icon/react.png'
  },{
    skill_name:'Python',
    icon:'assets/icon/python.png'
  }]
}

interface Skills {
  skill_name: string;
  icon: string;
}
