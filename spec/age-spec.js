import { Age } from './../src/age.js'

describe('Age', function() {

  it('should convert input age into seconds', function() {
    let age = new Age(26);
    expect(age.inSeconds()).toEqual(819936000)
  });

  it('should show the difference between two dates in seconds', function() {
    let birth = new Date("8/16/1991");
    let today = new Date("4/20/2018");
    let age = Math.abs(today.getTime() - birth.getTime());
    let ageSec = Math.ceil(age / 1000);
    expect(ageSec).toEqual(8.41915326e+8);
  })

});
