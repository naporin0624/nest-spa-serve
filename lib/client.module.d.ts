import { DynamicModule, OnModuleInit } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
import { ClientOptions } from "./client-options.interface";
import { ClientProvider } from "./client.provider";
export declare class SPAClientModule implements OnModuleInit {
    private readonly clientOptions;
    private readonly httpAdapterHost;
    private readonly clientProvider;
    constructor(clientOptions: ClientOptions, httpAdapterHost: HttpAdapterHost, clientProvider: ClientProvider);
    static forRoot(options: ClientOptions): DynamicModule;
    onModuleInit(): Promise<void>;
}
