import {Injectable} from '@angular/core';
import {Component} from '@angular/core';

export interface DesignLanguageItem {
  id: string;
  name: string;
  document: string;
}

const DESIGNLANGUAGE = [
  {
    id: 'design-principles',
    name: 'Design Principles',
    document: '/assets/documents/design-languages/material-design-language-principles.html'
  },
  {
    id: 'design-voice',
    name: 'Design Voice',
    document: '/assets/documents/design-languages/material-design-language-voice.html'
  },
  {
    id: 'typography',
    name: 'Typography',
    document: '/assets/documents/design-languages/material-design-language-typography.html'
  },
  {
    id: 'colors',
    name: 'Colors',
    document: '/assets/documents/design-languages/material-design-language-colors.html'
  },
  {
    id: 'iconography',
    name: 'Iconography',
    document: '/assets/documents/design-languages/material-design-language-iconography.html'
  },
];

@Injectable()
export class DesignLanguageItems {

  getAllItems(): DesignLanguageItem[] {
    return DESIGNLANGUAGE;
  }

  getItemById(id: string): DesignLanguageItem {
    return DESIGNLANGUAGE.find(i => i.id === id);
  }
}
