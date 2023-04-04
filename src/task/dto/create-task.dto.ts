import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';
import { User } from 'src/user/entities/user.entity';
import { Task } from '../entities/task.entity';

export class CreateTaskDto extends Task {
  @IsString()
  title: string;

  @IsString()
  description: string;

  @IsBoolean()
  completed: boolean;

  @IsDateString()
  expiration: Date;

  @IsNumber()
  userId: number;
}
