import { Module } from '@nestjs/common';
import { GithubService } from './services/github.service';
import { GithubController } from './controller/github.controller';
import { HttpModule } from '@nestjs/axios';
import { CommitsService } from './services/commits.service';

@Module({
  imports: [HttpModule],
  providers: [GithubService, CommitsService],
  controllers: [GithubController],
})
export class GithubModule {}
