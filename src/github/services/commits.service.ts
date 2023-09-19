import { Injectable } from '@nestjs/common';
import axios, { AxiosResponse } from 'axios';

const token = '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';

@Injectable()
export class CommitsService {
  public async userRepoCommits(
    username: string,
    repoName: string,
  ): Promise<AxiosResponse<any>> {
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
