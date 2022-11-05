import {retornaMenorEMaiorValorDeVendas} from "./resolucao"

let assert = require("chai").assert;
describe('Retorna Menor E Maior Valor De Vendas', function() {
  it('Retorna O Menor E Maior Valor De Vendas', function() {
    assert.deepEqual(retornaMenorEMaiorValorDeVendas([[200,100,0],[300],[600,1000],[250]]), [100,300]);
  });
});