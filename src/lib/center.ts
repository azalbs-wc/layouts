import { LitElement, PropertyValueMap, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { queryAssignedElements } from 'lit/decorators/query-assigned-elements.js';

export class Center extends LitElement {
  @queryAssignedElements()
  public projectedElements!: Array<HTMLElement>;

  /**
   * @attr
   */
  @property({ type: Boolean, attribute: 'wrap' })
  wrap: boolean = true;

  override connectedCallback(): void {
    this.setRequiredStylesProperties();
    super.connectedCallback();
  }

  protected override update(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    this.setRequiredStylesProperties();
    super.update(changedProperties);
  }

  private setRequiredStylesProperties() {
    this.style.display = 'flex';
    this.style.flexDirection = 'row';
    this.style.flexWrap = this.wrap ? 'wrap' : 'no-wrap';
    this.style.justifyContent = 'center';
    this.style.alignItems = 'center';
  }

  override render() {
    return html` <slot></slot> `;
  }
}
