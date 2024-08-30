import { Component } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  public sidebarShow: boolean = false;

  constructor(private _commonService: CommonService) {
    _commonService.sidebarShow.subscribe(res => {
      this.sidebarShow = res;
    })
  }

  toggleSidebar() {
    this._commonService.sidebarShow.next(false);
  }
}
