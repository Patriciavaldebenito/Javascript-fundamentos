console.log('a')
// setTimeout(console.log('b'),2000) //probar como se ejecuta inmediatamente
setTimeout( ()=>  {console.log('b'),2000})
// setTimeout( ()=>  {console.log('b'),2000})  // probar con 0 segundos
console.log('c')


