const Row = require('../Classes/Row');

generateRandRows = (numRows, maxElSize = 10) => {
  const rows = [];

  for (let m = 0; m < numRows; m++) {
    const els = [];
    for (let n = 0; n < numRows; n++) {
      els.push( Math.round( Math.random() * maxElSize) );
    }
    rows.push(new Row(...els));
  }

  return rows;
}

module.exports = {
  generateRandRows,
};
