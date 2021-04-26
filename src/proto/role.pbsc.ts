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
import * as thisProto from './role.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_ROLE_SERVICE_CLIENT_SETTINGS } from './role.pbconf';
/**
 * Service client implementation for protos.RoleService
 */
@Injectable({ providedIn: 'any' })
export class RoleServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /protos.RoleService/ListRoles
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListRolesResponse>>
     */
    listRoles: (
      requestData: thisProto.ListRolesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListRolesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.RoleService/ListRoles',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListRolesRequest,
        responseClass: thisProto.ListRolesResponse
      });
    },
    /**
     * Unary RPC for /protos.RoleService/GetRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Role>>
     */
    getRole: (
      requestData: thisProto.GetRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Role>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.RoleService/GetRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetRoleRequest,
        responseClass: thisProto.Role
      });
    },
    /**
     * Unary RPC for /protos.RoleService/CreateRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Role>>
     */
    createRole: (
      requestData: thisProto.CreateRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Role>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.RoleService/CreateRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateRoleRequest,
        responseClass: thisProto.Role
      });
    },
    /**
     * Unary RPC for /protos.RoleService/UpdateRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Role>>
     */
    updateRole: (
      requestData: thisProto.UpdateRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Role>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.RoleService/UpdateRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateRoleRequest,
        responseClass: thisProto.Role
      });
    },
    /**
     * Unary RPC for /protos.RoleService/DeleteRole
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteRole: (
      requestData: thisProto.DeleteRoleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.RoleService/DeleteRole',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteRoleRequest,
        responseClass: googleProtobuf000.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_ROLE_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('protos.RoleService', settings);
  }

  /**
   * Unary RPC for /protos.RoleService/ListRoles
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListRolesResponse>
   */
  listRoles(
    requestData: thisProto.ListRolesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListRolesResponse> {
    return this.$raw
      .listRoles(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.RoleService/GetRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Role>
   */
  getRole(
    requestData: thisProto.GetRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Role> {
    return this.$raw
      .getRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.RoleService/CreateRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Role>
   */
  createRole(
    requestData: thisProto.CreateRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Role> {
    return this.$raw
      .createRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.RoleService/UpdateRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Role>
   */
  updateRole(
    requestData: thisProto.UpdateRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Role> {
    return this.$raw
      .updateRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.RoleService/DeleteRole
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteRole(
    requestData: thisProto.DeleteRoleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deleteRole(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
