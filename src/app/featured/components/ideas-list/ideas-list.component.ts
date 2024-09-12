import { Component, OnInit } from '@angular/core';

export interface Idea {
  id: number;
  fullName: string;
  empId: string;
  title: string;
  status: string;
  submitteddate: Date;
}

@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss']
})
export class IdeasListComponent implements OnInit {
  ideas: Idea[] = [
    { id: 1, fullName: 'Arjun Verma', empId: 'E123', title: 'Improve customer service', status: 'Submitted', submitteddate: new Date('2024-09-09') },
    { id: 2, fullName: 'Priya Nair', empId: 'E456', title: 'Eco-friendly packaging', status: 'Pending', submitteddate: new Date('2024-09-09') },
    { id: 3, fullName: 'Vikram Mehta', empId: 'E124', title: 'Employee wellness program', status: 'Approved', submitteddate: new Date('2024-09-09') },
    { id: 4, fullName: 'Suresh Patil', empId: 'E113', title: 'Improve customer service', status: 'In Progress', submitteddate: new Date('2024-09-09') },
    { id: 5, fullName: 'Deepa Desai', empId: 'E111', title: 'Eco-friendly packaging', status: 'Not Approved', submitteddate: new Date('2024-09-09') },
    { id: 6, fullName: 'Ramya Patil', empId: 'E114', title: 'Improve customer service', status: 'Duplicate', submitteddate: new Date('2024-09-09') }
  ];

  filterString: string = '';
  filteredIdeas: Idea[] = [];

  constructor() { }

  ngOnInit(): void {
    this.filteredIdeas = this.ideas; 
  }

  applyFilter(): void {
    const filter = this.filterString.toLowerCase();
    this.filteredIdeas = this.ideas.filter(idea =>
      idea.fullName.toLowerCase().includes(filter) ||
      idea.empId.toLowerCase().includes(filter) ||
      idea.title.toLowerCase().includes(filter) ||
      idea.status.toLowerCase().includes(filter)
    );
  }
}
