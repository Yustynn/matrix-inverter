// classes
const Matrix = require('./Classes/Matrix');
const Row = require('./Classes/Row');

// others
const { generateRandRows } = require('./Misc/utils');

const m = new Matrix( ...generateRandRows(3) );
m.print();
