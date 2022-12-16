import { html, LitElement, PropertyValueMap } from 'lit';
import { boxMixin } from '../mixins/box.js';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["exceptProperties", "render"] }] */
export class BoxLayout extends boxMixin(LitElement) {
  override connectedCallback(): void {
    this.setStyleProperties(BoxLayout.elementProperties.keys());
    super.connectedCallback();
  }

  //
  protected override update(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    this.setStyleProperties(BoxLayout.elementProperties.keys());
    super.update(changedProperties);
  }

  protected setBoxProperties() {
    this.style.setProperty('display', 'block');
    this.style.setProperty('position', 'inherit');
  }

  protected exceptProperties(): string[] {
    return [];
  }

  override render() {
    return html`<slot></slot>`;
  }
}
