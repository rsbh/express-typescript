import faker from 'faker'
import { User, Post } from '../../src/models';

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
    return generateUserData()
  });
}

export function generateUserPayload() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
  }
}

export function generatePostData(overide = {}) {
  return {
    id: faker.random.number(),
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    userId: faker.random.number(),
    comments: [],
    user: new User(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overide
  }
}

export function generatePostsData(n: number = 1, overide = {}) {
  return Array.from({
    length: n
  }, (_, i) => {
    return generatePostData(overide)
  });
}

export function generatePostPayload() {
  return {
    title: faker.lorem.sentence(),
    content: faker.lorem.paragraph(),
    userId: faker.random.number(),
  }
}

export function generateCommentData(overide = {}) {
  return {
    id: faker.random.number(),
    content: faker.lorem.paragraph(),
    userId: faker.random.number(),
    user: new User(),
    postId: faker.random.number(),
    post: new Post(),
    createdAt: new Date(),
    updatedAt: new Date(),
    ...overide
  }
}

export function generateCommentsData(n: number = 1, overide = {}) {
  return Array.from({
    length: n
  }, (_, i) => {
    return generateCommentData(overide)
  });
}


export function generateCommentPayload() {
  return {
    content: faker.lorem.paragraph(),
    userId: faker.random.number(),
    postId: faker.random.number(),
  }
}