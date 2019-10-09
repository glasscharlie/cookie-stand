'use strict';

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allStores = [];
function Store (locationName, minCustomers, maxCustomers, averageCookies) {
  this.locationName = locationName;
  this.minCustomers = minCustomers;
  this.maxCustomers = maxCustomers;
  this.averageCookies = averageCookies;
  this.totalCookies = 0;
  this.cookiesPerHour =[];

  allStores.push(this);
}

Store.prototype.randomCookies = function() {
  for (var i = 0; i < shopHours.length; i++) {
    this.cookiesPerHour.push(Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) + this.minCustomers) * this.averageCookies;
    this.totalCookies = this.totalCookies + this.cookiesPerHour[i];
  }
};


var seattleStore = new Store('Seattle', 23, 65, 6.3);
var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
var dubaiStore = new Store('Dubai', 11, 38, 3.7);
var parisStore = new Store('Paris', 20, 38, 2.3);
var limaStore = new Store('Lima', 2, 16, 4.6);

console.log(allStores);


function renderHeader() {
  var tableRow = document.createElement('tr');
  var tableHeader = document.createElement('th');
  tableRow.appendChild(tableHeader);
  for (var i = 0; i < shopHours.length; i++) {
    var hourHeader = document.createElement('th');
    hourHeader.textContent = shopHours[i];
    tableRow.appendChild(hourHeader);
  }
  var cityTotal = document.createElement('th');
  cityTotal.textContent = 'Total';
  tableRow.appendChild(cityTotal);
  document.getElementById('tableHead').appendChild(tableRow);
}
renderHeader();

function renderBody() {
  var tableRow = document.createElement('tr');
  var tableData = document.createElement('td');
  tableRow.appendChild(tableData);
  for (var i = 0; i < shopHours; i++) {
    var cookieData = document.createElement('td');
    cookieData.textContent = this.cookiesPerHour[i];
    tableRow.appendChild(cookieData);
  }
}
renderBody();
