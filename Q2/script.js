"use strict";
class Media {
  constructor(name, subject, year) {
    this.className = name;
    this.subject = subject;
    this.year = year;
  }
}
class Film extends Media {
  constructor(name, subject, year, director) {
    super(name, subject, year);
    this.director = director;
  }
}
class Book extends Media {
  constructor(name, subject, year, author) {
    super(name, subject, year);
    this.author = author;
  }
}
class Music extends Media {
  constructor(name, subject, year, singer) {
    super(name, subject, year);
    this.singer = singer;
  }
}

const thor = new Film("Thor", "Emptiness", 2011, "Kent brana");
console.log(JSON.stringify(thor));

const theLordOfTheRings = new Book(
  "The Lord Of The Rings",
  "Emptiness",
  1954,
  "J.R.R.Talkin"
);
console.log(JSON.stringify(theLordOfTheRings));

const metallica = new Music("Metallica", "Heavy Metal", 1991, "James");
console.log(JSON.stringify(metallica));
