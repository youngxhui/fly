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
import * as thisProto from './ping.pb';
import * as googleApi000 from './google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from './google/api/annotations.pb';
import { GRPC_PING_CLIENT_SETTINGS } from './ping.pbconf';
/**
 * Service client implementation for protos.Ping
 */
@Injectable({ providedIn: 'any' })
export class PingClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /protos.Ping/Ping
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.PongReply>>
     */
    ping: (
      requestData: thisProto.PingRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.PongReply>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.Ping/Ping',
        requestData,
        requestMetadata,
        requestClass: thisProto.PingRequest,
        responseClass: thisProto.PongReply
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_PING_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('protos.Ping', settings);
  }

  /**
   * Unary RPC for /protos.Ping/Ping
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.PongReply>
   */
  ping(
    requestData: thisProto.PingRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.PongReply> {
    return this.$raw
      .ping(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
