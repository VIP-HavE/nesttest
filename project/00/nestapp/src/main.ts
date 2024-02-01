// src/main.ts
@Module({
    imports: [ContentModule, CoreModule.forRoot(), DatabaseModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}