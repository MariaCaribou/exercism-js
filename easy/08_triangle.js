// Determine if a triangle is equilateral, isosceles, or scalene.
// An equilateral triangle has all three sides the same length.
// An isosceles triangle has at least two sides the same length. (It is sometimes specified as having exactly two sides the same length, but for the purposes of this exercise we'll say at least two.)
// A scalene triangle has all sides of different lengths.
// Note
// For a shape to be a triangle at all, all sides have to be of length > 0, and the sum of the lengths of any two sides must be greater than or equal to the length of the third side. See Triangle Inequality.
// Dig Deeper
// The case where the sum of the lengths of two sides equals that of the third is known as a degenerate triangle - it has zero area and looks like a single line. Feel free to add your own code/tests to check for degenerate triangles.

function triangleInequality(side1, side2, side3)
{
    if (side1 <= 0 || side2 <= 0 || side3 <= 0)
    {
        return false;
    }
    
    let sum = side1 + side2;
    if (sum < side3)
    {
        return false;
    }
    return "It's a triangle";
}

function whatTypeOfTriangle(side1, side2, side3)
{
    let result = "";

    if (side1 == side2 && side1 == side3)
    {
        result = "It's equilateral";
    }
    else if  (side1 == side2 && side1 != side3 || side2 == side3 && side2 != side1 || side3 == side1 && side3 != side2)
    {
        result = "It's isosceles";
    }
    else if (side1 != side2 && side1 != side3 && side2 != side3)
    {
        result = "it's scalene";
    }
    return result;
}

function isDegeneratedTriangle(side1, side2, side3)
{
    let sum1 = side1 + side2;
    let sum2 = side2 + side3;
    let sum3 = side1 + side3;
    let result = "It's not degenerated";

    if (sum1 == side3 || sum2 == side1 || sum3 == side2)
    {
        result = "It,s a degenerated triangle";
    }
    return result;
}

console.log(triangleInequality(35, 16, 51));
console.log(whatTypeOfTriangle(35, 16, 51));
console.log(isDegeneratedTriangle(35, 16, 51));