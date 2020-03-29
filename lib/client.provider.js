"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const webpack_1 = __importDefault(require("webpack"));
const webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
const webpack_hot_middleware_1 = __importDefault(require("webpack-hot-middleware"));
let ClientProvider = class ClientProvider {
    async register(app, config) {
        const compiler = webpack_1.default({
            ...config,
            mode: "development",
            plugins: [
                ...(config.plugins || []),
                new webpack_1.default.HotModuleReplacementPlugin(),
            ],
        });
        app.use(webpack_dev_middleware_1.default(compiler));
        app.use(webpack_hot_middleware_1.default(compiler));
    }
};
ClientProvider = __decorate([
    common_1.Injectable()
], ClientProvider);
exports.ClientProvider = ClientProvider;
