import PostController from './post.controller'
import * as PostRepository from '../repositories/post.repository'
import {generatePostsData, generatePostPayload, generatePostData} from 'test/utils/generate'

afterEach(() => {
  jest.resetAllMocks()
})

describe("PostController", () => {
  describe("getPosts", () => {
    test("should return empty array", async () => {
      const spy = jest.spyOn(PostRepository, 'getPosts').mockResolvedValueOnce([])
      const controller = new PostController();
      const posts = await controller.getPosts();
      expect(posts).toEqual([])
      expect(spy).toHaveBeenCalledWith()
      expect(spy).toHaveBeenCalledTimes(1)
    })

    test("should return posts list", async () => {
      const postsData = generatePostsData(2)
      const spy = jest.spyOn(PostRepository, 'getPosts').mockResolvedValueOnce(postsData)
      const controller = new PostController();
      const posts = await controller.getPosts();
      expect(posts).toEqual(postsData)
      expect(spy).toHaveBeenCalledWith()
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe("createPost", () => {
    test("should add post to the database", async () => {
      
      const payload = generatePostPayload()
      const postData = generatePostData(payload)
      const spy = jest.spyOn(PostRepository, 'createPost').mockResolvedValueOnce(postData)
      const controller = new PostController();
      const post = await controller.createPost(payload);
      expect(post).toMatchObject(payload)
      expect(post).toEqual(postData)
      expect(spy).toHaveBeenCalledWith(payload)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe("getPost", () => {
    test("should return post from the database", async () => {
      const id = 1
      const postData = generatePostData({id})
      const spy = jest.spyOn(PostRepository, 'getPost').mockResolvedValueOnce(postData)
      const controller = new PostController();
      const post = await controller.getPost(id.toString());
      expect(post).toEqual(postData)
      expect(post?.id).toBe(id)
      expect(spy).toHaveBeenCalledWith(id)
      expect(spy).toHaveBeenCalledTimes(1)
    })

    test("should return null if post not found", async () => {
      const id = 1
      const spy = jest.spyOn(PostRepository, 'getPost').mockResolvedValueOnce(null)
      const controller = new PostController();
      const post = await controller.getPost(id.toString());
      expect(post).toBeNull()
      expect(spy).toHaveBeenCalledWith(id)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})