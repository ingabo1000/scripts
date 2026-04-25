function removeBMW(str){
  if(typeof str !== 'string') throw new Error('This program only works for text');

 return str.replace(/[BMWbmw]/g, ' ')
}

console.log(removeBMW('bus drivers must wear caps'));
console.log(removeBMW('bmw'))
console.log(removeBMW('Beware!! because Men men Wild wild'));
