// Fahrenheit to Celsius
// [23, 140, 212, 41] => [-5, 60, 100, 5]
// (32°F - 32) x 5/9 = 0°C

//const fahrenheit = [23, 140, 212, 41]
function getCelsius(fahrenheit)
{
//  return fahrenheit.map(temp => (temp - 32) * 5.9)         **will fail test
    return fahrenheit.map(temp => (temp - 32) * 5/9)
}

