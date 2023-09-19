import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GithubService {
  constructor(private readonly configService: ConfigService) {}
  public async userData(username: string): Promise<AxiosResponse<any>> {
    console.log('algo');
    const token = this.configService.get<string>('TOKEN');
    console.log(token);
    try {
      const apiUrl = `https://api.github.com/users/${username}`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }

  public async userRepos(username: string): Promise<AxiosResponse<any>> {
    const token = this.configService.get<string>('TOKEN');
    try {
      const apiUrl = `https://api.github.com/users/${username}/repos`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
