export default class User {
    //A # é utilizada para privar alguns atributos da classe, evitando que outras partes do código tenham acesso e alterem informações de atributos.
    #name
    #email
    #birth
    #role
    #active
    constructor(name, email, birth, role, active = true){
        this.#name = name
        this.#email = email
        this.#birth = birth
        this.#role = role || 'student'
        this.#active = active
    }

    //Get é utilizado para acessar uma informação da classe, podendo ser privada ou não. Apesar de ser uma função get pe tratado como uma propriedade, quando get for instanciado, não é necessário a ultilização do '()'.
    get name(){
        return this.#name
    }

    get email(){
        return this.#email
    }

    get birth(){
        return this.#birth
    }

    get role(){
        return this.#role
    }

    get active(){
        return this.#active
    }

    //Set é utilizado para fazer alterações em propiedades privadas e também para fazer validações antes das alterações.
    set name(newName){
        if(newName === ''){
            throw Error ('Formato não válido')
        }
        this.#name = newName
    }

    showInfos(){
        return `Nome: ${this.name}, E-mail: ${this.email}, Data de Nacsimento: ${this.birth}, Cargo: ${this.role}, Ativo: ${this.active}`
    }
}