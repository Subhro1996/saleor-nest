import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '@user/dto/create-user.dto';
import { UpdateUserDto } from '@user/dto/update-user.dto';
import { User } from '@user/entities/user.entity';

@Injectable()
export class UserService {
  async create(createUserDto: CreateUserDto) {
    return await User.create(createUserDto);
  }

  async findAll() {
    return await User.findAll();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
