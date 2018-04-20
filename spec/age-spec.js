import { Age } from './../src/age.js'

describe('Age', function() {

  const average = new Age(78);

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

  it('should tell user how many years it has left to live on each planet', function() {
    let age = new Age(26);
    expect(average.years - age.years).toEqual(52);
    expect(average.mercury() - age.mercury()).toBeCloseTo(12.48);
    expect(average.venus() - age.venus()).toBeCloseTo(32.24);
    expect(average.mars() - age.mars()).toBeCloseTo(97.76);
    expect(average.jupiter() - age.jupiter()).toBeCloseTo(616.72);

  })

  it('should tell user how many years they have lived past average life expectancy', function() {
    let age = new Age(88);
    expect(Math.abs(average.years - age.years)).toEqual(10);
    expect(Math.abs(average.mercury() - age.mercury())).toBeCloseTo(2.4);
    expect(Math.abs(average.venus() - age.venus())).toBeCloseTo(6.2);
    expect(Math.abs(average.mars() - age.mars())).toBeCloseTo(18.8);
    expect(Math.abs(average.jupiter() - age.jupiter())).toBeCloseTo(118.6);

  })

});
