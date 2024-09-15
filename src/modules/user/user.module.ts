import { Module } from '@nestjs/common';
import { UserService } from '@user/user.service';
import { UserController } from '@user/user.controller';
// import { SequelizeModule } from '@nestjs/sequelize';
// import { User } from '@user/entities/user.entity';

@Module({
  controllers: [UserController],
  providers: [UserService],
  // imports: [SequelizeModule.forFeature([User])],
  // export it to use it outside this module
  //exports: [SequelizeModule],
})
export class UserModule {}
