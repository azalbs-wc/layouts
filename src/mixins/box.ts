import { ReactiveElement } from 'lit';
import { property } from 'lit/decorators/property.js';
import { measurementUnit } from '../internals/helpers.js';
import { Constructor } from './base.js';
import { BoxAbstractClass } from './box-internals.js';
import { BoxMeasurement } from './units.js';

/**
 * @internal
 */
type BoxSizingType = 'border-box' | 'none';
/**
 * @internal
 */
type CssPosition = 'absolute' | 'fixed' | 'relative' | 'inherit';

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
  margin: string | number;

  /**
   * @attr
   */
  marginTop: string | number;

  /**
   * @attr
   */
  marginBottom: string | number;

  /**
   * @attr
   */
  marginLeft: string | number;

  /**
   * @attr
   */
  marginRight: string | number;

  // Paddings

  /**
   * @attr
   */
  padding: string | number;

  /**
   * @attr
   */
  paddingTop: string | number;

  /**
   * @attr
   */
  paddingBottom: string | number;

  /**
   * @attr
   */
  paddingLeft: string | number;

  /**
   * @attr
   */
  paddingRight: string | number;

  /**
   * @attr
   */
  width: string | number;

  /**
   * @attr
   */
  height: string | number;

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
  left: string | number;

  /**
   * @attr
   */
  right: string | number;

  /**
   * @attr
   */
  top: string | number;

  /**
   * @attr
   */
  bottom: string | number;
};

export const boxMixin = <T extends Constructor<ReactiveElement>>(
  baseClass: T
) => {
  /* eslint class-methods-use-this: ["error", { "exceptMethods": ["exceptProperties", "setBoxProperties"] }] */
  class BoxMixin extends baseClass {
    // #region Component reactive property
    /**
     * @attr
     */
    @property({ type: String, attribute: 'margin' })
    margin!: string | number;

    /**
     * @attr margin-top
     */
    @property({ type: String, attribute: 'margin-top' })
    marginTop!: string | number;

    /**
     * @attr margin-bottom
     */
    @property({ type: String, attribute: 'margin-bottom' })
    marginBottom!: string | number;

    /**
     * @attr margin-left
     */
    @property({ type: String, attribute: 'margin-left' })
    marginLeft!: string | number;

    /**
     * @attr margin-right
     */
    @property({ type: String, attribute: 'margin-right' })
    marginRight!: string | number;

    // Paddings

    /**
     * @attr
     */
    @property({ type: String, attribute: 'padding' })
    padding!: string | number;

    /**
     * @attr padding-top
     */
    @property({ type: String, attribute: 'padding-top' })
    paddingTop!: string | number;

    /**
     * @attr padding-bottom
     */
    @property({ type: String, attribute: 'padding-bottom' })
    paddingBottom!: string | number;

    /**
     * @attr padding-left
     */
    @property({ type: String, attribute: 'padding-left' })
    paddingLeft!: string | number;

    /**
     * @attr padding-right
     */
    @property({ type: String, attribute: 'padding-right' })
    paddingRight!: string | number;

    /**
     * @attr
     */
    @property({ type: String })
    width!: string | number;

    /**
     * @attr min-width
     */
    @property({ type: String, attribute: 'min-width' })
    minWidth!: string | number;

    /**
     * @attr max-width
     */
    @property({ type: String, attribute: 'max-width' })
    maxWidth!: string | number;

    /**
     * @attr
     */
    @property({ type: String })
    height!: string | number;

    /**
     * @attr min-height
     */
    @property({ type: String, attribute: 'min-height' })
    minHeight!: string | number;

    /**
     * @attr max-height
     */
    @property({ type: String, attribute: 'max-height' })
    maxHeight!: string | number;

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
    left!: string | number;

    /**
     * @attr
     */
    @property({ type: String })
    right!: string | number;

    /**
     * @attr
     */
    @property({ type: String })
    top!: string | number;

    /**
     * @attr
     */
    @property({ type: String })
    bottom!: string | number;

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
            const k = (key as string)
              .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
              .toLowerCase();
            this.style.setProperty(k, value);
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
  // #endregion Component reactive property
  return BoxMixin as unknown as Constructor<BoxAbstractClass> &
    T &
    Constructor<BoxMixinType>;
};
