import { Injectable } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';

@Injectable()
export class MetatagService {

  constructor(private router: Router, private meta: Meta) { }

/**
 *
 */
  getRouteData(): Observable<any> {
    return this.router.events
      .filter(event => event instanceof ActivationEnd && event.snapshot.firstChild === null)
      .map((event: ActivationEnd) => event.snapshot.data);
  }

  /**
   * Update metatags
   */
  updateMeta(metaTag: MetaDefinition): void {
    console.log('entro');
    this.meta.updateTag(metaTag);
  }

}
