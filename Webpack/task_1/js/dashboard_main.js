import $ from 'jquery';
import debounce from 'lodash/debounce';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button id="startBtn">Click here to get started</button>');
$('body').append("<p id='count'></p>");
$('body').append('<p>Copyright - Holberton School</p>');

let clicks = 0;
function updateCounter() {
  clicks += 1;
  $('#count').text(`${clicks} clicks on the button`);
}

const onClickDebounced = debounce(updateCounter, 500);
$(document).on('click', '#startBtn', onClickDebounced);
