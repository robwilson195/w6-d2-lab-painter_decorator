const assert = require('assert');
const PaintCan = require('../paint_can.js');
const Room = require('../room.js');
const Decorator = require('../decorator.js');

describe('Decorator', function () {
  let paintCan1;
  let paintCan2;
  let paintCan3;
  let room1;
  let room2;

  beforeEach(function () {
    paintCan1 = new PaintCan(10);
    paintCan2 = new PaintCan(20);
    paintCan3 = new PaintCan(0);
    room1 = new Room(15);
    room2 = new Room(8);
    paintStock = [paintCan1, paintCan2, paintCan3]
    decorator = new Decorator('Davie')
  });

  it('should start with an empty paint stock')
});
