(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
    ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const Emails: string[] = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(Emails);

  //Lista de compras de un carrito
  const ShoppingGame: Array<{product: String}> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(ShoppingGame);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const ThreeAdd = (num: number): number => {
    return num + 3;
  }

  console.log(ThreeAdd(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
  function capitalize(word: string): string {
    word = word.toLowerCase();    
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  console.log(capitalize("capricorn"));
  
  //variable que alerta en caso de que algun evento suceda
  const EventAlert: boolean = false;

  if(EventAlert) console.log('event');

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  const Access: boolean = true;

  if(Access) console.log('welcome');
  

  //variable para hallar el promedio de 3 numeros
  const Average: number = (1 + 2 + 3) / 3;

  console.log(Average);
  
  //variable que almacena el valor de PI
  const Pi: number = 3.141592654;

  console.log(Pi);
  

  //variabel que controla si un archivo es modificable 
  const Editable: boolean = false;

  if(Editable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const ConstantE: number = 2.718281828; 

  console.log(ConstantE);



})();