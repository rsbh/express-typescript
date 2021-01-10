import UserController from './user.controller'
import * as UserRepository from '../repositories/user.repository'
import {generateUsers} from 'test/utils/generate'

afterEach(() => {
  jest.resetAllMocks()
})

describe("UserController", () => {
  describe("getUsers", () => {
    test("should return empty array", async () => {
      const spy = jest.spyOn(UserRepository, 'getUsers').mockResolvedValueOnce([])
      const controller = new UserController();
      const users = await controller.getUsers();
      expect(users).toEqual([])
      expect(spy).toHaveBeenCalledTimes(1)
    })

    test("should return user list", async () => {
      const usersList = generateUsers(2)
      const spy = jest.spyOn(UserRepository, 'getUsers').mockResolvedValueOnce(usersList)
      const controller = new UserController();
      const users = await controller.getUsers();
      expect(users).toEqual(usersList)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})
