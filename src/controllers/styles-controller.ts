const noChange = Symbol.for('style-noChange');

export type PropertyDeclaration = {
  setProperty: (name: string, value: unknown | null) => void | Promise<void>;
  removeProperty: (name: string) => void;
};

export type PriorityPropertyDeclaration = {
  setProperty: (
    name: string,
    value: unknown | null,
    priority?: string
  ) => void | Promise<void>;

  removeProperty: (name: string) => void;
};

export class StylesController {
  private _set!: Set<string>;
  private deleteSet: Set<string> = new Set();

  static noChange() {
    return noChange;
  }

  /**
   * Creates style properties that will be applied to DOM element
   *
   * @param properties
   */
  public tranformStyles<T extends Record<string, unknown>>(
    properties: T,
    func?: (prop: string, value: unknown) => [string, unknown]
  ) {
    return Object.keys(properties).reduce((style, prop) => {
      let value = properties[prop];
      if (value == null) {
        return style;
      }
      prop = prop
        .replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, '-$&')
        .toLowerCase();
      if (func) {
        [prop, value] = func(prop, value);
      }
      style = {...style, [prop]: value};
      return style;
    }, {} as T);
  }

  /**
   * Creates style properties that will update the DOM element
   */
  updateStyles<T extends Record<string, unknown>>(
    style: PropertyDeclaration | PriorityPropertyDeclaration,
    [properties]: [T]
  ) {
    if (this._set === undefined) {
      this._set = new Set();
      for (const name in properties) {
        this._set.add(name);
      }
    } else {
      for (const name in properties) {
        if (
          (typeof properties[name] === 'undefined' ||
            properties[name] === null) &&
          this._set!.has(name)
        ) {
          this._set!.delete(name);
          this.deleteSet.add(name);
          continue;
        }
        this._set.add(name);
      }
    }
    this.setStyles(style, properties);
  }

  private setStyles(
    style: PropertyDeclaration | PriorityPropertyDeclaration,
    styles: Record<string, unknown>
  ) {
    this._set!.forEach((name) => {
      if (name.includes('-')) {
        style.setProperty(name, styles[name] as any as string);
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (style as any)[name] = styles[name];
      }
    });
    // Remove all properties to be removed
    this.deleteSet!.forEach((name) => {
      if (name.includes('-')) {
        style.removeProperty(name);
      } else {
        // Note reset using empty string (vs null) as IE11 does not always
        // reset via null (https://developer.mozilla.org/en-US/docs/Web/API/ElementCSSInlineStyle/style#setting_styles)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (style as any)[name] = '';
      }
    });
    // Reset the delete set
    this.deleteSet = new Set();
  }
}
