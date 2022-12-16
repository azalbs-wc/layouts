import { html, LitElement } from 'lit';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';
import '../azl-flex.js';

export class Center extends LitElement {
  @queryAssignedElements()
  public projectedElements!: Array<HTMLElement>;

  override render() {
    return html`
      <azl-flex justify-content="center" align-items="center">
        <slot></slot>
      </azl-flex>
    `;
  }
}
