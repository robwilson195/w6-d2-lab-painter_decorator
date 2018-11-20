const Room = function (area) {
  this.area = area;
  this.paintStatus = false;
};

Room.prototype.paint = function () {
  this.paintStatus = true;
};

module.exports = Room;
