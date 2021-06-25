/**
 * Rule 3: Wrap All Primitives And Strings
 *
 * Every variable with type that was not written by yourself is primitive, and you should encapsulate them to a class by their behaviours.
 *
 */

/**
 * Without Object Calisthenics
 * */

class Customer_WithoutCalisthenics {
  /**
   * Primitive Obsession
   **/
  constructor(
    firstName,
    lastName,
    streetAddress,
    city,
    county,
    state,
    zipCode,
    country
  ) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._streetAddress = streetAddress;
    this._city = city;
    this._county = county;
    this._state = state;
    this._zipCode = zipCode;
    this._country = country;
  }

  fetchZipCode(zipCode) {
    // Algorithm...
  }

  get completeName() {
    return `${this._firstName} ${this.lastName}`;
  }

  get firstName() {
    return this.firstName;
  }

  get lastName() {
    return this.lastName;
  }

  /** ..... */
}

/**
 * With Object Calisthenics
 * */

class Customer_WithCalisthenics {
  constructor(customerName, address) {
    this._customerName = customerName;
    this._address = address;
  }

  get name() {
    return this._customerName;
  }

  get address() {
    return this._address;
  }
}

class CustomerName {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  get lastName() {
    return this._lastName;
  }

  get completeName() {
    return `${this._firstName} ${this.lastName}`;
  }
}

class Address {
  constructor(streetAddress, city, county, state, zipCode, country) {
    this._streetAddress = streetAddress;
    this._city = city;
    this._county = county;
    this._state = state;
    this._zipCode = zipCode;
    this._country = country;
  }

  fetchZipCode(zipCode) {
    // Algorithm...
  }

  get streetAddress() {
    return this.address;
  }

  /** ....... */
}
