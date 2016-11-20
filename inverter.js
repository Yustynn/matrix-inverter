// classes
const Matrix = require('./Classes/Matrix');
const Row = require('./Classes/Row');

// others
const { generateRandRows } = require('./Misc/utils');

const m = new Matrix( ...generateRandRows(3) );
// const m = new Matrix( ...[[1,30,0],[0,10,0],[0,0,1]].map((els) => new Row(...els)));

// m.print(1);
// m.swapRows(m.rows[0], m.rows[2])
// m.print(1);
//
// m.scaleRow(m.rows[1], 5)
// m.print(1);
//
//
// m.addRow(m.rows[1], m.rows[2], 5)
m.print(1);

m.invert();
m.print(1);
m.printInverse(1);
