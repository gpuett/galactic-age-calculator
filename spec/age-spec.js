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
    expect(ageSec).toEqual(841881600);
  })

  it('should return user age in Mercury years', function() {
    let age = new Age(26);
    expect(age.mercury()).toEqual(6.24);
  })

  it('should return user age in Venus years', function() {
    let age = new Age(26);
    expect(age.venus()).toEqual(16.12);
  })

  it('should return user age in Mars years', function() {
    let age = new Age(26);
    expect(age.mars()).toBeCloseTo(48.88);
  })

  it('should return user age in Jupiter years', function() {
    let age = new Age(26);
    expect(age.jupiter()).toEqual(308.36)
  })

});
