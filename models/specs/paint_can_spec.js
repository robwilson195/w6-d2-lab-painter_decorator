const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function () {
  let paintCan1;
  let paintCan2;
  let paintCan3;
  beforeEach(function () {
    paintCan1 = new PaintCan(10);
    paintCan2 = new PaintCan(20);
    paintCan3 = new PaintCan(0);
  });

  it('should have some paint', function () {
    const actual = paintCan1.quantity;
    assert.strictEqual(actual, 10);
  });

  it('should check if empty (is empty)', function () {
    const actual = paintCan1.checkEmpty();
    assert.strictEqual(actual, false);
  });

  it('should check if empty (not empty)', function () {
    const actual = paintCan3.checkEmpty();
    assert.strictEqual(actual, true);
  });

  it('should be able to empty itself', function () {
    paintCan1.empty();
    const actual = paintCan1.checkEmpty();
    assert.strictEqual(actual, true);
  });

});
