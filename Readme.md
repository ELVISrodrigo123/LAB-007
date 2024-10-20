## SOLID

Si hablamos de diseño y desarrollo de aplicaciones, Principios SOLID son unas palabras que debes conocer como uno de los fundamentos de la arquitectura y desarrollo de software.
Los 5 principios SOLID de diseño de aplicaciones de software son:

S – Single Responsibility Principle (SRP)
O – Open/Closed Principle (OCP)
L – Liskov Substitution Principle (LSP)
I – Interface Segregation Principle (ISP)
D – Dependency Inversion Principle (DIP)
--
Crear un software eficaz: que cumpla con su cometido y que sea robusto y estable.
Escribir un código limpio y flexible ante los cambios: que se pueda modificar fácilmente según necesidad, que sea reutilizable y mantenible.
Permitir escalabilidad: que acepte ser ampliado con nuevas funcionalidades de manera ágil.

## 1. **Single Responsibility Principle (SRP) - Principio de Responsabilidad Única

### Definición:
Una clase debe tener **una sola razón** para cambiar, es decir, solo debe tener **una responsabilidad**.

### Ejemplo:

  getUserDetails() {
  }

  sendEmail() {
  }
// Aplicando SRP

class User {
  constructor(private name: string, private email: string) {}

  getUserDetails() {
    // Lógica para obtener detalles del usuario
  }
}
## 2. Open/Closed Principle (OCP) - Principio de Abierto/Cerrado
## Definición:
Las entidades de software (clases, módulos, funciones, etc.) deben estar abiertas para la extensión, pero cerradas para la modificación.

### ejemplo 

class Discount {
  getDiscount(type: string): number {
    if (type === "VIP") return 20;
    if (type === "Regular") return 10;
    return 0;
  }
}

abstract class Discount {
  abstract getDiscount(): number;
}

class VIPDiscount extends Discount {
  getDiscount(): number {
    return 20;
  }
}

class RegularDiscount extends Discount {
  getDiscount(): number {
    return 10;
  }
}

### 3. Liskov Substitution Principle (LSP) - Principio de Sustitución de Liskov
## Definición:
Los objetos de una subclase deben poder reemplazar a los objetos de la clase base sin alterar el correcto funcionamiento del programa.

## ejemplo

class Shape {
  getArea(): number {
    return 0;
  }
}

class Rectangle extends Shape {
  constructor(private width: number, private height: number) {
    super();
  }

  getArea(): number {
    return this.width * this.height;
  }
}

class Square extends Shape {
  constructor(private side: number) {
    super();
  }

  getArea(): number {
    return this.side * this.side;
  }
}

## 4. Interface Segregation Principle (ISP) - Principio de Segregación de Interfaces
### Definición:

Los clientes no deberían verse obligados a depender de interfaces que no usan. Es mejor tener varias interfaces pequeñas y especializadas que una sola interfaz grande.
### ejemplo 

interface IWorkable {
  work(): void;
}

interface IFeedable {
  eat(): void;
}

class Worker implements IWorkable, IFeedable {
  work() {
  }

  eat() {
  }
}

class Robot implements IWorkable {
  work() {
  }
}

### 5. Dependency Inversion Principle (DIP) - Principio de Inversión de Dependencias
## Definición:
Los módulos de alto nivel no deben depender de los módulos de bajo nivel. Ambos deben depender de abstracciones. Las abstracciones no deben depender de los detalles, los detalles deben depender de las abstracciones.

## ejemplo 
class LightBulb {
  turnOn() {
    console.log('La bombilla está encendida');
  }

  turnOff() {
    console.log('La bombilla está apagada');
  }
}

class Switch {
  private bulb: LightBulb;

  constructor(bulb: LightBulb) {
    this.bulb = bulb;
  }

  operate(): void {
    this.bulb.turnOn();
  }
}

// Aplicando DIP
interface Switchable {
  turnOn(): void;
  turnOff(): void;
}

class LightBulb implements Switchable {
  turnOn() {
    console.log('La bombilla está encendida');
  }

  turnOff() {
    console.log('La bombilla está apagada');
  }
}

class Switch {
  private device: Switchable;

  constructor(device: Switchable) {
    this.device = device;
  }

  operate(): void {
    this.device.turnOn();
  }
}
