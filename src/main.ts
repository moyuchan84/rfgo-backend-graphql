import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaService } from "./prisma/prisma.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // CORS 활성화: 모든 도메인, 메서드, 헤더 허용
  app.enableCors({
    origin: "*", // 모든 도메인 허용
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // 허용할 HTTP 메서드
    allowedHeaders: "Content-Type, Accept", // 허용할 헤더
  });

  await app.listen(3000);

  const prismaService = app.get(PrismaService);
  // await prismaService.enableShutdownHooks(app);
}
bootstrap();
