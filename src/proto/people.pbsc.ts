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
import * as thisProto from './people.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import * as protos001 from './role.pb';
import { GRPC_PEOPLE_SERVICE_CLIENT_SETTINGS } from './people.pbconf';
/**
 * Service client implementation for protos.PeopleService
 */
@Injectable({ providedIn: 'any' })
export class PeopleServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /protos.PeopleService/ListPeoples
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListPeoplesResponse>>
     */
    listPeoples: (
      requestData: thisProto.ListPeoplesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListPeoplesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.PeopleService/ListPeoples',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListPeoplesRequest,
        responseClass: thisProto.ListPeoplesResponse
      });
    },
    /**
     * Unary RPC for /protos.PeopleService/GetPeople
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.People>>
     */
    getPeople: (
      requestData: thisProto.GetPeopleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.People>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.PeopleService/GetPeople',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetPeopleRequest,
        responseClass: thisProto.People
      });
    },
    /**
     * Unary RPC for /protos.PeopleService/CreatePeople
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.People>>
     */
    createPeople: (
      requestData: thisProto.CreatePeopleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.People>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.PeopleService/CreatePeople',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreatePeopleRequest,
        responseClass: thisProto.People
      });
    },
    /**
     * Unary RPC for /protos.PeopleService/UpdatePeople
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.People>>
     */
    updatePeople: (
      requestData: thisProto.UpdatePeopleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.People>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.PeopleService/UpdatePeople',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdatePeopleRequest,
        responseClass: thisProto.People
      });
    },
    /**
     * Unary RPC for /protos.PeopleService/DeletePeople
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deletePeople: (
      requestData: thisProto.DeletePeopleRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.PeopleService/DeletePeople',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeletePeopleRequest,
        responseClass: googleProtobuf000.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_PEOPLE_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('protos.PeopleService', settings);
  }

  /**
   * Unary RPC for /protos.PeopleService/ListPeoples
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListPeoplesResponse>
   */
  listPeoples(
    requestData: thisProto.ListPeoplesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListPeoplesResponse> {
    return this.$raw
      .listPeoples(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.PeopleService/GetPeople
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.People>
   */
  getPeople(
    requestData: thisProto.GetPeopleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.People> {
    return this.$raw
      .getPeople(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.PeopleService/CreatePeople
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.People>
   */
  createPeople(
    requestData: thisProto.CreatePeopleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.People> {
    return this.$raw
      .createPeople(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.PeopleService/UpdatePeople
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.People>
   */
  updatePeople(
    requestData: thisProto.UpdatePeopleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.People> {
    return this.$raw
      .updatePeople(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.PeopleService/DeletePeople
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deletePeople(
    requestData: thisProto.DeletePeopleRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deletePeople(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
