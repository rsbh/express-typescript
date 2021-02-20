import * as UserRepository from './user.repository'
import {getRepository} from 'typeorm'
import { mocked } from 'ts-jest/utils'
import {generateUsersData, generateUserPayload, generateUserData} from 'test/utils/generate'

jest.mock('typeorm', () => {
  return {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn(),
      save: jest.fn()
    }),
    PrimaryGeneratedColumn: jest.fn(),
    Column: jest.fn(),
    Entity: jest.fn(),
    ManyToOne: jest.fn(),
    OneToMany: jest.fn(),
    JoinColumn: jest.fn(),
    CreateDateColumn: jest.fn(),
    UpdateDateColumn: jest.fn()
}});

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}))
beforeEach(() => {
  mockedGetRepo.find.mockClear()
})

describe("UserRepository", () => {
  describe("getUsers", () => {
    test('should return empty array', async () => {
      mockedGetRepo.find.mockResolvedValue([])
      const users = await UserRepository.getUsers();
      expect(users).toEqual([])
      expect(mockedGetRepo.find).toHaveBeenCalledWith()
      expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
    })

    test("should return user list", async () => {
      const usersData = generateUsersData(2)
      mockedGetRepo.find.mockResolvedValue(usersData)
      const users = await UserRepository.getUsers();
      expect(users).toEqual(usersData)
      expect(mockedGetRepo.find).toHaveBeenCalledWith()
      expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
    })
  })

  describe("addUser", () => {
    test("should add user to the database", async () => {
      const payload = generateUserPayload()
      const userData = generateUserData(payload)
      mockedGetRepo.save.mockResolvedValue(userData)
      const user = await UserRepository.createUser(payload);
      expect(user).toMatchObject(payload)
      expect(user).toEqual(userData)
      expect(mockedGetRepo.save).toHaveBeenCalledWith(payload)
      expect(mockedGetRepo.save).toHaveBeenCalledTimes(1)
    })
  })

})