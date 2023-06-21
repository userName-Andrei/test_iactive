const stringCutter = (string: string, simbolNum: number): string => {
    if (string.length < simbolNum) return string;

    const arr = string.slice(0, simbolNum).split(" ");
    const length = arr.length;

    return arr.slice(0, length - 2).join(" ");
};

export default stringCutter;
