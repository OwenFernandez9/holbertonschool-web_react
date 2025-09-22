import $ from 'jquery';
import './header.css';
import logoUrl from '../../assets/holberton-logo.jpg';

console.log('Init header');
const $header = $(`
  <div id="app-header">
    <img id="logo" alt="Holberton Logo" />
    <h1>Holberton Dashboard</h1>
  </div>
`);
$header.find('#logo').attr('src', logoUrl);
$('body').append($header);
