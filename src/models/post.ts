import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany,CreateDateColumn, UpdateDateColumn, JoinColumn} from "typeorm";
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

    @Column({ nullable: true })
    userId!: number;
    @ManyToOne(_type => User, (user: User) => user.posts)
    @JoinColumn()
    user!: User;

    @OneToMany(_type=> Comment, (comment: Comment) => comment.post)
    comments!: Array<Comment>;

    @CreateDateColumn()
    createdAt!: Date;

    @UpdateDateColumn()
    updatedAt!: Date;
}