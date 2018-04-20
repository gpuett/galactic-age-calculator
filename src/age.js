class Age {
  constructor(years) {
    this.years = years;
  }
  inSeconds() {
    return this.years * 365 * 24 * 60 * 60;
  }


}

export { Age };
