import $ from 'jquery';
import debounce from 'lodash/debounce';
import '../css/main.css';

$('body').prepend('<div id="logo"></div>');
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append(`
  <div class="controls">
    <button id="startBtn">Click here to get started</button>
    <p id="count"></p>
  </div>
`);
$('body').append('<p>Copyright - Holberton School</p>');

let clicks = 0;
function updateCounter() {
  clicks += 1;
  $('#count').text(`${clicks} clicks on the button`);
}
const onClickDebounced = debounce(updateCounter, 500);
$(document).on('click', '#startBtn', onClickDebounced);
