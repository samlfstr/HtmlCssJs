let name = "Samuel Foster";

// first letter
document.write('First Letter : ' + name[0]);

document.write('<br>');

// last letter
document.write('Last Letter : ' + name[name.length-1].toUpperCase());

document.write('<br>');

// chage certain caracters inside a string
document.writeln(name.indexOf('F') + '<br>');

//replace a letter
// name = name.replace('S','R');

// substr - First Name
let last_name = name.substr(name.indexOf('F'),6);

// substr - Last Name
let first_name = name.substr(name.indexOf('S'),6);

document.writeln(first_name + '<br>');
document.writeln(last_name + '<br>');




