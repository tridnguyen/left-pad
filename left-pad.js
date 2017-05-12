if (typeof String.prototype.leftPad !== 'function') {
  String.prototype.leftPad = function (len, padString) {
    var delta;
    len = parseInt(len, 10);
    delta = len - this.length;

    if (delta < 0) {
      return this;
    }

    if (!padString && padString !== 0) {
      padString = ' ';
    }

    return new Array(delta+1).join(padString).substr(0, delta) + this;
  }
}
