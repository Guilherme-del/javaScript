import {calculaTopOcorrenciasDeQueries} from "./resolucao"

let assert = require("chai").assert;
describe('Calcula Top Ocorrencias De Queries', function() {
  it('Testa Lorem Ipsum', function() {
    assert.deepEqual(calculaTopOcorrenciasDeQueries("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",["a","em","i","el"],2), ["i","a"]);
  });
});