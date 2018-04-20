describe('Date', function() {

  it('should convert input age into seconds', function() {
    let age = new Date(91, 7, 16);
    expect(age.inSeconds()).toEqual(8.419e+8);
  });

});
