// import { sum, sub } from './functions';

// importing a function declared as default allow us to rename de function 
import mySum from './sum';

// to use the same rename function in the other way we can use
import {sum as sumFunction} from './functions'

// we can import a default function and a non default function
import sub, { sum } from './functions';

// we can import all function in a single object
import * as funcs from './functions';
console.log(funcs.sum(1,2));

console.log(mySum(1,2));