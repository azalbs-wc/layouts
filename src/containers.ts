import { BoxLayout } from './internals/box';
import { FlexBox } from './internals/flex';
import { HBoxLayout } from './internals/hbox';
import { VBoxLayout } from './internals/vbox';

declare global {
  interface HTMLElementTagNameMap {
    'azl-flex': FlexBox;
  }
  interface HTMLElementTagNameMap {
    'azl-box': BoxLayout;
  }
  interface HTMLElementTagNameMap {
    'azl-hbox': HBoxLayout;
  }
  interface HTMLElementTagNameMap {
    'azl-vbox': VBoxLayout;
  }
}

if (
  window &&
  typeof window.customElements !== 'undefined' &&
  window.customElements !== null
) {
  window.customElements.define('azl-box', BoxLayout);
  window.customElements.define('azl-hbox', HBoxLayout);
  window.customElements.define('azl-vbox', VBoxLayout);
  window.customElements.define('azl-flex', VBoxLayout);
}
