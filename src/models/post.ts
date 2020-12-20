import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Comment } from "./comment";
import { User } from "./user";

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column({
        type: 'text'
    })
    content!: string;

    @ManyToOne(_type => User, (user: User) => user.posts)
    user!: User;

    @OneToMany(_type=> Comment, (comment: Comment) => comment.post)
    comments!: Array<Comment>;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}