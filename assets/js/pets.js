class Pets {
    constructor(_petsName,_owenerName,_species,_breed) {
        this.petsName = _petsName;
        this.owenerName = _owenerName;
        this.species = _species;
        this.breed = _breed; 
    }
    insertPet = function() {
        const arrayData = [this.petsName,this.owenerName,this.species,this.breed];
        const tableData = document.getElementById("addList"); 
        const rowTable = document.createElement("tr");
        const colTable = document.createElement("th");
        const formData = document.getElementById("data");
        const lengthData = arrayData.length;
        tableData.append(rowTable);
        for(let i = 0; i < lengthData; i++) {
            
                const data = document.createElement("td");
                data.innerText = arrayData[i];
                tableData.append(data);
            
            
        }
 }   
}  


document.getElementById("btn-start").addEventListener("click",(e) => {
    e.preventDefault();
    const namePets = document.getElementById("animalName").value;
    const owenerName = document.getElementById("owenerName").value;
    const speciesAnimal = document.getElementById("speciesAnimal").value;
    const breedAnimal = document.getElementById("breedAnimal").value;
    const newPets = new Pets(namePets,owenerName,speciesAnimal,breedAnimal);
    newPets.insertPet();
    namePets.value = '';
    owenerName.value = '';
    speciesAnimal.value = '';
    breedAnimal.value = '';
});

//Creatro classe PETS Possiamo creare le funzioni che inseriscono 
//Le proprietà dell'animale

//const formData = document.getElementById("data");
//console.log(formData.childElementCount);