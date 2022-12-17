import { LitElement, PropertyValueMap, html } from 'lit';
import { boxMixin } from './mixins/box.js';
import { flexAlignment } from './mixins/flex.js';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["exceptProperties", "render"] }] */
export class HBoxLayout extends boxMixin(flexAlignment(LitElement)) {
  //
  override connectedCallback(): void {
    this.setStyleProperties(HBoxLayout.elementProperties.keys());
    super.connectedCallback();
  }

  //
  protected override update(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    this.setStyleProperties(HBoxLayout.elementProperties.keys());
    super.update(changedProperties);
  }

  protected override setBoxProperties() {
    this.style.display = 'flex';
    this.style.flexDirection = 'row';
    this.style.justifyContent = this.justifyContent ?? undefined;
    this.style.justifyItems = this.justifyItems ?? undefined;
    this.style.justifySelf = this.justify ?? undefined;
    this.style.alignItems = this.alignItems ?? undefined;
    this.style.alignContent = this.alignContent ?? undefined;
    this.style.alignSelf = this.alignment ?? undefined;
  }

  protected override exceptProperties(): string[] {
    return [
      'justify',
      'justifyContent',
      'justifyItems',
      'alignment',
      'itemsAlignment',
      'contentAlignment',
    ];
  }

  override render() {
    return html`<slot></slot>`;
  }
}
