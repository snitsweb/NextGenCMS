import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'

// const models = [Page, Layout, Settings]

@Module({
	imports: [AuthModule, PrismaModule],
})
export class AppModule {}
