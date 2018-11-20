const assert = require('assert');
const PaintCan = require('../paint_can.js');

describe('PaintCan', function () {
  let paintCan1;
  let paintCan2;
  beforeEach(function () {
    paintCan1 = new PaintCan(10);
    paintCan2 = new PaintCan(20);
  });

  it('should have some paint', function () {
    const actual = paintCan1.quantity;
    assert.strictEqual(actual, 10);
  });

});
