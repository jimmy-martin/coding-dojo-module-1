const isMultipleOf400 = (inputYear :number) => {
    const MULTIPLE_OF_400 = 400;
    return (inputYear % MULTIPLE_OF_400) === 0;
}

const isMultipleOf4 = (inputYear :number) => {
    const MULTIPLE_OF_4 = 4;
    return (inputYear % MULTIPLE_OF_4) === 0;
}

const isMultipleOf100 = (inputYear :number) => {
    const MULTIPLE_OF_100 = 100;
    return (inputYear % MULTIPLE_OF_100) === 0;
}

const isMultipleOf4ButNot100 = (inputYear :number) => {
    return isMultipleOf4(inputYear) && !isMultipleOf100(inputYear);
}

export function isLeap(inputYear :number) : boolean {
    if(isMultipleOf400(inputYear) || isMultipleOf4ButNot100(inputYear)){
        return true
    }

    return false;
}

