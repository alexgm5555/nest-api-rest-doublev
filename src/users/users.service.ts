import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { log } from 'console';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ){}

  async create(createUserDto: CreateUserDto) {
    try {
      const { id, ...userData} = createUserDto;
      console.log(userData);
      
      const user = this.usersRepository.create({
        ...userData
      });

      if (this.usersRepository.findOne({
        where: {id},
      })) throw 'user alrady exist'

      await this.usersRepository.save(user);

      return { ...user };
    } catch (error) {
      console.log(error);
      throw new BadRequestException(error);
    }
  }

  async findAll() {
    const users = await this.usersRepository.find()
    return users;
  }

  private handleDBErrors(error: any): never { // el never fuerza a que jamas de un return en el metodo
    if (error.code === 23505)
      throw new BadRequestException(error.detail);
    throw new InternalServerErrorException('Please check Server logs');
  }
}
