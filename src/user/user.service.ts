import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  public async create(request: any) {
    return request;
  }

  public async get(id: string) {
    return id;
  }

  public async update(id: string, request: any) {
    return { id, ...request };
  }

  public async delete(id: string) {
    return id;
  }

  public async restore(id: string) {
    return id;
  }
}
