import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})

export class ResumeComponent {
siteUrl = "drive.google.com/file/d/1vQo4pVABbWBZtDkmrGpwQHl7mgVTz4yY/view?usp=sharing";
openNewTab() {
   window.open("//" + this.siteUrl, '_blank');
}

educationList: Education[]=[{
  year: '2014 - 2016',
  leveleducation: 'Senior High School',
  major: 'Art-Maths',
  province: 'Chumphon',
  university: 'Saard Phaderm Wittaya School',
  img: 'assets/image/saardlogov2.png'
},{
  year:'2017 - 2022',
  university:'Rangsit University',
  province:'Pathumthani',
  leveleducation:'Undergraduate',
  major:'Computer Science',
  img:'assets/image/logo.jpg'
}]
}
interface Education{
  year:string,
  university:string,
  province:string,
  leveleducation:string,
  major:string,
  img:string
}


