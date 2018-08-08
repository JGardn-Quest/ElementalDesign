import {Component, NgModule, OnInit} from '@angular/core';
import {ActivatedRoute, RouterModule, Router} from '@angular/router';
import {DesignLanguageItem, DesignLanguageItems} from '../../shared/design-language-items/design-language-items';
import {FooterModule} from '../../shared/footer/footer';
import {DocViewerModule} from '../../shared/doc-viewer/doc-viewer-module';
import {TableOfContentsModule} from '../../shared/table-of-contents/table-of-contents.module';
import {ComponentPageTitle} from '../page-title/page-title';

@Component({
  selector: 'design-language-viewer',
  templateUrl: './design-language-viewer.html',
  styleUrls: ['./design-language-viewer.scss'],
})
export class DesignLanguageViewer implements OnInit {
  designLanguage: DesignLanguageItem;

  constructor(_route: ActivatedRoute,
              private _componentPageTitle: ComponentPageTitle,
              private router: Router,
              public designLanguageItems: DesignLanguageItems) {
    _route.params.subscribe(p => {
      this.designLanguage = designLanguageItems.getItemById(p['id']);

      if (!this.designLanguage) {
        this.router.navigate(['/designlanguage']);
      }
    });
  }

  ngOnInit(): void {
    this._componentPageTitle.title = this.designLanguage.name;
  }
}

@NgModule({
  imports: [DocViewerModule, FooterModule, RouterModule, TableOfContentsModule],
  exports: [DesignLanguageViewer],
  declarations: [DesignLanguageViewer],
  providers: [DesignLanguageItems, ComponentPageTitle],
})
export class DesignLanguageViewerModule {}
