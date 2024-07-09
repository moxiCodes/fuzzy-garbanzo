//Implicit Const syntax

export const addTwoNumbersConstImplicit = (num1: number, num2: number) =>
  num1 + num2;

export const addTwoNumbersConstImplicitVerbose = (
  num1: number,
  num2: number
) => {
  return num1 + num2;
};

//Explicit Const syntax

export const addTwoNumbersConstExplicit = (
  num1: number,
  num2: number
): number => num1 + num2;

export const addTwoNumbersConstExplicitVerbose = (
  num1: number,
  num2: number
): number => {
  return num1 + num2;
};

//Implicit function syntax

export function addTwoNumbersFuncImplicit(num1: number, num2: number) {
  return num1 + num2;
}

//Explicit function syntax

export function addTwoNumbersFuncExplicit(num1: number, num2: number): number {
  return num1 + num2;
}
