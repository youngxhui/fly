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
import * as thisProto from './auth.pb';
import * as googleApi000 from './google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleApi002 from './google/api/annotations.pb';
import { GRPC_USER_SERVICE_CLIENT_SETTINGS } from './auth.pbconf';
/**
 * Service client implementation for protos.UserService
 */
@Injectable({ providedIn: 'any' })
export class UserServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /protos.UserService/GetUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.User>>
     */
    getUser: (
      requestData: thisProto.GetUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.User>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.UserService/GetUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetUserRequest,
        responseClass: thisProto.User
      });
    },
    /**
     * Unary RPC for /protos.UserService/RegisterUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.User>>
     */
    registerUser: (
      requestData: thisProto.RegisterUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.User>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.UserService/RegisterUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.RegisterUserRequest,
        responseClass: thisProto.User
      });
    },
    /**
     * Unary RPC for /protos.UserService/LoginUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LoginUserResponse>>
     */
    loginUser: (
      requestData: thisProto.LoginUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LoginUserResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.UserService/LoginUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.LoginUserRequest,
        responseClass: thisProto.LoginUserResponse
      });
    },
    /**
     * Unary RPC for /protos.UserService/LoginOffUser
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.LoginOffResponse>>
     */
    loginOffUser: (
      requestData: thisProto.DeleteUserRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.LoginOffResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.UserService/LoginOffUser',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteUserRequest,
        responseClass: thisProto.LoginOffResponse
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_USER_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('protos.UserService', settings);
  }

  /**
   * Unary RPC for /protos.UserService/GetUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.User>
   */
  getUser(
    requestData: thisProto.GetUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.User> {
    return this.$raw
      .getUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.UserService/RegisterUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.User>
   */
  registerUser(
    requestData: thisProto.RegisterUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.User> {
    return this.$raw
      .registerUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.UserService/LoginUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LoginUserResponse>
   */
  loginUser(
    requestData: thisProto.LoginUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LoginUserResponse> {
    return this.$raw
      .loginUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.UserService/LoginOffUser
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.LoginOffResponse>
   */
  loginOffUser(
    requestData: thisProto.DeleteUserRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.LoginOffResponse> {
    return this.$raw
      .loginOffUser(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
