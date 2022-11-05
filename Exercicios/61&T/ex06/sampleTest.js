import {checaNumeroEscondido} from "./resolucao"

let assert = require("chai").assert;
describe('Checa Numero Escondido', function() {
  it('Verifica Se O Numero Esta Oculto Em Outro', function() {
    assert.equal(checaNumeroEscondido(12345,235), true);
  });
});