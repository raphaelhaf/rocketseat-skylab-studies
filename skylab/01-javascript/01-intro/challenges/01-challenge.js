var address = {
  street: "Pine street",
  number: 1293,
  neighborhood: "Downtown",
  city: "São Paulo",
  state: "SP"
}

function parseAddress(){
  return `The user lives in ${address.city}/${address.state}, 
  at ${address.neighborhood} neighborhood, in the ${address.street} street 
  at the ${address.number} number`;
}

console.log(parseAddress());