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

}

export { Age };
