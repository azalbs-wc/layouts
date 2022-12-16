import { VBoxLayout } from './internals/vbox.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-vbox': VBoxLayout;
  }
}

window.customElements.define('azl-vbox', VBoxLayout);
