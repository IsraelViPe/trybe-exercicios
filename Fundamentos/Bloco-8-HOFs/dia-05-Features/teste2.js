const women = [
    { fullName: 'Margaret Hamilton', email: 'magarethamilton@mulheres.br' },
    { fullName: 'Larissa Machado', email: 'anitta@mulheres.com.br' },
    { fullName: 'Frida Kahlo', email: 'fdKahlo@mulheres.br' },
    { fullName: 'Ada Lovelace', email: 'adalovelace@mulheres.br' },
  ];

  const obj = (arr) => {
    return arr.reduce((acc,curr) => {
       acc[curr.fullName] = curr.email
       return acc
    } ,{})
  }

  console.log(obj(women))