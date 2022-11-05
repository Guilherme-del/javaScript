import {calculaTotalLeds} from "./resolucao"

let assert = require("chai").assert;
describe('Calcula Total Leds', function() {
  it('Teste 1', function() {
    assert.equal(calculaTotalLeds(2,3), 12);
  });
});