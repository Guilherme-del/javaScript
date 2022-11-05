import {ultimaParada} from "./resolucao"

let assert = require("chai").assert;
describe('Ultima Parada', function() {
  it('Calcula O Ultimo Posto De Combustivel Na Autonomia', function() {
    assert.equal(ultimaParada(2,0.1,[2,15,22,10.2]), 15);
  });
});