import {
  elementUpdated,
  expect,
  fixture,
  fixtureCleanup,
} from '@open-wc/testing';
import { html } from 'lit';
import '../src/azl-vbox.js';
import { VBoxLayout } from '../src/lib/vbox.js';

describe('azl-vbox', () => {
  it('has flex direction property set to column', async () => {
    const el = await fixture<VBoxLayout>(html`<azl-vbox></azl-vbox>`);
    expect(getComputedStyle(el).display).to.be.equal('flex');
    expect(getComputedStyle(el).flexDirection).to.be.equal('column');
  });

  it('should set style properties whenever attributes are set', async () => {
    const el = await fixture<VBoxLayout>(
      html`<azl-vbox margin="32" padding="16"></azl-vbox>`
    );
    expect(getComputedStyle(el).margin).to.be.equal('32px');
    expect(getComputedStyle(el).padding).to.be.equal('16px');
  });

  it('should update styles properties when element properties are set', async () => {
    const el = await fixture<VBoxLayout>(
      html`<azl-vbox margin="32" padding="16"></azl-vbox>`
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
