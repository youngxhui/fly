/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import { Inject, Injectable, Optional } from '@angular/core';
import {
  GrpcCallType,
  GrpcClient,
  GrpcClientFactory,
  GrpcEvent,
  GrpcMetadata
} from '@ngx-grpc/common';
import {
  GRPC_CLIENT_FACTORY,
  GrpcHandler,
  takeMessages,
  throwStatusErrors
} from '@ngx-grpc/core';
import { Observable } from 'rxjs';
import * as thisProto from './tool.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_TOOL_SERVICE_CLIENT_SETTINGS } from './tool.pbconf';
/**
 * Service client implementation for protos.ToolService
 */
@Injectable({ providedIn: 'any' })
export class ToolServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /protos.ToolService/ListTools
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListToolsResponse>>
     */
    listTools: (
      requestData: thisProto.ListToolsRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListToolsResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.ToolService/ListTools',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListToolsRequest,
        responseClass: thisProto.ListToolsResponse
      });
    },
    /**
     * Unary RPC for /protos.ToolService/GetTool
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Tool>>
     */
    getTool: (
      requestData: thisProto.GetToolRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Tool>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.ToolService/GetTool',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetToolRequest,
        responseClass: thisProto.Tool
      });
    },
    /**
     * Unary RPC for /protos.ToolService/CreateTool
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Tool>>
     */
    createTool: (
      requestData: thisProto.CreateToolRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Tool>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.ToolService/CreateTool',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateToolRequest,
        responseClass: thisProto.Tool
      });
    },
    /**
     * Unary RPC for /protos.ToolService/UpdateTool
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Tool>>
     */
    updateTool: (
      requestData: thisProto.UpdateToolRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Tool>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.ToolService/UpdateTool',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateToolRequest,
        responseClass: thisProto.Tool
      });
    },
    /**
     * Unary RPC for /protos.ToolService/DeleteTool
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteTool: (
      requestData: thisProto.DeleteToolRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.ToolService/DeleteTool',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteToolRequest,
        responseClass: googleProtobuf000.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_TOOL_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('protos.ToolService', settings);
  }

  /**
   * Unary RPC for /protos.ToolService/ListTools
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListToolsResponse>
   */
  listTools(
    requestData: thisProto.ListToolsRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListToolsResponse> {
    return this.$raw
      .listTools(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.ToolService/GetTool
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Tool>
   */
  getTool(
    requestData: thisProto.GetToolRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Tool> {
    return this.$raw
      .getTool(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.ToolService/CreateTool
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Tool>
   */
  createTool(
    requestData: thisProto.CreateToolRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Tool> {
    return this.$raw
      .createTool(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.ToolService/UpdateTool
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Tool>
   */
  updateTool(
    requestData: thisProto.UpdateToolRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Tool> {
    return this.$raw
      .updateTool(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.ToolService/DeleteTool
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteTool(
    requestData: thisProto.DeleteToolRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deleteTool(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
