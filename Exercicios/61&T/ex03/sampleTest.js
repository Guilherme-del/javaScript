import {calculaNumeroDaSenha} from "./resolucao"

let assert = require("chai").assert;
describe('Calcula Numero Da Senha', function() {
  it('Retorna Senha Correta', function() {
    assert.equal(calculaNumeroDaSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"]), 724);
  });
});