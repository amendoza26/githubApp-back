import { CommitsService } from '../services/commits.service';
import { Controller, Get, Param } from '@nestjs/common';
import { GithubService } from '../services/github.service';

@Controller('github')
export class GithubController {
  constructor(
    private readonly githubService: GithubService,
    private readonly commitsService: CommitsService,
  ) {}
  @Get('user/:username')
  getUserData(@Param('username') username: string) {
    return this.githubService.userData(username);
  }

  @Get('user/:username/repos')
  getUserRepos(@Param('username') username: string) {
    return this.githubService.userRepos(username);
  }

  @Get('user/:username/:repoName/commits')
  getRepoCommit(
    @Param('username') username: string,
    @Param('repoName') repoName: string,
  ) {
    return this.commitsService.userRepoCommits(username, repoName);
  }
}
