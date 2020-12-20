import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Post } from "./post";
import { User } from "./user";

@Entity()
export class Comment {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column({
        type: 'text'
    })
    content!: string;

    @ManyToOne(_type => User, (user: User) => user.comments)
    user!: User;

    @ManyToOne(_type => Post, (post: Post) => post.comments)
    post!: Post;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}