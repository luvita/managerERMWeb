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

const MENUITEMS : Menu[] = [
  {
    state: 'home',
    name: 'Dashboard',
    type: 'link',
    icon: 'explore'
  },
  {
    state: 'system',
    name: 'system',
    type: 'sub',
    icon: 'apps',
    badge: [
      {type: 'red', value: '5'}
    ],
    children: [
      {state: 'space', name: 'Space'},
    ]
  },
  {
    state: 'user-pages',
    name: 'USERS',
    type: 'sub',
    icon: 'person',
    children: [
      {state: 'userlist', name: 'USER LIST'},
      {state: 'userprofile', name: 'USER PROFILE'},
    ]
  },
  {
    state: 'console',
    name: 'Console',
    type: 'sub',
    icon: 'looks_3',
    children: [
      {state: 'gen-key', name: 'generate key'},
    ]
  },
  {
    state: 'space',
    name: 'Space',
    type: 'sub',
    icon: 'show_chart',
    badge: [
      {type: 'blue-grey', value: '4'
      }
    ],
    children: [
      {state: 'space', name: 'Space'},
    ]
  },
  {
    state: 'cards',
    name: 'CARDS',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'basic', name: 'BASIC'},
     
    ]
  },
    {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'about', name: 'ABOUT'},
      {state: 'contact', name: 'CONTACT'},
      {state: 'pricing', name: 'PRICING'},
      {state: 'blank', name: 'BLANK'},
    ]
  },
  {
    state: 'ecommerce',
    name: 'ECOMMERCE',
    type: 'sub',
    icon: 'person',
    children: [
      {state: 'ecommerce-product', name: 'PRODUCT LISTING'},
      {state: 'ecommerce-product-detail', name: 'PRODUCT DETAIL'},
      {state: 'ecommerce-cart', name: 'CART'},
      {state: 'ecommerce-checkout', name: 'CHECKOUT'}
    ]
  },
  {
    state: 'authentication',
    name: 'AUTHENTICATION',
    type: 'sub',
    icon: 'security',
    children: [
      {state: 'login', name: 'LOGIN'},
      {state: 'register', name: 'REGISTER'},
      {state: 'forgot-password', name: 'FORGOT'},
      {state: 'lockscreen', name: 'LOCKSCREEN'}
    ]
  },
  {
    state: 'support',
    name: 'Help + Support',
    type: 'sub',
    icon: 'format_line_spacing',
    badge: [
      {type: 'blue-grey', value: '8'
      }
    ],
    children: [
      {state: 'fullscreen', name: 'FULLSCREEN'}
    ]
  },
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  // add(menu: Menu) {
  //   MENUITEMS.push(menu);
  // }
}
