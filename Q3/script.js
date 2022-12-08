"use strict";
let users = [];
class PhoneBook {
  userName;
  constructor(name, number) {
    this.userName = name;
    this.phoneNumber = number;
    this.#add();
  }

  #add() {
    let user = {
      userName: this.userName,
      phoneNumber: this.phoneNumber,
    };
    users.push(user);
  }
}

const tabelContainer = document.getElementById("tabelcontainer");
const user_name = document.getElementById("user-name");
const user_phone = document.getElementById("phone-number");
const _add = document.getElementById("add");

function submit1(event) {
  event.preventDefault();
  const x = new PhoneBook(user_name.value, user_phone.value);
  tabelContainer.innerHTML = "";
  resultTable(users);
}

// display result in html
function resultTable(obj) {
  const table = document.createElement("table");

  // the header of result table
  const tableHeaderItems = ["User Name", "Phone Number"];
  let headerRow = table.insertRow();
  tableHeaderItems.forEach((item) => {
    let headerCell = document.createElement("th");
    headerCell.innerHTML = item;
    headerRow.appendChild(headerCell);
  });

  // the body of result table
  for (let i = 0; i < obj.length; i++) {
    const row = table.insertRow();
    const username = row.insertCell(0);
    const phonenumber = row.insertCell(1);
    username.innerHTML = obj[Object.keys(obj)[i]].userName;
    phonenumber.innerHTML = obj[Object.keys(obj)[i]].phoneNumber;
    tabelContainer.appendChild(table);
  }
}
