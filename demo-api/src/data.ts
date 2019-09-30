import * as faker from 'faker';

const policy = (agents: Array<any>) => {
  return {
    id: faker.random.uuid(),
    name: faker.commerce.productName() + " Policy",
    description: faker.lorem.paragraph(),
    premium: faker.commerce.price(),
    agentId: faker.random.arrayElement(agents.map( agent => agent.id))
  }

}

const agent = () => {
  return {
    id: faker.random.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    region: faker.address.county()
  }
}

export const generateData = (quantity) => {

  let data = {
    policies: [],
    agents: []
  };

  for(let i = 0; i < quantity; i++) {
    data.agents.push(agent())
  }
  for(let i=0; i<quantity; i++) {
    data.policies.push(policy(data.agents))
  }

  return data;
}


