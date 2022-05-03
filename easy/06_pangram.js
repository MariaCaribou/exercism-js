// Determine if a sentence is a pangram. A pangram (Greek: παν γράμμα, pan gramma, "every letter") is a sentence using every letter of the alphabet at least once. The best known English pangram is:
// The quick brown fox jumps over the lazy dog.
// The alphabet used consists of ASCII letters a to z, inclusive, and is case insensitive. Input will not contain non-ASCII symbols.


function pangram(sentence)
{
    sentence = sentence.toLowerCase();
    const letters = new Map ([
        ["a", false],
        ["b", false],
        ["c", false],
        ["d", false],
        ["e", false],
        ["f", false],
        ["g", false],
        ["h", false],
        ["i", false],
        ["j", false],
        ["k", false],
        ["l", false],
        ["m", false],
        ["n", false],
        ["o", false],
        ["p", false],
        ["q", false],
        ["r", false],
        ["s", false],
        ["t", false],
        ["u", false],
        ["v", false],
        ["w", false],
        ["x", false],
        ["y", false],
        ["z", false]
    ]);
    
    for (let i = 0; i < sentence.length; i++)
    {
        if (letters.has(sentence[i]))
        {
            letters.set(sentence[i], true);
        }
    }
    
    let result = true;
    for (const value of letters.values()) 
    {
        if (!value)
        {
            result = false;
            break;
        }
    }
    return result; 
}
//Otra manera de hacer este for sería:

    //let result = true;
    //for (const value of letters.values()) 
    // {
    //     result = result && value;
    // }
    // return result;
    //El && multiplica el resultado que está en true por cada uno de los valores del mapa y si en alguno da false para el bucle.

var sentence = "the quick brown fox jumps over the lazy dog";
console.log(pangram(sentence) ? sentence + " is a pangram" : sentence + " is not a pangram");

