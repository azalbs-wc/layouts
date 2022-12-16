import { Center } from './internals/center.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-center': Center;
  }
}
window.customElements.define('azl-center', Center);
