const assert = require('assert');
const Room = require('../room.js');

describe('Room', function () {
  let room1;
  let room2;
  beforeEach(function () {
    room1 = new Room(15);
    room2 = new Room(8);
  });

  it('should have an area', function () {
    const actual = room1.area;
    assert.strictEqual(actual, 15);
  });

  it('should be unpainted', function () {
    const actual = room1.paintStatus;
    assert.strictEqual(actual, false);
  });

  it('could be painted', function () {
    room1.paint();
    const actual = room1.paintStatus;
    assert.strictEqual(actual, true);
  })

});
