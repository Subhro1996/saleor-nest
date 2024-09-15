import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model<User> {
  @Column
  userName: string;

  @Column
  password: string;

  @Column
  email: string;

  @Column
  name: string;

  @Column
  role: string;

  @Column
  address: string;
}
