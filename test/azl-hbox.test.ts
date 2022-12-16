import {
  elementUpdated,
  expect,
  fixture,
  fixtureCleanup,
} from '@open-wc/testing';
import { html } from 'lit';
import '../src/azl-hbox.js';
import { HBoxLayout } from '../src/internals/hbox.js';

describe('azl-hbox', () => {
  it('has flex direction property set to row', async () => {
    const el = await fixture<HBoxLayout>(html`<azl-hbox></azl-hbox>`);
    expect(getComputedStyle(el).display).to.be.equal('flex');
    expect(getComputedStyle(el).flexDirection).to.be.equal('row');
  });

  it('should set style properties whenever attributes are set', async () => {
    const el = await fixture<HBoxLayout>(
      html`<azl-hbox margin="32" padding="16"></azl-hbox>`
    );
    expect(getComputedStyle(el).margin).to.be.equal('32px');
    expect(getComputedStyle(el).padding).to.be.equal('16px');
  });

  it('should update styles properties when element properties are set', async () => {
    const el = await fixture<HBoxLayout>(
      html`<azl-hbox margin="32" padding="16"></azl-hbox>`
    );
    el.justifyContent = 'space-between';
    el.justifyItems = 'baseline';
    el.justify = 'safe center';
    el.alignContent = 'flex-start';
    el.alignment = 'baseline';
    el.alignItems = 'first baseline';
    await elementUpdated(el);
    expect(getComputedStyle(el).justifyContent).to.be.equal('space-between');
    expect(getComputedStyle(el).justifySelf).to.be.equal('safe center');
    expect(getComputedStyle(el).justifyItems).to.be.equal('baseline');
    expect(getComputedStyle(el).alignContent).to.be.equal('flex-start');
    expect(getComputedStyle(el).alignSelf).to.be.equal('baseline');
    expect(getComputedStyle(el).alignItems).to.be.equal('baseline');
  });
  afterEach(() => {
    fixtureCleanup();
  });
});
