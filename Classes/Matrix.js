const Row = require('./Row');

class Matrix {
  constructor(...rows) {
    // give the rows their corresponding standard bases
    rows.forEach( (row, order) => {
      if (row.isEmpty) throw new Error('One of the rows during matrix creation was empty :/');

      const inverseEls = [];
      for (let i = 0; i < row.elements.length; i++) {
        inverseEls.push( (i === order) ? 1 : 0 ); // push 0 or 1 depending
      }

      row.inverse = new Row(...inverseEls);
      row.inverse.inverse = row; // backlink just for fun
    })

    this.rows = rows;
  }

  // @TODO: hacky fix right now. mapDestructive method not sufficient here
  addRow(row1, row2, multiplier = 1) {
    // row1.mapDestructive( (el, i) => el + (row2.elements[i] * multiplier) );

    row1.elements = row1.elements.map( (el, i) => el + (row2.elements[i] * multiplier) );
    row1.inverse.elements = row1.inverse.elements.map( (el, i) => el + (row2.inverse.elements[i] * multiplier) );

    if (row1.isEmpty) throw new Error('You emptied the row during row addition.');
  }

  scaleRow(row, multiplier) {
    if (multiplier === 0) throw new Error('How the hell are you gonna invert THAT?!');

    row.mapDestructive( (el) => el * multiplier );
  }

  swapRows(row1, row2) {
    // retrieve current indexes
    const [idx1, idx2] = [row1, row2].map( (row) => this.rows.indexOf(row) );
    // swap
    [ this.rows[idx1], this.rows[idx2] ] = [ this.rows[idx2], this.rows[idx1] ];
  }

  sort() {
    this.rows.sort( (a, b) => a.leadingEntryIdx > b.leadingEntryIdx ? 1 : 0 )
  }

  print(addNewline = false) {
    this.rows.forEach((row) => {
      console.log( row.elements.join(', ') );
    })

    if (addNewline) console.log('\n');
  }

  printInverse(addNewline = false) {
    this.rows.forEach((row) => {
      console.log( row.inverse.elements.join(', ') );
    })

    if (addNewline) console.log('\n');
  }

  invert() {
    this.sort();

    for (let m = 0; m < this.rows.length; m++) {
      const row2 = this.rows[m];

      this.scaleRow(row2, 1/row2.elements[m]);

      for (let n = 0; n < this.rows.length; n++) {
        if (m === n) continue; // don't add to itself!

        const row1 = this.rows[n];
        const multiplier = -row1.elements[m] / row2.elements[m];

        if (!multiplier) continue;

        this.addRow( row1, row2, multiplier );
      }
    }
  }
}


module.exports = Matrix;
