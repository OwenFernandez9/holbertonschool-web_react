import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');

$('body').append(`
  <div class="controls">
    <button id="startBtn">Click here to get started</button>
    <p id="count"></p>
  </div>
`);

let clicks = 0;
function updateCounter() {
  clicks += 1;
  $('#count').text(`${clicks} clicks on the button`);
}

const onClickDebounced = _.debounce(updateCounter, 500);
$(document).on('click', '#startBtn', onClickDebounced);
