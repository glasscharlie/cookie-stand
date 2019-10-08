'use strict';

var parentEl = document.getElementById('parentElement');

var child = document.createElement('h3');
child.textContent = 'Seattle: ';
parentEl.appendChild(child);

var shopHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


var seattleStore = {
  locationName: 'Seattle',
  shopHours,
  minCustomers: 23,
  maxCustomers: 65,
  averageCookies:6.3,
  randomSum: 0,

  randomNumberGenerator: function (min, max) {
    var rand = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers * this.averageCookies);
    this.randomSum += rand;
    return rand;
  },
  render: function() {
    for (var z = 0; z < this.shopHours.length; z++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[z]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.randomSum} cookies`;
    parentEl.appendChild(childEl);
  }
};
seattleStore.randomNumberGenerator();
seattleStore.render();


child = document.createElement('h3');
child.textContent = 'Tokyo: ';
parentEl.appendChild(child);
var tokyoShop = {
  locationName: 'Tokyo',
  shopHours,
  minCustomers: 3,
  maxCustomers: 24,
  cookieAverage: 1.2,
  randomSum: 0,
  randomNumberGenerator: function (min, max) {
    var rand = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers * this.cookieAverage);
    this.randomSum += rand;
    return rand;
  },
  render: function () {
    for (var z = 0; z < this.shopHours.length; z++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[z]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.randomSum} cookies`;
    parentEl.appendChild(childEl);
  }
};
tokyoShop.randomNumberGenerator();
tokyoShop.render();


child = document.createElement('h3');
child.textContent = 'Dubai: ';
parentEl.appendChild(child);
var dubaiShop = {
  locationName: 'Dubai',
  shopHours,
  minCustomers: 11,
  maxCustomers: 38,
  cookieAverage: 3.7,
  randomSum: 0,
  randomNumberGenerator: function (min, max) {
    var rand = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers * this.cookieAverage);
    this.randomSum += rand;
    return rand;
  },
  render: function () {
    for (var z = 0; z < this.shopHours.length; z++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[z]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.sumRandoms} cookies`;
    parentEl.appendChild(childEl);
  }
};
dubaiShop.randomNumberGenerator();
dubaiShop.render();


child = document.createElement('h3');
child.textContent = 'Paris: ';
parentEl.appendChild(child);
var parisShop = {
  locationName: 'Paris',
  shopHours,
  minCustomers: 20,
  maxCustomers: 38,
  cookieAverage: 2.3,
  randomSum: 0,
  randomNumberGenerator: function (min, max) {
    var rand = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers * this.cookieAverage);
    this.randomSum += rand;
    return rand;
  },
  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.randomSum} cookies`;
    parentEl.appendChild(childEl);
  }
};
parisShop.randomNumberGenerator();
parisShop.render();



child = document.createElement('h3');
child.textContent = 'Lima: ';
parentEl.appendChild(child);
var limaShop = {
  locationName: 'Lima',
  shopHours,
  minCustomers: 2,
  maxCustomers: 16,
  cookieAverage: 4.6,
  randomSums: 0,
  randomNumberGenerator: function (min, max) {
    var rand = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers) + this.minCustomers * this.cookieAverage);
    this.randomSums += rand;
    return rand;
  },
  render: function () {
    for (var i = 0; i < this.shopHours.length; i++) {
      var childEl = document.createElement('li');
      childEl.textContent = `${this.shopHours[i]}: ${this.randomNumberGenerator()} cookies `;
      parentEl.appendChild(childEl);
    }
    childEl.textContent = ` Total: ${this.randomSums} cookies`;
    parentEl.appendChild(childEl);
  }
};
limaShop.randomNumberGenerator();
limaShop.render();
