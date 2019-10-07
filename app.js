var parentEl = document.getElementById('parentElement');
parentEl.textContent = 'attempt to contact html';

var child = document.createElement('h1');
child.textContent = 'proof of life';
parentEl.appendChild(child);

var iceCreamShop = {
  shopHours: ['6am', '7am', '8am'],
  hourTotals: ['12', '12', '14'],
  locationName: 'Pike Place Market',

  render: function() {
    for( var i = 0; i < this.shopHours.length; i++ ) {
      var childEl = document.createElement('li');
    //   childEl.textContent = 'Shop Hours: ' + this.shopHours[i];
      childEl.textContent = `Shop Hours: ${this.shopHours[i]} ~ Total Customers: ${this.hourTotals[i]}`;
      parentEl.appendChild(childEl);
    }
  }
};

iceCreamShop.render();

