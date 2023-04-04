import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  findMany() {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateTaskDto) {
    const createTask = await this.prisma.task.create({
      data,
    });

    return createTask;
  }

  findAll() {
    return this.prisma.task.findMany();
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: {
        id,
      },
    });
  }

  async update(id: number, updateTaskDto: UpdateTaskDto) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!taskExists) {
      throw new Error('Task does not exists!');
    }

    return await this.prisma.task.update({
      where: {
        id,
      },
      data: updateTaskDto,
    });
  }

  async remove(id: number) {
    const taskExists = await this.prisma.task.findUnique({
      where: {
        id,
      },
    });

    if (!taskExists) {
      throw new Error('Task does not exists!');
    }
    return await this.prisma.task.delete({
      where: {
        id,
      },
    });
  }
}
