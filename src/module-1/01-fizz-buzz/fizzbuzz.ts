const isMultiple = (inputNumber :number, multipleNumber :number) => {
    return (inputNumber % multipleNumber) === 0;
}

const isMultipleOf3 = (inputNumber :number) => {
    const MULTIPLE_OF_3 = 3;
    return isMultiple(inputNumber, MULTIPLE_OF_3);
}

const isMultipleOf5 = (inputNumber :number) => {
    const MULTIPLE_OF_5 = 5;
    return isMultiple(inputNumber, MULTIPLE_OF_5);
}

export function fizzBuzz(input: number) : number | string {

    if(isMultipleOf3(input) && isMultipleOf5(input)){
        return 'FizzBuzz';
    }

    if(isMultipleOf3(input)){
        return 'Fizz';
    }

    if(isMultipleOf5(input)){
        return 'Buzz';
    }

    return input;
}
 