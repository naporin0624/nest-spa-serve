import { Configuration } from "webpack";
import { AbstractHttpAdapter } from "@nestjs/core";
export declare class ClientProvider {
    register(app: AbstractHttpAdapter, config: Configuration): Promise<void>;
}
