import { Age } from './../src/age.js'

describe('Age', function() {

  it('should convert input age into seconds', function() {
    let age = new Age(26);
    expect(age.inSeconds()).toEqual(819936000)
  });

});
