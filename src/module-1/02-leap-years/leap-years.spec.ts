import { isLeap } from "./leap-year";

describe('LeapYear', () => {
    test('isLeap should returns false when year is 2001', () => {
        // Arrange
        const inputYear = 2001;

        const expected = false;
        // Act

        const result = isLeap(inputYear);

        // Assert
        expect(result).toBe(expected)
    })

    test('isLeap should returns true when year is 1996', () => {
        // Arrange
        const inputYear = 1996;

        const expected = true;
        // Act

        const result = isLeap(inputYear);

        // Assert
        expect(result).toBe(expected)
    })

    test('isLeap should returns false when year is 1900', () => {
        // Arrange
        const inputYear = 1900;

        const expected = false;
        // Act

        const result = isLeap(inputYear);

        // Assert
        expect(result).toBe(expected)
    })

    test('isLeap should returns true when year is 2000', () => {
        // Arrange
        const inputYear = 2000;

        const expected = true;
        // Act

        const result = isLeap(inputYear);

        // Assert
        expect(result).toBe(expected)
    })

    test('isLeap should returns false when year is 2300', () => {
        // Arrange
        const inputYear = 2300;

        const expected = false;
        // Act

        const result = isLeap(inputYear);

        // Assert
        expect(result).toBe(expected)
    })
})
