import { registerElement } from './internals/helpers.js';
import { VBoxLayout } from './internals/vbox.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-vbox': VBoxLayout;
  }
}

registerElement('azl-vbox', VBoxLayout);
