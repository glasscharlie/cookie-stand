'use strict';

var parentEl = document.getElementById('parentElement');


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


// function render() {
//   for (var i = 0; i <shopHours.length; i++) {
//     var liEL = document.createElement('li');
//     liEL.textContent = `${shopHours[i]} Cookies: ${this.cookiesPerHour[i]}`;
//     parentEl.appendChild(liEL);
//   }
//   var liEl = document.createElement('li)');
//   liEl.textContent = `Daily Total: ${this.totalCookies}`;
//   parentEl.appendChild(liEl);
// }
// render();

var seattleStore = new Store('Seattle', 23, 65, 6.3);
var tokyoStore = new Store('Tokyo', 3, 24, 1.2);
var dubaiStore = new Store('Dubai', 11, 38, 3.7);
var parisStore = new Store('Paris', 20, 38, 2.3);
var limaStore = new Store('Lima', 2, 16, 4.6);

seattleStore.randomCookies();
console.log(seattleStore);
// allStores.customersEachHour();
// allStores.cookiesEachHour();
// allStores.render();
// console.log(allStores);

