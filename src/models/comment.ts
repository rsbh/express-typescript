import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, JoinColumn} from "typeorm";
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

    @Column({ nullable: true })
    userId!: number;
    @ManyToOne(_type => User, (user: User) => user.comments)
    @JoinColumn()
    user!: User;

    @Column({ nullable: true })
    postId!: number;
    @ManyToOne(_type => Post, (post: Post) => post.comments)
    @JoinColumn()
    post!: Post;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}