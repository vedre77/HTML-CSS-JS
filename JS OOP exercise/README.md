# Javascript OOP exercise: Restaurant.

Basic reminders:

Objects are mutable by default (as arrays).

DESTRUCTURING; variable names must equal property names in objects (do not need to be ordered);
Arrays - names are not important, but the order is! Rest is an array.
Rest parameter (operator): ...rest.

Factory functions.

Classes ES5 - blueprints for Objects. Class, constructor. Factory - properties are visible, 
classes - props are somehow hidden.
Keyword this; this === WINDOW if there is no context (in practice, that's broken). 
Helper function is useStrictMode().

RULES: 
1. When we call the function in a func. style, this === WINDOW object.
2. Method style (laura.greet();) - this is bound to the owner object (now it's laura).
pete.hi = greet(); => that's a functional style of calling!!! ----------------------

Call & Apply - rarely used; greet.apply(isa) -> explicit providing for the keyword THIS.
greet.call(name) -> difference is the setup of arguments.
Prototype chain:
obj.___proto___ -> accessing the prototype.

Inheritance
peter___proto___ = human; assigning human as the prototype; Object - master object.

Classes and inheritance:
class _ extends -> inherit from the Parent class
super() - references the method from the parent
new -> creates new instance of the class.

3 main concepts of functional programming:

1. Pure functions (same input and output) -
consistent result. They are very easy to test. 
2. Funcs are 1st class citizens (return func
from a func or pass func to func). Callback functions -> function is the argument.
3. Higher order functions.
map / filter / reduce / find.