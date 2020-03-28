"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var SPAClientModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const client_options_constant_1 = require("./client-options.constant");
const serve_static_1 = require("@nestjs/serve-static");
const client_provider_1 = require("./client.provider");
let SPAClientModule = SPAClientModule_1 = class SPAClientModule {
    constructor(clientOptions, httpAdapterHost, clientProvider) {
        this.clientOptions = clientOptions;
        this.httpAdapterHost = httpAdapterHost;
        this.clientProvider = clientProvider;
    }
    static forRoot(options) {
        return process.env.NODE_ENV !== "development"
            ? serve_static_1.ServeStaticModule.forRoot(options)
            : {
                module: SPAClientModule_1,
                providers: [
                    {
                        provide: client_options_constant_1.CLIENT_MODULE_OPTIONS,
                        useValue: options,
                    },
                ],
            };
    }
    async onModuleInit() {
        if (process.env.NODE_ENV !== "development")
            return;
        const httpAdapter = this.httpAdapterHost.httpAdapter;
        const { webpackConfig } = this.clientOptions;
        this.clientProvider.register(httpAdapter, webpackConfig);
    }
};
SPAClientModule = SPAClientModule_1 = __decorate([
    common_1.Module({
        providers: [client_provider_1.ClientProvider],
    }),
    __param(0, common_1.Inject(client_options_constant_1.CLIENT_MODULE_OPTIONS)),
    __metadata("design:paramtypes", [Object, core_1.HttpAdapterHost,
        client_provider_1.ClientProvider])
], SPAClientModule);
exports.SPAClientModule = SPAClientModule;
