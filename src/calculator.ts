export class Calculator {

    add(input: string): number {

        // if there empty string return first test case
        if (input === '') return 0;

        //common delimeters used
        let delimiter = /,|\n/;

        //specific delimiter
        if (input.startsWith('//')) {
            const delimiterEnd = input.indexOf('\n');
            delimiter = new RegExp(input.substring(2, delimiterEnd));

            input = input.substring(delimiterEnd + 1);
        }

        //extracting the numbers from string to do addition
        const numbers = input.split(delimiter).map(Number);

        //extracting the negative numbers from string to throw error with negative numbers
        const negatives = numbers.filter(n => n < 0);

        if (negatives.length > 0) {
            throw new Error(`negative numbers not allowed: ${negatives.join(', ')}`);
        }

        //if all goes well then return the sum
        return numbers.reduce((sum, num) => sum + num, 0);
    }

}