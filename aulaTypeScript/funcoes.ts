//Função que retorna tipos 
function saudacao(nome: string): string{
    return `Olá, ${nome}!`
}

console.log(saudacao('Leandro'));

//Interface para objeto Usuario
interface Usuario {
    nome: string;
    idade: number;
    email?: string; //opcional
}

//Utilizando a interface usuário fica assim:
function exibirUsuario(usuario: Usuario):void{
    console.log(`nome: ${usuario.nome}`);
    console.log(`idade: ${usuario.idade}`);
}

exibirUsuario({ nome: 'Marcos', idade: 22})

//Exemplo de uma função que retorna arrays e tem parametros opcionais
function listarNomes(nomes:string[]): void {
    nomes.forEach(nome => console.log(nome));
}

listarNomes(['Ana', 'Bruno', 'Carlos']);