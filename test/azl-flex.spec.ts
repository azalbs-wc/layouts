import {
  elementUpdated,
  expect,
  fixture,
  fixtureCleanup,
} from '@open-wc/testing';
import { html } from 'lit';
import '../src/azl-flex.js';
import { FlexBoxLayout } from '../src/internals/flex.js';

describe('azl-flex', () => {
  it('has default display equals to flex and flex-wrap to wrap', async () => {
    const el = await fixture<FlexBoxLayout>(
      html`<azl-flex direction="column"></azl-flex>`
    );
    expect(getComputedStyle(el).display).to.be.equal('flex');
    expect(getComputedStyle(el).flexWrap).to.be.equal('wrap');
  });

  it('should update styles whenever the element properties are updated', async () => {
    const el = await fixture<FlexBoxLayout>(
      html`<azl-flex direction="column"></azl-flex>`
    );
    expect(getComputedStyle(el).flexDirection).to.be.equal('column');
    el.direction = 'column-reverse';
    el.shrink = 2;
    el.justifyContent = 'space-between';
    el.justifyItems = 'baseline';
    el.justify = 'safe center';
    el.alignContent = 'flex-start';
    el.alignment = 'baseline';
    el.alignItems = 'first baseline';
    await elementUpdated(el);
    expect(getComputedStyle(el).flexDirection).to.be.equal('column-reverse');
    expect(getComputedStyle(el).flexShrink).to.be.equal('2');
    expect(getComputedStyle(el).justifyContent).to.be.equal('space-between');
    expect(getComputedStyle(el).justifySelf).to.be.equal('safe center');
    expect(getComputedStyle(el).justifyItems).to.be.equal('baseline');
    expect(getComputedStyle(el).alignContent).to.be.equal('flex-start');
    expect(getComputedStyle(el).alignSelf).to.be.equal('baseline');
    expect(getComputedStyle(el).alignItems).to.be.equal('baseline');
  });

  it('should convert integer value to the corresponding measurement unit', async () => {
    const el = await fixture<FlexBoxLayout>(
      html`<azl-flex direction="column"></azl-flex>`
    );
    el.width = 120;
    el.height = 320;
    await elementUpdated(el);
    expect(getComputedStyle(el).width).to.be.equal('120px');
    expect(getComputedStyle(el).height).to.be.equal('320px');
  });

  afterEach(() => {
    fixtureCleanup();
  });
});
