import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    state: 'dashboard',
    name: 'HOME',
    type: 'link',
    icon: 'explore'
  },{
    state: 'dashboard',
    name: 'LIST',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'list-resource', name: 'ALLLIST',type: 'link'},
      {state: 'list-film', name: 'FILMLIST',type: 'link'},
      {state: 'list-book', name: 'BOOKLIST',type: 'link'},
      {state: 'list-magazine', name: 'MAGAZINELIST',type: 'link'}
    ]
  },{
    state: 'dashboard',
    name: 'USER',
    type: 'sub',
    icon: 'face',
    children: [
      {state: 'list-user', name: 'USERLIST',type: 'link'}
    ]
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu) {
    MENUITEMS.push(menu);
  }
}
