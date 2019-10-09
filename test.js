var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var tableBody = document.getElementbyId('tableElement');

var renderHeaderRow = function() {
  var trEL = document.createElement('tr');
  var thEL = document.createElement('th');
  thEL.textContent = 'location';
  trEL.appendChild(thEL);

  for( var i = 0; i < hours.length; i++ ) {
    var tdEl = document.createElement('td');
    tdEl.textContent = hours[i];
    trEL.appendChild(tdEl);
  }
  tableBody.appendChild(trEl);
};
renderHeaderRow();

