function esAnagrama(palabra, posibleAnagrama){
    //Si desde un principio son iguales, regresamos false; ya que no tienen orden distinto
    if(palabra.toLowerCase() === posibleAnagrama.toLowerCase()) return false;
    
    return palabra.toLowerCase().split("").sort().join("") === posibleAnagrama.toLowerCase().split("").sort().join("");
  }
  
  var palabrasYPosiblesAnagramas = [
      {
        palabra: "Hola",
        posibleAnagrama: "Aloh"
      },
      {
        palabra: "Frase",
        posibleAnagrama: "Fresa"
      },
      {
        palabra: "Escandalizar",
        posibleAnagrama: "Zascandilear"
      },
      {
        palabra: "Conservadora",
        posibleAnagrama: "Conversadora"
      },
      {
        palabra: "Perro",
        posibleAnagrama: "Gato"
      },
      {
        palabra: "Maggie",
        posibleAnagrama: "Maggie"
      },
    ];
    
  for(var x = palabrasYPosiblesAnagramas.length - 1; x >= 0; x--){
    var palabra = palabrasYPosiblesAnagramas[x].palabra,
      posibleAnagrama = palabrasYPosiblesAnagramas[x].posibleAnagrama,
      resultado = esAnagrama(palabra, posibleAnagrama);
      
    console.log("¿%s es anagrama de %s? %s", posibleAnagrama, palabra, resultado);
  }