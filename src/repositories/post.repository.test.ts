import * as PostRepository from './post.repository'
import {getRepository} from 'typeorm'
import { mocked } from 'ts-jest/utils'
import {generatePostsData, generatePostPayload, generatePostData} from 'test/utils/generate'

jest.mock('typeorm');

const mockedGetRepo = mocked(getRepository(<jest.Mock>{}))
beforeEach(() => {
  mockedGetRepo.find.mockClear()
  mockedGetRepo.findOne.mockClear()
  mockedGetRepo.save.mockClear()
})

describe("PostRepository", () => {
  describe("getPosts", () => {
    test("should return empty array", async () => {
      mockedGetRepo.find.mockResolvedValue([])
      const posts = await PostRepository.getPosts();
      expect(posts).toEqual([])
      expect(mockedGetRepo.find).toHaveBeenCalledWith()
      expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
    })

    test("should return posts list", async () => {
      const postsData = generatePostsData(2)
      mockedGetRepo.find.mockResolvedValue(postsData)
      const posts = await PostRepository.getPosts();
      expect(posts).toEqual(postsData)
      expect(mockedGetRepo.find).toHaveBeenCalledWith()
      expect(mockedGetRepo.find).toHaveBeenCalledTimes(1)
    })
  })

  describe("createPost", () => {
    test("should add post to the database", async () => {
      const payload = generatePostPayload()
      const postData = generatePostData(payload)
      mockedGetRepo.save.mockResolvedValue(postData)
      const post = await PostRepository.createPost(payload);
      expect(post).toMatchObject(payload)
      expect(post).toEqual(postData)
      expect(mockedGetRepo.save).toHaveBeenCalledWith(payload)
      expect(mockedGetRepo.save).toHaveBeenCalledTimes(1)
    })
  })

  describe("getPost", () => {
    test("should return post from the database", async () => {
      const id = 1
      const postData = generatePostData({id})
      mockedGetRepo.findOne.mockResolvedValue(postData)
      const post = await PostRepository.getPost(id);
      expect(post).toEqual(postData)
      expect(post?.id).toBe(id)
      expect(mockedGetRepo.findOne).toHaveBeenCalledWith({id})
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1)
    })

    test("should return null if post not found", async () => {
      const id = 1
      mockedGetRepo.findOne.mockResolvedValue(null)
      const post = await PostRepository.getPost(id);
      expect(post).toBeNull()
      expect(mockedGetRepo.findOne).toHaveBeenCalledWith({id})
      expect(mockedGetRepo.findOne).toHaveBeenCalledTimes(1)
    })
  })
})