

const techList = (array, nome) => {
    if (array.length === 0 ) {
        return `Vazio!`;
    }
  const listTech = [];
  const sortArray = array.sort();
  for (let i in sortArray) {
    listTech.push({
      tech: sortArray[i],
      name: nome,
    });
  }

  return listTech;
};
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], "Lucas"));

module.exports = techList;
