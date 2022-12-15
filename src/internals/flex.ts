import { html, LitElement, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators/property.js';
import { measurementUnit } from '../helpers';
import { flexAlignment } from '../mixins/flex';

export class FlexBox extends flexAlignment(LitElement) {
  /**
   * @attr
   */
  @property({type: String, attribute: 'direction'})
  direction: 'row' | 'column' | 'column-reverse' | 'row-reverse' = 'row';

  /**
   * @attr
   */
  @property({type: String, attribute: 'grow'})
  grow!: number;

  /**
   * @attr
   */
  @property({type: String, attribute: 'shrink'})
  shrink!: number;

  /**
   * @attr
   */
  @property({type: Boolean, attribute: 'wrap'})
  wrap!: boolean;

  /**
   * @attr
   */
  @property({type: String})
  width!: string;
  /**
   * @attr
   */
  @property({type: String})
  height!: string;

  protected override update(
    changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>
  ) {
    this.style.display = 'flex';
    this.style.flexGrow =
      typeof this.grow !== 'undefined' && this.grow !== null
        ? `${this.grow}`
        : '';
    this.style.flexDirection = this.direction;
    this.style.flexWrap = false !== Boolean(this.wrap) ? 'wrap' : 'no-wrap';
    this.style.justifyContent = this.justify ?? undefined;
    this.style.alignItems = this.alignment ?? undefined;
    this.style.alignContent = this.contentAlignment ?? undefined;
    this.style.flexShrink = this.shrink ? `${this.shrink}` : '';
    this.style.width = measurementUnit(this.width);
    this.style.height = measurementUnit(this.height);
    super.update(changedProperties);
  }
  override render() {
    return html` <slot></slot> `;
  }
}