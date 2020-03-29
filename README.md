# Nest-SPA-Serve

Single Page Application delivery server module for NestJS

## Usage

```typescript:app.module.ts
import { Module } from "@nestjs/common";
import { SPAClientModule } from "nest-spa-serve";
import { join } from "path";
import config from "../webpack.config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";

@Module({
  imports: [
    SPAClientModule.forRoot({
      // URL path where the SPA is provided
      renderPath: "/",
      // Directory of static file (index.html)
      rootPath: join(process.cwd(), "public"),
      // webpack.config.js for frontend
      webpackConfig: config,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```