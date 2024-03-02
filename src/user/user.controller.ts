import { Body, Controller, Param } from '@nestjs/common';
import { CreateUserRequestDto } from './dtos/create-user.request.dto';
import { UpdateUserRequestDto } from './dtos/user-update.request';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  public async create(@Body() request: CreateUserRequestDto) {
    return this.userService.create(request);
  }

  public async get(@Param('id') id: string) {
    return this.userService.get(id);
  }

  public async update(
    @Param('id') id: string,
    @Body() request: UpdateUserRequestDto,
  ) {
    return this.userService.update(id, request);
  }

  public async delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  public async restore(@Param('id') id: string) {
    return this.userService.restore(id);
  }
}
