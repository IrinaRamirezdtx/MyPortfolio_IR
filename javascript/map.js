function map() {

  var mymap = L.map('mapid');

  // Clean, reliable basemap
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(mymap);


  // =====================================================
  // COLORS
  // =====================================================

  var greenDark = '#245C45';
  var green = '#3F7F5F';
  var greenLight = '#8FBC9F';


  // =====================================================
  // HOMETOWN
  // =====================================================

  var hometown = [32.8060, -96.8080];

  var hometownBuffer = L.circle(hometown, {
    color: greenDark,
    fillColor: greenLight,
    fillOpacity: 0.30,
    weight: 3,
    radius: 1609
  }).addTo(mymap);

  hometownBuffer.bindPopup(
    '<b>Hometown Area</b><br>' +
    'A one-mile area around the part of Dallas where I am from.'
  );


  // =====================================================
  // CURRENT HOME
  // =====================================================

  var currentHome = [32.7910, -96.7156];

  var currentHomeBuffer = L.circle(currentHome, {
    color: greenDark,
    fillColor: greenLight,
    fillOpacity: 0.22,
    weight: 3,
    radius: 3218
  }).addTo(mymap);

  currentHomeBuffer.bindPopup(
    '<b>Current Home Area</b><br>' +
    'An approximate two-mile area around where I currently live.'
  );


  // =====================================================
  // WORK
  // =====================================================

  var workMarker = L.circleMarker(
    [32.9312, -96.4597],
    {
      radius: 8,
      color: greenDark,
      fillColor: green,
      fillOpacity: 1,
      weight: 2
    }
  ).addTo(mymap);

  workMarker.bindPopup(
    '<b>Work</b><br>' +
    'Rockwall, Texas<br>' +
    'Where I work as a GIS Analyst.'
  );


  // =====================================================
  // REVERCHON PARK
  // =====================================================

  var reverchonPark = L.circleMarker(
    [32.8054, -96.8109],
    {
      radius: 8,
      color: greenDark,
      fillColor: green,
      fillOpacity: 1,
      weight: 2
    }
  ).addTo(mymap);

  reverchonPark.bindPopup(
    '<b>Reverchon Park</b><br>' +
    'One of my favorite parks in Dallas.<br><br>' +
    '3505 Maple Ave<br>' +
    'Dallas, TX 75219'
  );


  // =====================================================
  // WABI HOUSE
  // =====================================================

  var wabiHouse = L.circleMarker(
    [32.8148, -96.7694],
    {
      radius: 8,
      color: greenDark,
      fillColor: green,
      fillOpacity: 1,
      weight: 2
    }
  ).addTo(mymap);

  wabiHouse.bindPopup(
    '<b>Wabi House</b><br>' +
    'One of my favorite restaurants in Dallas.<br><br>' +
    '1802 Greenville Ave, Suite 100<br>' +
    'Dallas, TX 75206'
  );


  // =====================================================
  // CAFE DURO
  // =====================================================

  var cafeDuro = L.circleMarker(
    [32.8136, -96.7715],
    {
      radius: 8,
      color: greenDark,
      fillColor: green,
      fillOpacity: 1,
      weight: 2
    }
  ).addTo(mymap);

  cafeDuro.bindPopup(
    '<b>Café Duro</b><br>' +
    'My favorite coffee shop.<br><br>' +
    '2804 Greenville Ave<br>' +
    'Dallas, TX 75206'
  );


  

  // =====================================================
  // INITIAL VIEW
  // =====================================================

  mymap.setView([32.8550, -96.6700], 11);

}
