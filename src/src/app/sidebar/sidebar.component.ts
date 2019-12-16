import { Component, OnInit } from '@angular/core';

declare const $: any;

declare interface MenuItem {
    path: string;
    name: string;
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
      title: 'Lesson 1',
      icon:'',
      class: '',
      items: [
        { path: '/home', name: 'Three Themes', title: 'Three Themes / Franz Rosenzweig / Star of Redemption',  icon: 'pe-7s-check', class: '' },
        { path: '/ruth', name: 'Ruth', title: 'Ruth - The First Recorded Convert',  icon: 'pe-7s-close-circle', class: '' },
        { path: '/genesis_1-2', name: 'Genesis 1 and 2', title: 'Genesis 1 and 2 - The Creation of People',  icon:'pe-7s-check', class: '' },
        { path: '/leviticus_23', name: 'Leviticus 23', title: 'Leviticus 23 - Hebrew Feasts / Modern Holidays',  icon:'pe-7s-close-circle', class: '' },
      ]
    },
    { 
      path: '',
      marker: '\u05D1',
      title: 'Lesson 2',
      icon:'',
      class: '',
      items: [
        { path: '/ten-commandments', name: '10 Commandments', title: 'Differences Between 10 Commandments in Exodus and Deuteronomy',  icon: 'pe-7s-check', class: '' },
        { path: '/the-tribe', name: 'The Tribe', title: 'Takeaways from The Tribe',  icon: 'pe-7s-check', class: '' },
        { path: '/acts', name: '(Un)Godly Acts', title: 'Godly and UnGodly Actions',  icon:'pe-7s-close-circle', class: '' }
      ]
    },
    { 
      path: '',
      marker: '\u05D2',
      title: 'Lesson 3',
      icon:'',
      class: '',
      items: [
        { path: '/shabbat', name: 'Shabbat Ceremony', title: 'Shabbat Blessings and Rituals',  icon: 'pe-7s-check', class: '' },
        { path: '/havdalah', name: 'Havdalah Ceremony', title: 'Havdalah Blessings and Rituals',  icon: 'pe-7s-check', class: '' }
      ]
    },
    { 
      path: '',
      marker: '',
      title: 'Hebrew (extra)',
      icon:'pe-7s-notebook',
      class: '',
      items: [
        { path: '/alephbet', name: 'AlephBet', title: 'The Hebrew Alphabet',  icon: 'pe-7s-pen', class: '' },
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
