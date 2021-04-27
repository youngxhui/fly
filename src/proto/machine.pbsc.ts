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
import * as thisProto from './machine.pb';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
import { GRPC_MACHINE_SERVICE_CLIENT_SETTINGS } from './machine.pbconf';
/**
 * Service client implementation for protos.MachineService
 */
@Injectable({ providedIn: 'any' })
export class MachineServiceClient {
  private client: GrpcClient<any>;

  /**
   * Raw RPC implementation for each service client method.
   * The raw methods provide more control on the incoming data and events. E.g. they can be useful to read status `OK` metadata.
   * Attention: these methods do not throw errors when non-zero status codes are received.
   */
  $raw = {
    /**
     * Unary RPC for /protos.MachineService/ListMachines
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.ListMachinesResponse>>
     */
    listMachines: (
      requestData: thisProto.ListMachinesRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.ListMachinesResponse>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.MachineService/ListMachines',
        requestData,
        requestMetadata,
        requestClass: thisProto.ListMachinesRequest,
        responseClass: thisProto.ListMachinesResponse
      });
    },
    /**
     * Unary RPC for /protos.MachineService/GetMachine
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Machine>>
     */
    getMachine: (
      requestData: thisProto.GetMachineRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Machine>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.MachineService/GetMachine',
        requestData,
        requestMetadata,
        requestClass: thisProto.GetMachineRequest,
        responseClass: thisProto.Machine
      });
    },
    /**
     * Unary RPC for /protos.MachineService/CreateMachine
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Machine>>
     */
    createMachine: (
      requestData: thisProto.CreateMachineRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Machine>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.MachineService/CreateMachine',
        requestData,
        requestMetadata,
        requestClass: thisProto.CreateMachineRequest,
        responseClass: thisProto.Machine
      });
    },
    /**
     * Unary RPC for /protos.MachineService/UpdateMachine
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<thisProto.Machine>>
     */
    updateMachine: (
      requestData: thisProto.UpdateMachineRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<thisProto.Machine>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.MachineService/UpdateMachine',
        requestData,
        requestMetadata,
        requestClass: thisProto.UpdateMachineRequest,
        responseClass: thisProto.Machine
      });
    },
    /**
     * Unary RPC for /protos.MachineService/DeleteMachine
     *
     * @param requestMessage Request message
     * @param requestMetadata Request metadata
     * @returns Observable<GrpcEvent<googleProtobuf000.Empty>>
     */
    deleteMachine: (
      requestData: thisProto.DeleteMachineRequest,
      requestMetadata = new GrpcMetadata()
    ): Observable<GrpcEvent<googleProtobuf000.Empty>> => {
      return this.handler.handle({
        type: GrpcCallType.unary,
        client: this.client,
        path: '/protos.MachineService/DeleteMachine',
        requestData,
        requestMetadata,
        requestClass: thisProto.DeleteMachineRequest,
        responseClass: googleProtobuf000.Empty
      });
    }
  };

  constructor(
    @Optional() @Inject(GRPC_MACHINE_SERVICE_CLIENT_SETTINGS) settings: any,
    @Inject(GRPC_CLIENT_FACTORY) clientFactory: GrpcClientFactory<any>,
    private handler: GrpcHandler
  ) {
    this.client = clientFactory.createClient('protos.MachineService', settings);
  }

  /**
   * Unary RPC for /protos.MachineService/ListMachines
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.ListMachinesResponse>
   */
  listMachines(
    requestData: thisProto.ListMachinesRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.ListMachinesResponse> {
    return this.$raw
      .listMachines(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.MachineService/GetMachine
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Machine>
   */
  getMachine(
    requestData: thisProto.GetMachineRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Machine> {
    return this.$raw
      .getMachine(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.MachineService/CreateMachine
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Machine>
   */
  createMachine(
    requestData: thisProto.CreateMachineRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Machine> {
    return this.$raw
      .createMachine(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.MachineService/UpdateMachine
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<thisProto.Machine>
   */
  updateMachine(
    requestData: thisProto.UpdateMachineRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<thisProto.Machine> {
    return this.$raw
      .updateMachine(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }

  /**
   * Unary RPC for /protos.MachineService/DeleteMachine
   *
   * @param requestMessage Request message
   * @param requestMetadata Request metadata
   * @returns Observable<googleProtobuf000.Empty>
   */
  deleteMachine(
    requestData: thisProto.DeleteMachineRequest,
    requestMetadata = new GrpcMetadata()
  ): Observable<googleProtobuf000.Empty> {
    return this.$raw
      .deleteMachine(requestData, requestMetadata)
      .pipe(throwStatusErrors(), takeMessages());
  }
}
