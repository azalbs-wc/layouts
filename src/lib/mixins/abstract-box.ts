/**
 * Base class for Box Layout components. Provides
 * contracts that must be implemented by inherited classes
 *
 * @internal
 */
export declare abstract class BoxAbstractClass {
  /**
   * Set the box default properties
   */
  protected abstract setBoxProperties(): void;

  /**
   * Provides with properties that might be ignored when setting CSS properties
   */
  protected abstract exceptProperties(): string[];

  /**
   * Returns the value for the given property identified by the key parameter
   */
  getPropertyValue(key: string): string;

  /**
   * Set styles properties of the current HTML element
   *
   * @param properties
   */
  setStyleProperties(properties: IterableIterator<PropertyKey>): void;
}
