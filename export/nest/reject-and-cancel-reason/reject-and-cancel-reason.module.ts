import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RejectAndCancelReasonController } from './reject-and-cancel-reason.controller';
import { RejectAndCancelReason } from './reject-and-cancel-reason.entity';
import { RejectAndCancelReasonService } from './reject-and-cancel-reason.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([RejectAndCancelReason])
  ],
  controllers: [RejectAndCancelReasonController],
  providers: [RejectAndCancelReasonService],
  exports:[RejectAndCancelReasonService]
})
export class RejectAndCancelReasonModule {}
