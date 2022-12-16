import { FlexBoxLayout } from './internals/flex.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-flex': FlexBoxLayout;
  }
}

window.customElements.define('azl-flex', FlexBoxLayout);
