function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
}

const message= {
    terms: ['Dear','Honey', 'Buttercup', 'Love', 'My Love', 'Boo', 'Sunshine', 'Lovely', 'Babe', 'Bae'],

    ritual: ['Meditate', 'Make your bed', 'Take a Shower', 'Set some intentions',
'Play Music', 'Drink Hot Lemon Water', 'Picture Success', 'Be Grateful', 'Love yourself', 
'Enjoy Your Coffee', 'Treat yourself', 'Appreciate Nature'],
// source https://brightdrops.com/daily-inspirational-quotes

    quote: [`Don't let yesterday take up too much of today.`, 
`The best way to predict the future is to create it.`,
`You always pass failure on your way to success.`, 
`If you want to succeed, focus on changing yourself not Others.`,
`Focus on your goals, don't look in any other direction but ahead.`,
`Make each day your masterpiece.`, 
'Someday is not a day of the week.',
`It's time to start living the life you've imagined.`,
`It's never too late to be what you might have been.`,
`Life is what we make it, Always has been, Always will be.`,
`Happiness is not something ready made, It comes from your own actions.`]
}

// 
const inspireMe= [];

for ( let msg in message) {
    let select = generateRandomNumber(message[msg].length);

    switch(msg) {
        case 'terms':
          inspireMe.push(`Good morning, ${message[msg][select]}!`)
          break
        case 'ritual':
          inspireMe.push(`Go ahead: "${message[msg][select]}".`)
          break
        case 'quote':
          inspireMe.push(`Your Daily dose of Inspiration: "${message[msg][select]}"`)
          break
        default:
          inspireMe.push('Just Do It!')
}
}
function formatting() {
    console.log(' ');
    console.log('======================');
    console.log(inspireMe[0]);
    console.log('======================');
    console.log(' ');
    console.log(inspireMe[1]);
    console.log(' ');
    console.log (`<<<<<<====================================================================>>>>>>`)
    console.log(' ');
    console.log(inspireMe[2]);  
    console.log(' ');
    console.log (`<<<<<<====================================================================>>>>>>`)
    console.log(' ');
    
} 
formatting();
