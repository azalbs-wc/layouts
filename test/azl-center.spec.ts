import { expect, fixture, fixtureCleanup } from '@open-wc/testing';
import { html } from 'lit';
import '../src/azl-center.js';
import { Center } from '../src/lib/center.js';

describe('azl-center', () => {
  it('should have a flexbox element with justify-content and align-item equals center', async () => {
    const el = await fixture<Center>(html`<azl-center>
      <p>Hello World!</p>
    </azl-center>`);
    expect(getComputedStyle(el).justifyContent).to.equal('center');
    expect(getComputedStyle(el).alignItems).to.equal('center');
  });

  it('should have a flexbox element with justify-content and align-item equals center', async () => {
    const el = await fixture<Center>(html`<azl-center>
      <p>Hello World!</p>
    </azl-center>`);
    const pElement = el.projectedElements?.filter(
      node => node.tagName?.toLocaleLowerCase() === 'p'
    )[0];
    console.log(el.projectedElements);
    expect(pElement).to.not.equal(null);
    expect(pElement?.innerHTML).to.equal('Hello World!');
  });
  afterEach(() => {
    fixtureCleanup();
  });
});
