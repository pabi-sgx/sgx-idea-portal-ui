import { Component, OnInit } from '@angular/core';

export interface Idea {
  id: number;
  fullName: string;
  empId: string;
  title: string;
  status: string;
  submitteddate: Date;
  description: string;
  editing: boolean;
}

@Component({
  selector: 'app-ideas-list',
  templateUrl: './ideas-list.component.html',
  styleUrls: ['./ideas-list.component.scss']
})
export class IdeasListComponent implements OnInit {
  isDetailVisible: any;
  isDoubleClicked = false;
  ideas: Idea[] = [
    { id: 1, fullName: 'Arjun Verma', empId: 'E123', title: 'Improve customer service', status: 'submitted', submitteddate: new Date('2024-09-09'), description: 'Something about innovation', editing: false },
    { id: 2, fullName: 'Priya Nair', empId: 'E456', title: 'Eco-friendly packaging', status: 'pending', submitteddate: new Date('2024-09-09'), description: 'Something about innovation', editing: false },
    { id: 3, fullName: 'Vikram Mehta', empId: 'E124', title: 'Employee wellness program', status: 'approved', submitteddate: new Date('2024-09-09'), description: 'Something about innovation', editing: false },
    { id: 4, fullName: 'Suresh Patil', empId: 'E113', title: 'Improve customer service', status: 'in-progress', submitteddate: new Date('2024-09-09'), description: 'Something about innovation', editing: false },
    { id: 5, fullName: 'Deepa Desai', empId: 'E111', title: 'Eco-friendly packaging', status: 'not-approved', submitteddate: new Date('2024-09-09'), description: 'Something about innovation', editing: false },
    { id: 6, fullName: 'Ramya Patil', empId: 'E114', title: 'Improve customer service', status: 'duplicate', submitteddate: new Date('2024-09-09'), description: 'Something about innovation', editing: false }
  ];

  filterString: string = '';
  filteredIdeas: Idea[] = [];
  selectedIdea: any;
  ideaDetail: any;
  editingIdea: any;

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

  showDetails(idea: Idea) {
    setTimeout(() => {
      this.ideaDetail = { ...idea };
      this.editingIdea = idea;
      this.isDetailVisible = this.isDoubleClicked ? false : true;
    }, 50);
    this.isDoubleClicked = false;
  }

  selectIdea(idea: any) {
    this.isDoubleClicked = true;
    this.ideas.forEach(item => {
      item.editing = item.id === idea.id ? true : false;
    });
    this.ideaDetail = { ...idea };
    this.isDetailVisible = false;
    console.log(this.ideaDetail);
  }

  saveEdit(idea: Idea) {
    this.editingIdea = null;
  }

}
