const PaintCan = function (quantity) {
  this.quantity = quantity;

};

PaintCan.prototype.checkEmpty = function () {
  if (this.quantity > 0) {
    return false;
  }
  return true;
};

PaintCan.prototype.empty = function () {
  this.quantity = 0;
};

module.exports = PaintCan;
