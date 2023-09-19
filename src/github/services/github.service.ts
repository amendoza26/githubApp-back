import axios, { AxiosResponse } from 'axios';
import { Injectable } from '@nestjs/common';

const token = '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';
@Injectable()
export class GithubService {
  public async userData(username: string): Promise<AxiosResponse<any>> {
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
