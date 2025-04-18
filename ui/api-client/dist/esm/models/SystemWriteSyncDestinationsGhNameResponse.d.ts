/**
 * HashiCorp Vault API
 * HTTP API that gives you full access to Vault. All API routes are prefixed with `/v1/`.
 *
 * The version of the OpenAPI document: 1.20.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 *
 * @export
 * @interface SystemWriteSyncDestinationsGhNameResponse
 */
export interface SystemWriteSyncDestinationsGhNameResponse {
    /**
     * List of key value pairs of information necessary to connect with the external system.
     * @type {object}
     * @memberof SystemWriteSyncDestinationsGhNameResponse
     */
    connectionDetails?: object;
    /**
     * Name of this secrets store.
     * @type {string}
     * @memberof SystemWriteSyncDestinationsGhNameResponse
     */
    name?: string;
    /**
     * Type of this secrets store.
     * @type {string}
     * @memberof SystemWriteSyncDestinationsGhNameResponse
     */
    type?: string;
}
/**
 * Check if a given object implements the SystemWriteSyncDestinationsGhNameResponse interface.
 */
export declare function instanceOfSystemWriteSyncDestinationsGhNameResponse(value: object): value is SystemWriteSyncDestinationsGhNameResponse;
export declare function SystemWriteSyncDestinationsGhNameResponseFromJSON(json: any): SystemWriteSyncDestinationsGhNameResponse;
export declare function SystemWriteSyncDestinationsGhNameResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemWriteSyncDestinationsGhNameResponse;
export declare function SystemWriteSyncDestinationsGhNameResponseToJSON(json: any): SystemWriteSyncDestinationsGhNameResponse;
export declare function SystemWriteSyncDestinationsGhNameResponseToJSONTyped(value?: SystemWriteSyncDestinationsGhNameResponse | null, ignoreDiscriminator?: boolean): any;
