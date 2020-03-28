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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = require("@nestjs/common");
var core_1 = require("@nestjs/core");
var client_options_constant_1 = require("./client-options.constant");
var serve_static_1 = require("@nestjs/serve-static");
var client_provider_1 = require("./client.provider");
var SPAClientModule = (function () {
    function SPAClientModule(clientOptions, httpAdapterHost, clientProvider) {
        this.clientOptions = clientOptions;
        this.httpAdapterHost = httpAdapterHost;
        this.clientProvider = clientProvider;
    }
    SPAClientModule_1 = SPAClientModule;
    SPAClientModule.forRoot = function (options) {
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
    };
    SPAClientModule.prototype.onModuleInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var httpAdapter, webpackConfig;
            return __generator(this, function (_a) {
                if (process.env.NODE_ENV !== "development")
                    return [2];
                httpAdapter = this.httpAdapterHost.httpAdapter;
                webpackConfig = this.clientOptions.webpackConfig;
                this.clientProvider.register(httpAdapter, webpackConfig);
                return [2];
            });
        });
    };
    var SPAClientModule_1;
    SPAClientModule = SPAClientModule_1 = __decorate([
        common_1.Module({
            providers: [client_provider_1.ClientProvider],
        }),
        __param(0, common_1.Inject(client_options_constant_1.CLIENT_MODULE_OPTIONS)),
        __metadata("design:paramtypes", [Object, core_1.HttpAdapterHost,
            client_provider_1.ClientProvider])
    ], SPAClientModule);
    return SPAClientModule;
}());
exports.SPAClientModule = SPAClientModule;
