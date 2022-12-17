import {
  elementUpdated,
  expect,
  fixture,
  fixtureCleanup,
} from '@open-wc/testing';
import { html } from 'lit';
import '../src/azl-box.js';
import { BoxLayout } from '../src/lib/box.js';

describe('azl-box', () => {
  it('has display equals to block by default', async () => {
    const el = await fixture<BoxLayout>(html`<azl-box></azl-box>`);
    expect(getComputedStyle(el).display).to.be.equal('block');
  });

  it('should set style properties whenever attributes are set', async () => {
    const el = await fixture<BoxLayout>(
      html`<azl-box margin="32" padding="16"></azl-box>`
    );
    expect(getComputedStyle(el).margin).to.be.equal('32px');
    expect(getComputedStyle(el).padding).to.be.equal('16px');
  });

  it('should update styles properties when element properties are set', async () => {
    const el = await fixture<BoxLayout>(
      html`<azl-box margin="32" padding="16" left="4" right="10"></azl-box>`
    );
    el.width = 40;
    el.height = 12;
    await elementUpdated(el);
    expect(getComputedStyle(el).width).to.be.equal('40px');
    expect(getComputedStyle(el).height).to.be.equal('12px');
    expect(getComputedStyle(el).left).to.be.equal('4px');
    expect(getComputedStyle(el).right).to.be.equal('10px');
  });
  afterEach(() => {
    fixtureCleanup();
  });
});
