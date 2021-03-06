//Given a moment, determine the moment that would be after a gigasecond has passed.
//A gigasecond is 10^9 (1,000,000,000) seconds.

function gigasecond(date)
{
    return new Date(date.getSeconds() + Math.pow(10, 9));
}

console.log(gigasecond(new Date()));