import { Injectable } from "@nestjs/common";
import { Configuration } from "webpack";
import webpack from "webpack";
import { AbstractHttpAdapter } from "@nestjs/core";
import webpackDevMiddleware from "webpack-dev-middleware";
import WebpackHotMiddleware from "webpack-hot-middleware";

@Injectable()
export class ClientProvider {
  async register(app: AbstractHttpAdapter, config: Configuration) {
    const compiler = webpack({
      ...config,
      mode: "development",
      plugins: [
        ...(config.plugins || []),
        new webpack.HotModuleReplacementPlugin(),
      ],
    });

    app.use(webpackDevMiddleware(compiler));
    app.use(WebpackHotMiddleware(compiler));
  }
}
