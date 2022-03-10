import type ServiceProvider from "../Support/ServiceProvider";
import type { CipherTypes } from "./Encryption";
export interface AppConfig {
    name: string
    key: string
    cipher: CipherTypes
    providers: (typeof ServiceProvider)[]
}