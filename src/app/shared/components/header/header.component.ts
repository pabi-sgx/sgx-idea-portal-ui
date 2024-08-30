import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private _commonService: CommonService) {

  }

  sidebar: any
  content: any
  toggleSidebar() {
    // this.sidebar = document.getElementById('sidebar');
    // this.content = document.querySelector('.content');
    console.log('jj');
    
    this._commonService.sidebarShow.next(true);
    // sidebar.classList.toggle('expanded');
    // content.classList.toggle('sidebar-expanded');
  }
}
