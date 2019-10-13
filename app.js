'use strict';

var storeHours = ['7:00 am','8:00 am','8:00 am','10:00 am','11:00 am','12:00 am','1:00 pm','2:00 pm','3:00 pm','4:00 pm','5:00 pm','6:00 pm','7:00 pm','8:00 pm','Total'];
var storeList = [];

function CookieShop(min, max, avgC, sName) {
  this.minCust = min;
  this.maxCust = max;
  this.avgCookies = avgC;
  this.storeName = sName;
  this.cookieCount = [];
  this.randCust = function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust;
  };
  this.dailySales = function () {
    var cookieTotal = 0;
    var randSale;
    for (var i = 0; i < storeHours.length - 1; i++) {
      randSale = Math.ceil(this.randCust() * this.avgCookies);
      cookieTotal += randSale;
      this.cookieCount.push(randSale);
    }
    this.cookieCount.push(cookieTotal);
  };
  this.render = function () {
    this.dailySales();
    var newTR = document.createElement('tr');
    var newTD = document.createElement('td');
    newTD.textContent = this.storeName;
    newTR.appendChild(newTD);
    for (var a = 0; a < storeHours.length; a++) {
      newTD = document.createElement('td');
      newTD.textContent = this.cookieCount[a];
      newTR.appendChild(newTD);
    }
    return newTR;
  };

  storeList.push(this);
}

var Seattle = new CookieShop(23, 65, 6.3, 'Seattle');
var Tokyo = new CookieShop(3, 24, 1.2, 'Tokyo');
var Dubai = new CookieShop(11, 38, 3.7, 'Dubai');
var Paris = new CookieShop(20, 38, 2.3, 'Paris');
var Lima = new CookieShop(2, 16, 4.6, 'Lima');




function tableHead() {
  var newTHead = document.createElement('thead');
  var newTR = document.createElement('tr');
  var newTH = document.createElement('th');
  newTH.textContent = 'Store Name';
  newTR.appendChild(newTH);
  for (var c = 0; c < storeHours.length; c++) {
    newTH = document.createElement('th');
    newTH.textContent = storeHours[c];
    newTR.appendChild(newTH);
  }
  newTHead.appendChild(newTR);
  return newTHead;
}

function tableFoot() {
  var newTR = document.createElement('tr');
  var newTD = document.createElement('td');
  newTD.textContent = 'Totals';
  newTR.appendChild(newTD);
  for (var c = 0; c < storeHours.length; c++) {
    var hourlyTotal = 0;
    for (var i = 0; i < storeList.length; i++) {
      hourlyTotal += storeList[i].cookieCount[c];
    }
    newTD = document.createElement('td');
    newTD.textContent = hourlyTotal;
    newTR.appendChild(newTD);
  }
  return newTR;
}

function genTable() {
  var pageBody = document.getElementsByTagName('body')[0];
  var newTable = document.createElement('table');
  newTable.appendChild(tableHead());
  var newTBody = document.createElement('tbody');
  for (var b = 0; b < storeList.length; b++) {
    newTBody.appendChild(storeList[b].render());
  }
  newTBody.appendChild(tableFoot());
  newTable.appendChild(newTBody);
  pageBody.appendChild(newTable);
}

genTable();

var userForm = document.getElementById('newStore');
userForm.addEventListener('submit', addStore);

function addStore(event) {
  event.preventDefault();

  var location = event.target.locationElement.value;
  var minCustomers = event.target.minCustomersElement.value;
  var maxCustomers = event.target.maxCustomersElement.value;
  var avgCustomers = event.target.avgCookiesElement.value;
  //plus signs make the following into an integer, similar to parseInt()
  var newStore = new CookieShop(+minCustomers, +maxCustomers, +avgCustomers, location);



  // storeList.push(newStore);
  // console.log(storeList);
  // console.log('ANYONG', event);
  // console.log(location);
  // console.log(minCustomers);
  // console.log(maxCustomers);
  // console.log(avgCustomers);
  console.log(newStore);

}


