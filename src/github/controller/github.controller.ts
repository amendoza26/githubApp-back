import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from '../services/github.service';

@Controller('github')
export class GithubController {
  constructor(private readonly githubService: GithubService) {}
  @Get('user/:username')
  getUserData(@Param('username') username: string) {
    return this.githubService.userData(username);
  }

  @Get('user/:username/repos')
  getUserRepos(@Param('username') username: string) {
    return this.githubService.userRepos(username);
  }
}
