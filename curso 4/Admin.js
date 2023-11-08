import User from "./User.js";

export default class Admin extends User {
    constructor(name, email, birth, role = 'Admin', active = true){
        super(name, email, birth, role, active)
    }

    showInfos(){
        return `Nome: ${this.name}, E-mail: ${this.email}, Cargo: ${this.role}.`
    }

    createClass(nameOfClass, vacancies){
        return `Curso de ${nameOfClass} criado com ${vacancies} vagas.`
    }
}