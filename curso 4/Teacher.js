import User from './User.js';

export default class Teacher extends User {
    constructor(name, email, birth, role = 'Teacher', active = true){
        super(name, email, birth, role, active)
    }

    approveStudent(student, nameOfClass){
        return `estudante ${student} aprovado(a) no curso ${nameOfClass}.`
    }
}