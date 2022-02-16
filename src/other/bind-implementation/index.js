function plus(x, y) {
  return x + y;
}

plus.fbind = function (a, ...args) {
  return (...args2) => this.apply(a, [...args, ...args2]);
};
