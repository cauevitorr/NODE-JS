// 1° Instalar o packege.json para iniciar projeto
// 2° Criar um módulo interno com a função soma
// 3° Importar o módulo interno no arquivo index.js(aqui)
// 4º Baixar o módulo minimist
// 5º Declara as variaveis a e b no terminal -> node index.js --a=5 --b=5
// 6º Mostrar: " A soma de A + B = X"

import minimist from "minimist";
import soma from './soma.js'

const somar = soma
const args = minimist(process.argv.slice(2))

const a = args['a']
const b = args['b']

console.log(`A soma de ${a} + ${b} = ${somar(a,b)}`)
