// (OBRIGATÓRIO) Faça um programa que receba uma palavra e verifica se a palavra
// está cometendo o seguinte erro de português
// Antes de “p” ou “b” devemos usar M
// Caso a palavra esteja errada informar o erro
// Se não dizer que a palavra está certa.
// Utilize o método includes()

let rs = require('readline-sync')

let palavra = rs.question (' Insira uma palavra: ')

if (palavra.includes('np') || palavra.includes('nb')){
    console.log('Está errado')
}else{
    console.log('Está Certo')
}