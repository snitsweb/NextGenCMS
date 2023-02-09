import { Module } from '@nestjs/common'
import { AuthModule } from './auth/auth.module'
import { PrismaModule } from './prisma/prisma.module'
import { APP_GUARD } from '@nestjs/core'
import { AtGuard } from './common/guards'
import { LayoutsModule } from './layouts/layouts.module'
import { SettingsModule } from './settings/settings.module';
import { PagesModule } from './pages/pages.module';

@Module({
	imports: [AuthModule, PrismaModule, LayoutsModule, SettingsModule, PagesModule],
	providers: [
		{
			provide: APP_GUARD,
			useClass: AtGuard,
		},
	],
})
export class AppModule {}
