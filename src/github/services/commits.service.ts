import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CommitsService {
  constructor(private readonly configService: ConfigService) {}
  public async userRepoCommits(
    username: string,
    repoName: string,
  ): Promise<AxiosResponse<any>> {
    const token = this.configService.get<string>('TOKEN');
    try {
      const apiUrl = `https://api.github.com/repos/${username}/${repoName}/commits`;
      const response = await axios.get(apiUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  }
}
