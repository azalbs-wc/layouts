import { html, LitElement } from 'lit';
import './flex';

export class Center extends LitElement {
  static override get styles() {
    return [];
  }

  constructor() {
    super();
  }

  override render() {
    return html`
      <azl-flex justify="center" alignment="center">
        <slot></slot>
      </azl-flex>
    `;
  }
}
