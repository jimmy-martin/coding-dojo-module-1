export function isLeap(input :number) : boolean {
    if((input % 400) == 0){
        return true
    }
    if((input % 4) == 0 && (input % 100) != 0){
        return true;
    }

    return false;
}

