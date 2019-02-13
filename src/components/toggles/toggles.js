import $ from 'jquery';
const jQuery = $;
window.jQuery = $;
window.$ = $;

require('../../vendor/My-Toggles/toggles.js');

$(function() {
  $('.toggle').toggles({
    count: 2
  });
});