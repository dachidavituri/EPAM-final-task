class CheckoutBuilder {
  constructor() {
    this.data = {
      firstName: "Test",
      lastName: "User",
      postalCode: "12345",
    };
  }

  withFirstName(firstName) {
    this.data.firstName = firstName;
    return this;
  }

  withLastName(lastName) {
    this.data.lastName = lastName;
    return this;
  }

  withPostalCode(postalCode) {
    this.data.postalCode = postalCode;
    return this;
  }

  withoutPostalCode() {
    this.data.postalCode = "";
    return this;
  }

  build() {
    return this.data;
  }
}

module.exports = CheckoutBuilder;
