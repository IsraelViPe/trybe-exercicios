// const incrementaObjeto = (obj,chave,valor) => {
//     obj[chave] = valor
//     return obj 
// }

// const pessoas = {
//     nome:"israel",
//     idade: 33,
//     escolariade: 'superior incompleto',
// }

// console.log(incrementaObjeto(pessoas,"Mãe","Maria Angela Souza Pereira"));
// console.log(incrementaObjeto(pessoas,"Pai","Edmar Dias Pereira"));
// console.log(pessoas)

// const coolestTvShow = {
//     name: "BoJack Horseman",
//     genre: "adult animation",
//     createdBy: "Raphael Bob-Waksberg",
//     favoriteCharacter: "Princess Carolyn",
//     quote: "Princess Carolyn always lands on her feet.",
//     seasons: 6,
//   };

//   for (let i in coolestTvShow) {
//     console.log(i)
//   }
//   console.log(Object.keys(coolestTvShow));
  
//   const student1 = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkills: 'Ótimo',
//   };
  
//   const student2 = {
//     Html: 'Bom',
//     Css: 'Ótimo',
//     JavaScript: 'Ruim',
//     SoftSkills: 'Ótimo',
//     Git: 'Bom', // chave adicionada
//   };

//   const student = obj => {
//     const arrayKeys = Object.keys(obj)
//     for (i in arrayKeys){
//         console.log(`${i} ${arrayKeys[i]} Nível: ${obj[arrayKeys[i]]}`);

//     }
   
//   }
// student (student2);

// const student = {
//     Html: 'Muito Bom',
//     Css: 'Bom',
//     JavaScript: 'Ótimo',
//     SoftSkill: 'Ótimo',
//   };
  
//   const listSkillsValuesWithFor = (student) => {
//     const skills = [];
//     for(skill in student) {
//       skills.push(student[skill]);
//     }
  
//     return skills;
//   };
//   console.log(listSkillsValuesWithFor(student))
  
//   const listSkillsValuesWithValues = (student) => Object.values(student);
  
  // Sem Object.values
//   console.log(listSkillsValuesWithFor(student));
  
  // Com Object.values
//   console.log(listSkillsValuesWithValues(student));

// const países = {
//     França: 'Paris',
//     Brasil: 'Brasília',
//     Espanha: 'Madrid',
//     Portugal: 'Lisboa',
//   };
//   const pairKeyValue = Object.entries(países);
//   console.log(pairKeyValue);

//   for(index in pairKeyValue) {
//     console.log('--------');
//     console.log('País:', pairKeyValue[index][0]);
//     console.log('Capital:', pairKeyValue[index][1]);
//     console.log('--------');
//     console.log(index,pairKeyValue[index]);
//   };


// const person = {
//     name:'Roberto',
//   };
  
//   const lastName = {
//     lastName: 'Silva',
//   };
  
//   const newPerson = Object.assign({},person,lastName);
//   newPerson.name = 'Gilberto';
//   console.log(newPerson);
//   console.log(person);

const objQualquer = {
  chave: "valor",
  chave2: "valor2",
}
const variavel = "chave"


console.log(objQualquer.chave)