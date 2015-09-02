var fs = require('fs');
console.log("merge.js: Programa para juntar ficheros en uno solo");
//Set next variable to false to use the asynchronous version
var sync = false;
if(process.argv.length<4) {
	console.log("Error, debes llamar al programa utilizando la siguiente sintaxis: node marge.js <dest> <f1> <f2>");
	process.exit();
}

// Delete the destination file in case of exists
var dest = process.argv[2];
try {
	fs.unlinkSync(dest);
}
catch(err) {
	console.log("Fichero de destino no existía " + err);
}

if(sync) {
	for(var i=3; i<process.argv.length; i++) {
		//console.log("Arg["+ i + "] -> " + process.argv[i]);
		var fi = process.argv[i];
		try {
			var data = fs.readFileSync(fi);
		}
		catch(err) {
			console.log("Error: Fichero de entrada " + fi + " no encontrado. Será ignorado");
			continue;
		}
		fs.appendFileSync(dest, data);
	}
	process.exit();
}
for(var i=3; i<process.argv.length; i++) {
	var fi = process.argv[i];
	fs.readFile(fi, function(err, data) {
		fs.appendFile(dest, data, function(err) {
			if(err) {
				console.log("Error: Se ha producido un error " + err);
				throw err;
			}
			console.log("Se ha unido el contenido de " + fi + " a " + dest);
		});
	});
}