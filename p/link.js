// Reads a shared place from the link's fragment (#v=1&lat=…&lng=…&n=…),
// which browsers never send to the server. Same checks as the app
// (lib/features/pinning/pinlocate_link.dart). The name is shown with
// textContent only.
(function () {
  'use strict';
  var NUMBER = /^-?\d{1,3}(\.\d{1,10})?$/;
  var CONTROL = /[\u0000-\u001F\u007F-\u009F]/g;

  function parse(hash) {
    var fields = {};
    var parts = hash.replace(/^#/, '').split('&');
    for (var i = 0; i < parts.length; i++) {
      var eq = parts[i].indexOf('=');
      if (eq < 1) continue;
      var key = parts[i].slice(0, eq);
      try {
        fields[key] = decodeURIComponent(parts[i].slice(eq + 1));
      } catch (e) {
        return null; // a broken %-escape
      }
    }
    if (fields.v !== '1' || !NUMBER.test(fields.lat || '') || !NUMBER.test(fields.lng || '')) return null;
    var lat = Number(fields.lat), lng = Number(fields.lng);
    if (Math.abs(lat) > 90 || Math.abs(lng) > 180) return null;
    var name = (fields.n || '').replace(CONTROL, '').trim();
    if (Array.from(name).length > 80) return null;
    return { lat: lat, lng: lng, name: name };
  }

  function trim(v) {
    return v.toFixed(5).replace(/0+$/, '').replace(/\.$/, '');
  }

  var fallbackName = null;

  function show() {
    var place = parse(location.hash);
    var heading = document.getElementById('name');
    if (fallbackName === null) fallbackName = heading.textContent;
    heading.textContent = fallbackName;
    document.getElementById('coords').textContent = '';
    var error = document.getElementById('error');
    var actions = document.getElementById('actions');
    // The language switch keeps the place.
    var other = document.querySelector('a.switch');
    if (other) other.href = other.getAttribute('href').split('#')[0] + location.hash;
    if (!place) {
      error.hidden = false;
      actions.hidden = true;
      return;
    }
    error.hidden = true;
    var ll = place.lat.toFixed(6) + ',' + place.lng.toFixed(6);
    if (place.name) heading.textContent = place.name;
    document.getElementById('coords').textContent = trim(place.lat) + ', ' + trim(place.lng);
    document.getElementById('waze').href = 'https://waze.com/ul?ll=' + ll + '&navigate=yes';
    document.getElementById('maps').href = 'https://www.google.com/maps/dir/?api=1&destination=' + ll;
    actions.hidden = false;
  }

  document.addEventListener('DOMContentLoaded', show);
  window.addEventListener('hashchange', show);
})();
