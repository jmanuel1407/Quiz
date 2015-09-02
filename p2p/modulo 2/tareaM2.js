

function agenda(titulo, inic) {
    var _titulo = titulo;
    var _contenido = inic;
 
    return {
        titulo: function () {
            return titulo;
        },
        meter: function (nombre, tf) {
            contenido[nombre] = tf;
        },
        tf: function (nombre) {
            return contenido[nombre];
        },
        borrar: function (nombre) {
            delete contenido[nombre];
        },
        toJSON: function () {
            return JSON.stringify(contenido);
        },
  listar:function(){
    var lista="";
    for (var nombre in _contenido){
      lista += nombre + "," + _contenido[nombre] + "\n";
  };

  console.log(lista);
  return lista;
    }
}
}
 var amigos = agenda ("Amigos",
             { Pepe: 113278561,
               José: 157845123,
               Jesús: 178512355
             });
console.log(amigos.listar());