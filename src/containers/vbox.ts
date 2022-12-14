import { html, LitElement, PropertyValueMap } from 'lit';
import { boxMixin } from '../mixins/box.js';
import { flexAlignment } from '../mixins/flex.js';

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
    this.style.justifyContent = this.justify ?? undefined;
    this.style.alignItems = this.alignment ?? undefined;
    this.style.alignContent = this.contentAlignment ?? undefined;
  }

  protected override exceptProperties(): string[] {
    return ['justify', 'alignment', 'contentAlignment'];
  }

  override render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'azl-vbox': VBoxLayout;
  }
}
