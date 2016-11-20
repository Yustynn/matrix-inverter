// classes
const Matrix = require('./Classes/Matrix');
const Row = require('./Classes/Row');

// others
const { generateRandRows } = require('./Misc/utils');

const m = new Matrix( ...generateRandRows(5) );

m.print(1);
m.swapRows(m.rows[0], m.rows[2])
m.print(1);

m.scaleRow(m.rows[1], 5)
m.print(1);
