import { FlexBoxLayout } from './internals/flex.js';
import { registerElement } from './internals/helpers.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-flex': FlexBoxLayout;
  }
}

registerElement('azl-flex', FlexBoxLayout);
