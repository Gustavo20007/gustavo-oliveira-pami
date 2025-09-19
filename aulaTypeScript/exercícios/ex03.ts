//Interfaces - são usadas para definir estrutura de objetos
interface Livro {
    titulo: string;
    autor: string;
    anoPublicado: number; 
} 

// Utilizar elas fica assim
let exibirLivros: Livro = {
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    anoPublicado: 1988
};

console.log (exibirLivros);