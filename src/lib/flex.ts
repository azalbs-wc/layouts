import { LitElement, PropertyValueMap, html } from 'lit';
import { property } from 'lit/decorators/property.js';
import { flexAlignment } from './mixins/flex.js';
import { measurementUnit } from './mixins/helpers.js';

export class FlexBoxLayout extends flexAlignment(LitElement) {
  /**
   * @attr
   */
  @property({ type: String, attribute: 'direction' })
  direction: 'row' | 'column' | 'column-reverse' | 'row-reverse' = 'row';

  /**
   * @attr
   */
  @property({ type: String, attribute: 'grow' })
  grow!: number;

  /**
   * @attr
   */
  @property({ type: String, attribute: 'shrink' })
  shrink!: number;

  /**
   * @attr
   */
  @property({ type: Boolean, attribute: 'wrap' })
  wrap: boolean = true;

  /**
   * @attr
   */
  @property({ type: String })
  width!: number | string;

  /**
   * @attr
   */
  @property({ type: String })
  height!: number | string;

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
    this.style.flexGrow = this.grow ? String(this.grow) : '';
    this.style.flexDirection = this.direction;
    this.style.flexWrap = Boolean(this.wrap) !== false ? 'wrap' : 'no-wrap';
    this.style.flexShrink = this.shrink ? `${this.shrink}` : '';
    this.style.justifyContent = this.justifyContent ?? undefined;
    this.style.justifyItems = this.justifyItems ?? undefined;
    this.style.justifySelf = this.justify ?? undefined;
    this.style.alignItems = this.alignItems ?? undefined;
    this.style.alignContent = this.alignContent ?? undefined;
    this.style.alignSelf = this.alignment ?? undefined;
    if (this.width) {
      this.style.width = measurementUnit(this.width);
    }
    if (this.width) {
      this.style.height = measurementUnit(this.height);
    }
  }

  override render() {
    return html` <slot></slot> `;
  }
}
