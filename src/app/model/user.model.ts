export class User {
    id: number
    nome: string;
    email: string;

    constructor(user: Partial<User>) {
        Object.assign(this, user);
    }
}