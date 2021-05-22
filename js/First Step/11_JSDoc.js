/**
 * This function returns an integer and it generates a random integer
 * when min and max values are provided
 *
 * @param min
 * @param max
 * @returns {number}
 */
let random = (min, max) => {
    if (!Number.isInteger(min) || !Number.isInteger(max)){
        document.write('Please provide an integer.');
        stop();
    }
    return Math.round(Math.random(min) * max);
};

document.write(random(1,11));