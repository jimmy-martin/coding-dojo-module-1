import { fizzBuzz } from "./fizzbuzz";

describe('FizzBuzz', () => {
    test('should return 1 when 1 as input',() => {
        // Arrange // les données de départ
        const inputNumber = 1;

        const expected = 1;
        // Act // on effectue une mutation
        const result = fizzBuzz(inputNumber);
        // Assert // on test le resultat
        expect(result).toBe(expected);
    })

    test('should return 2 when 2 as input', () => {
        // Arrange
        const inputNumber = 2;

        const expected = 2;
        // Act
        const result = fizzBuzz(inputNumber);
        // Assert
        expect(result).toBe(expected);
    })

    test('should return Fizz when 3 as input', () => {
        // Arrange
        const inputNumber = 3;

        const expected = 'Fizz';
        // Act
        const result = fizzBuzz(inputNumber);
        // Assert
        expect(result).toBe(expected);
    })

    test('should return 4 when 4 as input', () => {
        // Arrange
        const inputNumber = 4;

        const expected = 4;
        // Act
        const result = fizzBuzz(inputNumber);
        // Assert
        expect(result).toBe(expected);
    })

    test('should return Buzz when 5 as input', () => {
        // Arrange
        const inputNumber = 5;

        const expected = 'Buzz';
        // Act
        const result = fizzBuzz(inputNumber);
        // Assert
        expect(result).toBe(expected);
    })

    test('should return Fizz when input 12, a multiple of 3', () => {
        // Arrange
        const inputNumber = 12;

        const expected = 'Fizz';
        // Act
        const result = fizzBuzz(inputNumber);
        // Assert
        expect(result).toBe(expected);
    })

    test('should return Buzz when input 25, a multiple of 5', () => {
        // Arrange
        const inputNumber = 25;

        const expected = 'Buzz';
        // Act
        const result = fizzBuzz(inputNumber);
        // Assert
        expect(result).toBe(expected);
    })

    test('should return FizzBuzz when input 15, a multiple of 3 and 5', () => {
        // Arrange
        const inputNumber = 15;

        const expected = 'FizzBuzz';
        // Act
        const result = fizzBuzz(inputNumber);
        // Assert
        expect(result).toBe(expected);
    })
})
