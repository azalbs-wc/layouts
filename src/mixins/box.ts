import { ReactiveElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { measurementUnit } from '../helpers';
import { Constructor } from './base';

/**
 * @internal
 */
type BoxSizingType = 'border-box' | 'none';
/**
 * @internal
 */
type CssPosition = 'absolute' | 'fixed' | 'relative';

/**
 * @internal
 */
type CSSDisplay =
  | 'block'
  | 'inline-block'
  | 'inline'
  | 'none'
  | 'inherit'
  | 'initial'
  | 'static'
  | 'sticky'
  | 'unset';

class BoxMeasurement {
  static get properties() {
    return [
      'width',
      'height',
      'minWidth',
      'minHeight',
      'maxWidth',
      'maxHeight',
      'marginTop',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'top',
      'bottom',
      'left',
      'right',
    ];
  }
}

export declare abstract class BoxAbstractClass {
  protected abstract setBoxProperties(): void;
  protected abstract exceptProperties(): string[];

  /**
   * Returns the value for the given property identified by the key parameter
   */
  getPropertyValue(key: string): string;
  setStyleProperties(properties: IterableIterator<PropertyKey>): void;
}

type BoxMixinType = {
  /**
   * @attr box-sizing
   */
  boxSizing: BoxSizingType;
  /**
   * @attr box-shadow
   */
  boxShadow: string;
  /**
   * @attr
   */
  margin: string;
  /**
   * @attr
   */
  marginTop: string;
  /**
   * @attr
   */
  marginBottom: string;
  /**
   * @attr
   */
  marginLeft: string;
  /**
   * @attr
   */
  marginRight: string;

  // Paddings
  /**
   * @attr
   */
  padding: string;
  /**
   * @attr
   */
  paddingTop: string;
  /**
   * @attr
   */
  paddingBottom: string;
  /**
   * @attr
   */
  paddingLeft: string;
  /**
   * @attr
   */
  paddingRight: string;

  /**
   * @attr
   */
  width: string;
  /**
   * @attr
   */
  height: string;
  /**
   * @attr
   */
  position: CssPosition;
  /**
   * @attr
   */
  display: CSSDisplay;
  /**
   * @attr
   */
  transform: string;
  /**
   * @attr
   */
  left: string;
  /**
   * @attr
   */
  right: string;
  /**
   * @attr
   */
  top: string;
  /**
   * @attr
   */
  bottom: string;
};

export const boxMixin = <T extends Constructor<ReactiveElement>>(
  baseClass: T
) => {
  class BoxMixin extends baseClass {
    //#region Component reactive property
    /**
     * @attr
     */
    @property({ type: String, attribute: 'margin' })
    margin!: string;
    /**
     * @attr margin-top
     */
    @property({ type: String, attribute: 'margin-top' })
    marginTop!: string;
    /**
     * @attr margin-bottom
     */
    @property({ type: String, attribute: 'margin-bottom' })
    marginBottom!: string;
    /**
     * @attr margin-left
     */
    @property({ type: String, attribute: 'margin-left' })
    marginLeft!: string;
    /**
     * @attr margin-right
     */
    @property({ type: String, attribute: 'margin-right' })
    marginRight!: string;

    // Paddings
    /**
     * @attr
     */
    @property({ type: String, attribute: 'padding' })
    padding!: string;
    /**
     * @attr padding-top
     */
    @property({ type: String, attribute: 'padding-top' })
    paddingTop!: string;
    /**
     * @attr padding-bottom
     */
    @property({ type: String, attribute: 'padding-bottom' })
    paddingBottom!: string;
    /**
     * @attr padding-left
     */
    @property({ type: String, attribute: 'padding-left' })
    paddingLeft!: string;
    /**
     * @attr padding-right
     */
    @property({ type: String, attribute: 'padding-right' })
    paddingRight!: string;

    /**
     * @attr
     */
    @property({ type: String })
    width!: string;
    /**
     * @attr min-width
     */
    @property({ type: String, attribute: 'min-width' })
    minWidth!: string;
    /**
     * @attr max-width
     */
    @property({ type: String, attribute: 'max-width' })
    maxWidth!: string;
    /**
     * @attr
     */
    @property({ type: String })
    height!: string;
    /**
     * @attr min-height
     */
    @property({ type: String, attribute: 'min-height' })
    minHeight!: string;
    /**
     * @attr max-height
     */
    @property({ type: String, attribute: 'max-height' })
    maxHeight!: string;
    /**
     * @attr
     */
    @property({ type: String })
    position!: CssPosition;
    /**
     * @attr
     */
    @property({ type: String })
    display!: CSSDisplay;
    /**
     * @attr
     */
    @property({ type: String })
    transform!: string;
    /**
     * @attr
     */
    @property({ type: String })
    left!: string;
    /**
     * @attr
     */
    @property({ type: String })
    right!: string;
    /**
     * @attr
     */
    @property({ type: String })
    top!: string;
    /**
     * @attr
     */
    @property({ type: String })
    bottom!: string;
    @property({ type: String, attribute: 'box-sizing' })
    boxSizing!: BoxSizingType;
    @property({ type: String, attribute: 'box-shadow' })
    boxShadow!: string;

    getPropertyValue(key: keyof this) {
      return BoxMeasurement.properties.indexOf(key as string) !== -1
        ? measurementUnit(this[key])
        : (this[key] as string);
    }

    setStyleProperties(properties: IterableIterator<PropertyKey>) {
      this.setBoxProperties();
      Array.from(properties)
        .filter(key => this.exceptProperties().indexOf(key as string) === -1)
        .forEach(key => {
          const value = this.getPropertyValue(key as keyof this);
          if (value) {
            this.style.setProperty(
              (key as string)
                .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
                .toLowerCase(),
              value
            );
          }
        });
    }

    /** @internal */
    protected setBoxProperties() {}

    /** @internal */
    protected exceptProperties(): string[] {
      return [];
    }
  }
  //#endregion Component reactive property
  return BoxMixin as unknown as Constructor<BoxAbstractClass> &
    T &
    Constructor<BoxMixinType>;
};
