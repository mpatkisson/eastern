import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface MenuItem {
    path: string;
    title: string;
    icon: string;
    class: string;
}

declare interface MenuHeader {
    path: string;
    marker: string;
    title: string;
    icon: string;
    class: string;
    items: MenuItem[];
}

export const MENU_HEADERS: MenuHeader[] = [
    { 
      path: '',
      marker: '\u05D0',
      title: 'Echad',
      icon:'',
      class: '',
      items: [
        { path: '/home', title: 'Home',  icon: 'pe-7s-graph', class: '' },
        { path: '/user', title: 'User Profile',  icon:'pe-7s-user', class: '' },
        { path: '/table', title: 'Table List',  icon:'pe-7s-note2', class: '' },
        { path: '/typography', title: 'Typography',  icon:'pe-7s-news-paper', class: '' },
        { path: '/icons', title: 'Icons',  icon:'pe-7s-science', class: '' },
        { path: '/notifications', title: 'Notifications',  icon:'pe-7s-bell', class: '' },
      ]
    }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];
  menuHeaders: any[];

  constructor() { }

  ngOnInit() {
    this.menuHeaders = MENU_HEADERS.filter(menuHeader => menuHeader);

    // These three are need to make submenus work.
    $(document).on('hide.bs.dropdown', '.keepopen', function () {
      return false;
    });

    $('body').on("click", "li.active", function () {
      if ($(this).hasClass('keepopen')) {
        $(this).removeClass('keepopen');
      } else {
        $(this).addClass('keepopen');
      }
    });

    $('body').on("click", "li.active.open ul.dropdown-menu", function (e) {
      $(this).parent().is(".open") && e.stopPropagation();
    });
    // These three are need to make submenus work.

  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
