import faker from 'faker'

export function generateUsers(n: number = 1) {
  return Array.from({ length: n }, (_, i) => {
    return {
      id: i,
      firstName:  faker.name.firstName(),
      lastName:  faker.name.lastName(),
      email: faker.internet.email(),
      posts: [],
      comments: [],
      createdAt: new Date(),
      updatedAt: new Date()
    }
  });
}