import { BoxLayout } from './internals/box.js';
import { registerElement } from './internals/helpers.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-box': BoxLayout;
  }
}

registerElement('azl-box', BoxLayout);
