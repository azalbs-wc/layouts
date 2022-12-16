import { HBoxLayout } from './internals/hbox.js';
import { registerElement } from './internals/helpers.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-hbox': HBoxLayout;
  }
}

registerElement('azl-hbox', HBoxLayout);
