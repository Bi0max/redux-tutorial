
import chai from 'chai';
import chaiImmutable from 'chai-immutable';

var jsdom = require('jsdom');
const { JSDOM } = jsdom;

const { document } = (new JSDOM('<!doctype html><html><body></body></html>')).window;

const doc = document;
const win = doc.defaultView;

global.document = doc;
global.window = win;

//Object.keys(window).forEach((key) => {
//  if (!(key in global)) {
//    global[key] = window[key];
//  }
//});

chai.use(chaiImmutable);