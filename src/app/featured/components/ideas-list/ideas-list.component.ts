import { Component, OnInit } from '@angular/core';

export interface Idea {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  empId: string;
  title: string;
}

@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss']
})
export class IdeasListComponent implements OnInit {
  ideas: Idea[] = [
    { id: 1, firstName: 'Arjun', lastName: 'Verma', email: 'arjun.verma@example.com', empId: 'E123', title: 'Improve customer service' },
    { id: 2, firstName: 'Priya', lastName: 'Nair', email: 'priya.nair@example.com', empId: 'E456', title: 'Eco-friendly packaging' },
    { id: 3, firstName: 'Vikram', lastName: 'Mehta', email: 'vikram.mehta@example.com', empId: 'E124', title: 'Employee wellness program' },
    { id: 4, firstName: 'Suresh', lastName: 'Patil', email: 'suresh.patil@example.com', empId: 'E113', title: 'Improve customer service' },
    { id: 5, firstName: 'Deepa', lastName: 'Desai', email: 'deepa.desai@example.com', empId: 'E111', title: 'Eco-friendly packaging' }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
