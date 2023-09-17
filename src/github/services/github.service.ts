import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GithubService {
  constructor(private readonly httpService: HttpService) {}
  public async userData(username: string): Promise<AxiosResponse<any>> {
    try {
      const apiUrl = `https://api.github.com/users/${username}`;
      const response = await firstValueFrom(this.httpService.get(apiUrl));
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async userRepos(username: string): Promise<AxiosResponse<any>> {
    try {
      const apiUrl = `https://api.github.com/users/${username}/repos`;
      const response = await firstValueFrom(this.httpService.get(apiUrl));
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
