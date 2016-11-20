class Row {
  constructor(...els) {
    this.elements = els;
  }

  // map both inverse elements and own elements
  map(fn) {
    const [els, invEls] = [this.elements, this.inverse.elements];

    for (let j = 0; j < els.length; j++) {
      els[j] = fn(els[j], j, els);
      invEls[j] = fn(invEls[j], j, invEls);
    }
  }
}

module.exports = Row;
