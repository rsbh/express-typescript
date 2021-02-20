import CommentController from './comment.controller'
import * as CommentRepository from '../repositories/comment.repository'
import {generateCommentsData, generateCommentPayload, generateCommentData} from 'test/utils/generate'

afterEach(() => {
  jest.resetAllMocks()
})

describe("CommentController", () => {
  describe("getComments", () => {
    test("should return empty array", async () => {
      const spy = jest.spyOn(CommentRepository, 'getComments').mockResolvedValueOnce([])
      const controller = new CommentController();
      const comments = await controller.getComments();
      expect(comments).toEqual([])
      expect(spy).toHaveBeenCalledWith()
      expect(spy).toHaveBeenCalledTimes(1)
    })

    test("should return comments list", async () => {
      const commentsData = generateCommentsData(2)
      const spy = jest.spyOn(CommentRepository, 'getComments').mockResolvedValueOnce(commentsData)
      const controller = new CommentController();
      const comments = await controller.getComments();
      expect(comments).toEqual(commentsData)
      expect(spy).toHaveBeenCalledWith()
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe("createComment", () => {
    test("should add comment to the database", async () => {
      const payload = generateCommentPayload()
      const commentData = generateCommentData(payload)
      const spy = jest.spyOn(CommentRepository, 'createComment').mockResolvedValueOnce(commentData)
      const controller = new CommentController();
      const comment = await controller.createComment(payload);
      expect(comment).toMatchObject(payload)
      expect(comment).toEqual(commentData)
      expect(spy).toHaveBeenCalledWith(payload)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })

  describe("getComment", () => {
    test("should return comment from the database", async () => {
      const id = 1
      const commentData = generateCommentData({id})
      const spy = jest.spyOn(CommentRepository, 'getComment').mockResolvedValueOnce(commentData)
      const controller = new CommentController();
      const comment = await controller.getComment(id.toString());
      expect(comment).toEqual(commentData)
      expect(comment?.id).toBe(id)
      expect(spy).toHaveBeenCalledWith(id)
      expect(spy).toHaveBeenCalledTimes(1)
    })

    test("should return null if comment not found", async () => {
      const id = 1
      const spy = jest.spyOn(CommentRepository, 'getComment').mockResolvedValueOnce(null)
      const controller = new CommentController();
      const comment = await controller.getComment(id.toString());
      expect(comment).toBeNull()
      expect(spy).toHaveBeenCalledWith(id)
      expect(spy).toHaveBeenCalledTimes(1)
    })
  })
})