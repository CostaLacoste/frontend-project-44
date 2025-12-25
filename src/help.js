export const isEven = (num) => {
    if (num % 2 === 0) {
        return true;
    }

    return false;
};

export const genNum = () => {
    return Math.floor(Math.random()* 101)
};