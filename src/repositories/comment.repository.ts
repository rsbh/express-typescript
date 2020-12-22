import {getRepository} from "typeorm";
import {Comment} from '../models'

export interface ICommentPayload {
  content: string;
  userId: number;
  postId: number;
}

export const getComments  = async () :Promise<Array<Comment>> => {
  const commentRepository = getRepository(Comment);
  return commentRepository.find()
}

export const createComment  = async (payload: ICommentPayload) :Promise<Comment> => {
  const commentRepository = getRepository(Comment);
  const comment = new Comment()
  return commentRepository.save({
    ...comment,
    ...payload
  })
}

export const getComment  = async (id: number) :Promise<Comment | null> => {
  const commentRepository = getRepository(Comment);
  const comment = await commentRepository.findOne({id: id})
  if (!comment) return null
  return comment
}