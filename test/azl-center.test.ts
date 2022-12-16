import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import '../src/azl-center.js';
import { Center } from '../src/internals/center.js';
import { FlexBoxLayout } from '../src/internals/flex.js';

describe('azl-center', () => {
  it('should have a flexbox element with justify-content and align-item equals center', async () => {
    const el = await fixture<Center>(html`<azl-center>
      <p>Hello World!</p>
    </azl-center>`);
    const flexbox = el.shadowRoot?.querySelector('azl-flex') as FlexBoxLayout;
    expect(getComputedStyle(flexbox).justifyContent).to.equal('center');
    expect(getComputedStyle(flexbox).alignItems).to.equal('center');
  });

  it('should have a flexbox element with justify-content and align-item equals center', async () => {
    const el = await fixture<Center>(html`<azl-center>
      <p>Hello World!</p>
    </azl-center>`);
    const pElement = el.projectedElements?.filter(
      node => node.tagName?.toLocaleLowerCase() === 'p'
    )[0];
    expect(pElement).to.not.equal(null);
    expect(pElement?.innerHTML).to.equal('Hello World!');
  });
  afterEach(() => {
    fixtureCleanup();
  });
});
