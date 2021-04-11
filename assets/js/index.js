'use strict';
class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  set name(newName) {
    if (typeof newName !== "string") {
      throw new TypeError("Wrong type");
    }
    this._name = newName;
  }
  set surname(newSurname) {
    if (typeof newSurname !== "string") {
      throw new TypeError("Wrong type");
    }
    this._surname = newSurname;
  }
  get name() {
    return this._name;
  }
  get surname() {
    return this._surname;
  }

  getFullName() {
    return [this._name, this._surname].join(" ");
  }
}
class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  get year() {
    return this._year;
  }
  set year(newYear) {
    if (typeof newYear !== "number") {
      throw new TypeError("Wrong type");
    }
    this._year = newYear;
  }
  getCourse() {
    const date = new Date().getFullYear();
    const course = date - this._year;
    if (course < 1) {
      return `${this.getFullName()} not yet studying`;
    }
    if (course > 5) {
      return `${this.getFullName()} has already completed his studies`;
    }
    return course;
  }
}

//console.log(date);
const student = new Student("Denis", "Kostyukov", 2021)