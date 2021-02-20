module.exports = {
  getRepository: jest.fn().mockReturnValue({
    find: jest.fn(),
    save: jest.fn(),
    findOne: jest.fn()
  }),
  PrimaryGeneratedColumn: jest.fn(),
  Column: jest.fn(),
  Entity: jest.fn(),
  ManyToOne: jest.fn(),
  OneToMany: jest.fn(),
  JoinColumn: jest.fn(),
  CreateDateColumn: jest.fn(),
  UpdateDateColumn: jest.fn()
}