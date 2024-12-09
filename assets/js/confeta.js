class Person {
    constructor(_name, _surname, _location) {
        this.name = _name;
        this.surname = _surname;
        this.location = _location;
    }
}

class User extends Person {
     constructor(_age, ...Person) {
        super(...Person);
        this.age = _age;
     }

     nomeP = () => {
        return this.name;
    }
}

const eros = new User(28,"Eros","Ramazzotti","Roma");
const vasco = new User(83,"Vasco","Rossi","Firenze");
const marta = new User(77,"Marta","Franca","Svizzera");

function confrontoEta(eta1,eta2) {
    if(eta1.age > eta2.age) {
        console.log(`${eta1.nomeP()} è più grande di ${eta2.nomeP()}`);
    }
    else if (eta2.age > eta1.age) {
        console.log(`${eta1.nomeP()} è più piccolo di ${eta2.nomeP()}`);
    }
    else if (eta2.age === eta1.age) {
        console.log(`${eta1.nomeP()} è della stessa età ${eta2.nomeP()}`);
    }
}

confrontoEta(eros,vasco);
confrontoEta(marta,vasco);
