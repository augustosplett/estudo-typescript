interface Usuario {
    nome: string;
    email: string;
    adress?: string;
}
function getUser(): Usuario{
    return {
        nome: 'Augusto',
        email: 'meu email'
    }
}