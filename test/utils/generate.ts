import faker from 'faker'

export function generateUserData(overide = {}) {
  return {
    id: faker.random.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    posts: [],
    comments: [],
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overide
  }
}

export function generateUsersData(n: number = 1) {
  return Array.from({
    length: n
  }, (_, i) => {
    return generateUserData({id: i})
  });
}

export function generateUserPayload() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }
}