import { Module } from '@nestjs/common';
import { GithubService } from './services/github.service';
import { GithubController } from './controller/github.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  providers: [GithubService],
  controllers: [GithubController],
})
export class GithubModule {}
