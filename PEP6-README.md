PEP6-README.md

The sum of the squares of the first ten natural numbers is,

12 + 22 + ... + 102 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

PERSONAL NOTES:

This one took me a relatively short amount of time to figure out mathematically. I declared of course a counter variable (i), and two variables to track the sums/squares. I figured a while loop would be simple enough (though I'm sure a for (i=1; i<101; i++) loop would work just fine too). I had to make sure that the totals were tallying, so those formulas were put within the while loop. As I figured it'd be easiest to see one result, I used an if statement to only catch the final value (right before i = 101). From there, I simply logged to the console the totals, and subtracted the square of sums.The answer is -25,164,150