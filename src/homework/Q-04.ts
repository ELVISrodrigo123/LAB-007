(() => {
  /* APLICA DRY */

  //EX - 1

/*   function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  } */
  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    return sumResult * c;
  }

/*   function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  } */

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    return sumResult * z;
  }
  //solo lo mismo y queria comentarlo este segundo ejemplo

  // EX - 2
  function rectangleArea (length: number, width: number): number {
    return length * width;
  }

  function circleArea (radius: number): number {
    return Math.PI * (radius ** 2); 
  }

  const rectangle = rectangleArea(5, 10);
  console.log(`Rectangle Area Is: ${rectangleArea}`);
  
  const circle = circleArea(7);
  console.log(`Circle Area Is: ${circleArea}`);
  

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function isEmailValid(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function isUsernameValid(username: string): boolean {
    //...some code for validate here
    return false;
  }
})();
