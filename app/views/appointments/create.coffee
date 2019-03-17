$("#appointments").empty();
$("#form").empty();
$("<%= escape_javascript(render 'form') %>").appendTo("#form");
$("<%= escape_javascript(render 'appointments') %>").appendTo("#appointments");
console.log(appointments)