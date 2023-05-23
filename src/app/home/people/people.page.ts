import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/core/interfaces/person';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

  public people: Person[] =[
    {
      profile: "https://picsum.photos/40",
      name: "Ernesto Perez",
      description: "Frailejon - protector del paramo"
    },
    {
      profile: "https://picsum.photos/40",
      name: "Lola",
      description: "Desarrolladora Frontend"
    },
    {
      profile: "https://picsum.photos/40",
      name: "Oliver",
      description: "Desarrollador Backend"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}