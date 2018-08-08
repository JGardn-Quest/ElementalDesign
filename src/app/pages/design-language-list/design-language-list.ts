import {Component, NgModule, OnInit} from '@angular/core';
import {DesignLanguageItems} from '../../shared/design-language-items/design-language-items';
import {MatListModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {FooterModule} from '../../shared/footer/footer';
import {CommonModule} from '@angular/common';
import {ComponentPageTitle} from '../page-title/page-title';

@Component({
  selector: 'app-design-language',
  templateUrl: './design-language-list.html',
  styleUrls: ['./design-language-list.scss']
})
export class DesignLanguageList implements OnInit {
  constructor(public designLanguageItems: DesignLanguageItems, public _componentPageTitle: ComponentPageTitle) {}

  ngOnInit(): void {
    this._componentPageTitle.title = 'Design Language';
  }
}


@NgModule({
  imports: [MatListModule, RouterModule, FooterModule, CommonModule],
  exports: [DesignLanguageList],
  declarations: [DesignLanguageList],
  providers: [DesignLanguageItems, ComponentPageTitle],
})
export class DesignLanguageListModule { }
