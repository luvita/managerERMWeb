import { Injectable } from '@angular/core';

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
  subchildren? : SuperChildrenItems[];
}

export interface SuperChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
  children?: ChildrenItems[];
}

const HORIZONTALMENUITEMS = [
  {
    state: 'home',
    name: 'HOME',
    type: 'link',
    icon: 'home'
  },
  {
    state: 'apps',
    name: 'APPS',
    type: 'sub',
    icon: 'apps',
    children: [
      {state: 'apps/calendar', name: 'CALENDAR'},
      {state: 'apps/messages', name: 'MESSAGES'},
      {state: 'apps/social', name: 'SOCIAL'},
      {state: 'apps/chat', name: 'CHAT'}
    ]
  },
  {
    state: 'features',
    name: 'FEATURES',
    type: 'sub',
    icon: 'library_books',
    children: [
      {state: 'features/colorpicker', name: 'COLOR PICKER'},
      {state: 'features/cropper', name: 'CROPPER'},
      {state: 'features/dragula', name: 'DRAGULA'},
      {state: 'features/sortable', name: 'SORTABLE'},
      {
        state: 'charts',
        name: 'CHARTS',
        type: 'super-sub',
        icon: 'show_chart',
        subchildren: [
          {state: 'charts/bar-charts', name: 'BAR'},
          {state: 'charts/pie-charts', name: 'PIE'},
          {state: 'charts/line-charts', name: 'LINE'},
          {state: 'charts/mixed-charts', name: 'MIXED'},
          {state: 'charts/ng2-charts', name: 'NG2 CHARTS'},
        ]
      },
      {
        state: 'maps',
        name: 'MAPS',
        type: 'super-sub',
        icon: 'navigation',
        subchildren: [
          {state: 'maps/google', name: 'GOOGLE'},
          {state: 'maps/leaflet', name: 'LEAFLET'}
        ]
      }
    ]
  },
  {
    state: 'material',
    name: 'MATERIAL',
    type: 'sub',
    icon: 'equalizer',
    children: [
      {state: 'material/button', name: 'BUTTON'},
      {state: 'material/cards', name: 'CARDS'},
      {state: 'material/select', name: 'SELECT'},
      {state: 'material/chips', name: 'CHIPS'},
      {state: 'material/input', name: 'INPUT'},
      {state: 'material/checkbox', name: 'CHECKBOX'},
      {state: 'material/radio', name: 'RADIO'},
      {state: 'material/toolbar', name: 'TOOLBAR'},
      {state: 'material/lists', name: 'LISTS'},
      {state: 'material/grid', name: 'GRID'},
      {state: 'material/progress', name: 'PROGRESS'},
      {state: 'material/tabs', name: 'TABS'},
      {state: 'material/switch', name: 'SWITCH'},
      {state: 'material/tooltip', name: 'TOOLTIP'},
      {state: 'material/menu', name: 'MENU'},
      {state: 'material/slider', name: 'SLIDER'},
      {state: 'material/snackbar', name: 'SNACKBAR'},
      {state: 'material/dialog', name: 'DIALOG'}
    ]
  },
  {
    state: 'forms',
    name: 'FORMS',
    type: 'sub',
    icon: 'looks_3',
    children: [
      {state: 'forms/editor', name: 'EDITOR'},
      {state: 'forms/validation', name: 'VALIDATION'},
      {state: 'forms/upload', name: 'UPLOAD'},
      {state: 'forms/tree', name: 'TREE'},
    ]
  },
  {
    state: 'tables',
    name: 'TABLES',
    type: 'sub',
    icon: 'format_line_spacing',
    children: [
      {state: 'tables/fullscreen', name: 'FULLSCREEN'},
      {state: 'tables/editing', name: 'EDITING'},
      {state: 'tables/filter', name: 'FILTER'},
      {state: 'tables/tables/paging', name: 'PAGING'},
      {state: 'tables/sorting', name: 'SORTING'},
      {state: 'tables/pinning', name: 'PINNING'},
      {state: 'tables/selection', name: 'SELECTION'},
    ]
  },
  {
    state: 'pages',
    name: 'PAGES',
    type: 'sub',
    icon: 'web',
    children: [
      {state: 'pages/about', name: 'ABOUT'},
      {state: 'pages/contact', name: 'CONTACT'},
      {state: 'pages/pricing', name: 'PRICING'},
      {state: 'pages/blank', name: 'BLANK'},
      {
        state: 'user-pages',
        name: 'USERS',
        type: 'super-sub',
        icon: 'person',
        subchildren: [
          {state: 'user-pages/userlist', name: 'USER LIST'},
          {state: 'user-pages/userprofile', name: 'USER PROFILE'},
        ]
      },
      {
        state: 'gallery',
        name: 'GALLERY',
        type: 'super-sub',
        icon: 'person',
        subchildren: [
          {state: 'gallery/gallery-v1', name: 'GALLERY SIMPLE'},
          {state: 'gallery/gallerygallery-v2', name: 'GALLERY ADVANCED'},
          {state: 'gallery/gallery-v3', name: 'GALLERY 3RD PARTY'}
        ]
      },
      {
        state: 'ecommerce',
        name: 'ECOMMERCE',
        type: 'super-sub',
        icon: 'person',
        subchildren: [
          {state: 'ecommerce/ecommerce-product', name: 'PRODUCT LISTING'},
          {state: 'ecommerce/ecommerce-product-detail', name: 'PRODUCT DETAIL'},
          {state: 'ecommerce/ecommerce-cart', name: 'CART'},
          {state: 'ecommerce/ecommerce-checkout', name: 'CHECKOUT'}
        ]
      }
    ]
  },
  {
    state: 'authentication',
    name: 'AUTHENTICATION',
    type: 'sub',
    icon: 'security',
    children: [
      {state: 'authentication/login', name: 'LOGIN'},
      {state: 'authentication/register', name: 'REGISTER'},
      {state: 'authentication/forgot-password', name: 'FORGOT'},
      {state: 'authentication/lockscreen', name: 'LOCKSCREEN'},
      {
        state: 'error',
        name: 'ERROR',
        type: 'super-sub',
        icon: 'error_outline',
        subchildren: [
          {state: 'error/404', name: '404'},
          {state: 'error/503', name: '503'}
        ]
      }
    ]
  }

];

@Injectable()
export class HorizontalMenuItems {
  getAll(): Menu[] {
    return HORIZONTALMENUITEMS;
  }
  add(menu: Menu) {
    // HORIZONTALMENUITEMS.push(Menu);
  }
}
