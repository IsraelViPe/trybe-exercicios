const order = {
  name: "Rafael Andrade",
  phoneNumber: "11-98763-1416",
  address: {
    street: "Rua das Flores",
    number: "389",
    apartment: "701",
  },
  order: {
    pizza: {
      marguerita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      },
    },
    drinks: {
      coke: {
        type: "Coca-Cola Zero",
        price: 10,
        amount: 1,
      },
    },
    delivery: {
      deliveryPerson: "Ana Silveira",
      price: 5,
    },
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  console.log(
    `Olá ${Object.values(order.order.delivery)[0]}, entrega para ${
      order.name
    } , Telefone: ${order.phoneNumber}  ${order.address.street} Nº ${
      order.address.number
    } AP:${order.address.apartment}.`
  );
};

customerInfo(order);

const orderModifier = (order) => {
  console.log(
    `Olá ${(order.order.delivery.deliveryPerson =
      "Luiz Silva")}, o total do seu pedido de ${Object.keys(
      order.order.pizza
    )} e ${Object.keys(
      order.order.drinks
    )} zero, é ${(order.payment.total = 50)}.`
  );
};

orderModifier(order);

// console.log(order.order.delivery.deliveryPerson)

//   Complete a função customerInfo() para que seu retorno seja similar a "Olá Ana Silveira, entrega para: Rafael Andrade, Telefone: 11-98763-1416, R. Rua das Flores, Nº: 389, AP: 701".
// Note que o parâmetro da função já está sendo passado na chamada da função.
// Complete a função orderModifier() para que seu retorno seja similar a "Olá Luiz Silva, o total do seu pedido de marguerita, pepperoni e Coca-Cola Zero é R$ 50,00."
// Modifique o nome da pessoa compradora.
// Modifique o valor total da compra para R$ 50,00.
