import { html, LitElement, PropertyValueMap } from 'lit';
import { boxMixin } from '../mixins/box.js';
import { flexAlignment } from '../mixins/flex.js';

/* eslint class-methods-use-this: ["error", { "exceptMethods": ["exceptProperties", "render"] }] */
export class VBoxLayout extends boxMixin(flexAlignment(LitElement)) {
  //
  override connectedCallback(): void {
    this.setStyleProperties(VBoxLayout.elementProperties.keys());
    super.connectedCallback();
  }

  //
  protected override update(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    this.setStyleProperties(VBoxLayout.elementProperties.keys());
    super.update(changedProperties);
  }

  protected override setBoxProperties() {
    this.style.display = 'flex';
    this.style.flexDirection = 'column';
    this.style.justifyContent = this.justifyContent ?? undefined;
    this.style.justifyItems = this.justifyItems ?? undefined;
    this.style.justifySelf = this.justify ?? undefined;
    this.style.alignItems = this.alignItems ?? undefined;
    this.style.alignContent = this.alignContent ?? undefined;
    this.style.alignSelf = this.alignment ?? undefined;
  }

  protected exceptProperties(): string[] {
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
