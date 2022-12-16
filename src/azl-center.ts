import { Center } from './internals/center.js';
import { registerElement } from './internals/helpers.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-center': Center;
  }
}
registerElement('azl-center', Center);
