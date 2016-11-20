const Row = require('./Row');

class Matrix {
  constructor(...rows) {
    // give the rows their corresponding standard bases
    rows.forEach( (row, order) => {
      const inverseEls = [];
      for (let i = 0; i < row.elements.length; i++) {
        inverseEls.push( (i === order) ? 1 : 0 ); // push 0 or 1 depending
      }
      row.inverse = new Row(...inverseEls);
      row.inverse.inverse = row; // backlink just for fun
    })

    this.rows = rows;
  }

  // row 1 is the one being modified
  addRow(row1, row2, multiplier = 1) {
    row1.map( (el, i) => el + (row2.elements[i] * multiplier) );
  }

  scaleRow(row, multiplier) {
    row.map( (el) => el * multiplier );
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
}


module.exports = Matrix;
