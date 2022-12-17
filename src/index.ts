import { BoxLayout } from './lib/box.js';
import { Center } from './lib/center.js';
import { FlexBoxLayout } from './lib/flex.js';
import { HBoxLayout } from './lib/hbox.js';
import { VBoxLayout } from './lib/vbox.js';

declare global {
  interface HTMLElementTagNameMap {
    'azl-vbox': VBoxLayout;
  }
  interface HTMLElementTagNameMap {
    'azl-hbox': HBoxLayout;
  }
  interface HTMLElementTagNameMap {
    'azl-flex': FlexBoxLayout;
  }
  interface HTMLElementTagNameMap {
    'azl-center': Center;
  }
  interface HTMLElementTagNameMap {
    'azl-box': BoxLayout;
  }
}

export { BoxLayout, Center, FlexBoxLayout, HBoxLayout, VBoxLayout };
