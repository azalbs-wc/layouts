import { BoxLayout } from './internals/box.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-box': BoxLayout;
  }
}

window.customElements.define('azl-box', BoxLayout);
