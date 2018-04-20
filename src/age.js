class Age {
  constructor(years) {
    this.years = years;
  }
  inSeconds() {
    return this.years * 365 * 24 * 60 * 60;
  }
  mercury() {
    return this.years * .24;
  }
  venus() {
    return this.years * .62;
  }
  mars() {
    return this.years * 1.88;
  }
  jupiter() {
    return this.years * 11.86;
  }
}

export { Age };
