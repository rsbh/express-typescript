import UserController from './user.controller'
import * as UserRepository from '../repositories/user.repository'

describe("UserController", () => {
  describe("getUsers", () => {
    test("should return empty array", async () => {
      const spy = jest.spyOn(UserRepository, 'getUsers').mockImplementation(async () => [])
      const controller = new UserController();
      const users = await controller.getUsers();
      expect(users).toEqual([])
      expect(spy).toHaveBeenCalledTimes(1)
      spy.mockRestore();
    })
  })
})
