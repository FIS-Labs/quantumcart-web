import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Lang, TranslationKey } from '../../models/translation/translation.types';
import { translations } from '../../models/translation/translation';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  public lang$ = new BehaviorSubject<Lang>('en');

  get currentLang() {
    return this.lang$.value;
  }

  switchLang(lang: Lang) {
    this.lang$.next(lang);
  }

  t(key: TranslationKey) {
    return translations[this.lang$.value][key];
  }
}
