type LCDPattern = [string, string, string];
type LCDPatterns = { [key: string]: LCDPattern };


class LCDNumberDisplay {
    private static readonly LCD_PATTERNS: LCDPatterns = {
        '0': [" _ ", "| |", "|_|"],
        '1': ["   ", "  |", "  |"],
        '2': [" _ ", " _|", "|_ "],
        '3': [" _ ", " _|", " _|"],
        '4': ["   ", "|_|", "  |"],
        '5': [" _ ", "|_ ", " _|"],
        '6': [" _ ", "|_ ", "|_|"],
        '7': [" _ ", "  |", "  |"],
        '8': [" _ ", "|_|", "|_|"],
        '9': [" _ ", "|_|", " _|"]
    };

    /**
     * Converts a number to its LCD display representation
     * @param number - The number to convert
     * @returns A string containing the LCD representation of the number
     * @throws Error if the input contains non-digit characters
     */
    public static numberToLCD(number: number | string): string {
        const numStr = number.toString();
        
        // Initialize the result array with three empty strings
        const result: string[] = ["", "", ""];
        
        // Process each digit
        for (const digit of numStr) {
            // Validate the digit
            if (!/^\d$/.test(digit)) {
                throw new Error(`Invalid character: ${digit}`);
            }
            
            // Get the pattern for this digit
            const pattern = this.LCD_PATTERNS[digit];
            
            // Add each line of the pattern to the corresponding result line
            for (let i = 0; i < 3; i++) {
                result[i] += pattern[i] + " ";
            }
        }
        
        // Join the lines with newlines
        return result.join("\n");
    }

    public static printExamples(): void {
        const testNumbers = [0, 123, 456, 789];
        
        testNumbers.forEach(num => {
            console.log(`\nLCD display for ${num}:`);
            console.log(this.numberToLCD(num));
            console.log("-".repeat(20));
        });
    }
}

// Example usage
try {
    console.log(LCDNumberDisplay.numberToLCD(123));
} catch (error) {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    }
}

// Run examples
LCDNumberDisplay.printExamples();

export default LCDNumberDisplay;