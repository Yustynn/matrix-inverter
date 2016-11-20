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

  get leadingEntryIdx() {
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i]) return i;
    }

    return 0;
  }

  get isEmpty() {
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i]) return false;
    }

    return true;
  }
}

module.exports = Row;
