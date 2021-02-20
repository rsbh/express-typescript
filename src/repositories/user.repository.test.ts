import * as UserRepository from './user.repository'
import {getRepository} from 'typeorm'
import { mocked } from 'ts-jest/utils'
import {generateUsersData} from 'test/utils/generate'

jest.mock('typeorm', () => {
  return {
    getRepository: jest.fn().mockReturnValue({
      find: jest.fn() 
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

})