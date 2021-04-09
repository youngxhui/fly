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
import * as thisProto from './login.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as protos001 from './base.pb';
import { GRPC_USER_SRV_CLIENT_SETTINGS } from './login.pbconf';
/**
 * Service client implementation for protos.UserSrv
 */
@Injectable({ providedIn: 'any' })
export class UserSrvClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /protos.UserSrv/Login
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<protos001.Result>>
     */
    login: (
      requestData: thisProto.UserInfo,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<protos001.Result>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.UserSrv/Login',
        requestData,
        requestMetadata,
        requestClass: thisProto.UserInfo,
        responseClass: protos001.Result
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USER_SRV_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('protos.UserSrv', settings);
  }

  /**
   * Unary RPC for /protos.UserSrv/Login
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<protos001.Result>
   */
  login(
    requestData: thisProto.UserInfo,
    requestMetadata = new GrpcMetadata()
  ): Observable<protos001.Result> {
    return this.$raw
      .login(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
