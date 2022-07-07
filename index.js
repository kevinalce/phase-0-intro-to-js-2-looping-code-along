// Code your solutions in this file
const CardNames = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cardNames){
  for (let i = 0; i < cardNames.length; i++){
    console.log(`Thank you, ${cardNames}, for the wonderful surprise gift!`)
  }
  return cardNames;
}
writeCards(cardNames)