const Row = require('./Row');

class Matrix {
  constructor(...rows) {
    // give the rows their corresponding standard bases
    rows.forEach( (row, order) => {
      const inverseEls = [];
      for (let i = 0; i < row.length; i++) {
        inverseEls.push( (i + 1 === order) ? 0 : 1 ); // push 0 or 1 depending
      }
      row.inverse = new Row(inverseEls);
      row.inverse.inverse = row; // backlink just for fun
    })

    this.rows = rows;
  }

  print() {
    this.rows.forEach((row) => {
      console.log( row.elements.join(', ') );
    })
  }
}


module.exports = Matrix;
