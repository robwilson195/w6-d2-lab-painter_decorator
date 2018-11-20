const PaintCan = function (quantity) {
  this.quantity = quantity;

};

PaintCan.prototype.checkEmpty = function () {
  if (this.quantity > 0) {
    return false;
  }
  return true;
};

module.exports = PaintCan;
