import { HBoxLayout } from './internals/hbox.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-hbox': HBoxLayout;
  }
}

window.customElements.define('azl-hbox', HBoxLayout);
