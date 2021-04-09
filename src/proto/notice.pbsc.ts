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
import * as thisProto from './notice.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as protos001 from './base.pb';
import { GRPC_NOTICE_CLIENT_SETTINGS } from './notice.pbconf';
/**
 * Service client implementation for protos.Notice
 */
@Injectable({ providedIn: 'any' })
export class NoticeClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Server streaming RPC for /protos.Notice/ErrorWaring
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<protos001.Result>>
     */
    errorWaring: (
      requestData: protos001.Empty,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<protos001.Result>> => {
      return this.handler.handle({
        type: GrpcCallType.serverStream,
        client: this.client,
        path: '/protos.Notice/ErrorWaring',
        requestData,
        requestMetadata,
        requestClass: protos001.Empty,
        responseClass: protos001.Result
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_NOTICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('protos.Notice', settings);
  }

  /**
   * Server streaming RPC for /protos.Notice/ErrorWaring
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<protos001.Result>
   */
  errorWaring(
    requestData: protos001.Empty,
    requestMetadata = new GrpcMetadata()
  ): Observable<protos001.Result> {
    return this.$raw
      .errorWaring(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
