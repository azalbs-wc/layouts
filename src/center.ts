import { Center } from './internals/center';

declare global {
  interface HTMLElementTagNameMap {
    'azl-center': Center;
  }
}

if (
  window &&
  typeof window.customElements !== 'undefined' &&
  window.customElements !== null
) {
  window.customElements.define('azl-center', Center);
}
