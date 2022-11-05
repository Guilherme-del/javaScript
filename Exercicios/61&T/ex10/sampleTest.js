import {shuffleMusicas} from "./resolucao"

let assert = require("chai").assert;
describe('Shuffle Musicas', function() {
  it('Teste [0, 1, 1, 0]', function() {
    assert.deepEqual(shuffleMusicas([0, 1, 1, 0]), [1, 0, 1, 0]);
  });
});