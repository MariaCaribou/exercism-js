// Determine if a word or phrase is an isogram.
// An isogram (also known as a "nonpattern word") is a word or phrase without a repeating letter, however spaces and hyphens are allowed to appear multiple times.
// Examples of isograms:
// lumberjacks
// background
// downstream
// six-year-old
// The word isograms, however, is not an isogram, because the s repeats.

const letters = new Map ([
    ["a", 0],
    ["b", 0],
    ["c", 0],
    ["d", 0],
    ["e", 0],
    ["f", 0],
    ["g", 0],
    ["h", 0],
    ["i", 0],
    ["j", 0],
    ["k", 0],
    ["l", 0],
    ["m", 0],
    ["n", 0],
    ["o", 0],
    ["p", 0],
    ["q", 0],
    ["r", 0],
    ["s", 0],
    ["t", 0],
    ["u", 0],
    ["v", 0],
    ["w", 0],
    ["x", 0],
    ["y", 0],
    ["z", 0]
]);
    
    function isIsogram(word)
    {
        word = word.toLowerCase();
        let result = "";
        
        for (let i = 0; i < word.length; i++)
        {
            let currentLetter = word[i];
            if (letters.has(currentLetter))
            {
                letters.set(currentLetter, letters.get(currentLetter) + 1);
            }
        }
        for (const value of letters.values()) 
        {
            if (value <= 1)
            {
                result = word + " is an isogram";
            }
            else
            {
                result = word + " is not an isogram";
            }
        }
        return result;
    }

console.log(isIsogram("Lumberjacks"));