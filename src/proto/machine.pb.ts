/* tslint:disable */
/* eslint-disable */
//
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
import {
  GrpcMessage,
  RecursivePartial,
  ToProtobufJSONOptions
} from '@ngx-grpc/common';
import { BinaryReader, BinaryWriter, ByteSource } from 'google-protobuf';
import * as googleProtobuf000 from '@ngx-grpc/well-known-types';
/**
 * Message implementation for protos.Machine
 */
export class Machine implements GrpcMessage {
  static id = 'protos.Machine';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Machine();
    Machine.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Machine) {
    _instance.id = _instance.id || 0;
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Machine,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Machine.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Machine, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
  }

  private _id?: number;
  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Machine to deeply clone from
   */
  constructor(_value?: RecursivePartial<Machine.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    Machine.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get name(): string | undefined {
    return this._name;
  }
  set name(value: string | undefined) {
    this._name = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Machine.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Machine.AsObject {
    return {
      id: this.id,
      name: this.name
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): Machine.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name
    };
  }
}
export module Machine {
  /**
   * Standard JavaScript object representation for Machine
   */
  export interface AsObject {
    id?: number;
    name?: string;
  }

  /**
   * Protobuf JSON representation for Machine
   */
  export interface AsProtobufJSON {
    id?: number;
    name?: string;
  }
}

/**
 * Message implementation for protos.ListMachinesRequest
 */
export class ListMachinesRequest implements GrpcMessage {
  static id = 'protos.ListMachinesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListMachinesRequest();
    ListMachinesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListMachinesRequest) {
    _instance.page = _instance.page || 0;
    _instance.size = _instance.size || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListMachinesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 2:
          _instance.page = _reader.readInt32();
          break;
        case 3:
          _instance.size = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    ListMachinesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListMachinesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.page) {
      _writer.writeInt32(2, _instance.page);
    }
    if (_instance.size) {
      _writer.writeInt32(3, _instance.size);
    }
  }

  private _page?: number;
  private _size?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListMachinesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListMachinesRequest.AsObject>) {
    _value = _value || {};
    this.page = _value.page;
    this.size = _value.size;
    ListMachinesRequest.refineValues(this);
  }
  get page(): number | undefined {
    return this._page;
  }
  set page(value: number | undefined) {
    this._page = value;
  }
  get size(): number | undefined {
    return this._size;
  }
  set size(value: number | undefined) {
    this._size = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListMachinesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListMachinesRequest.AsObject {
    return {
      page: this.page,
      size: this.size
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListMachinesRequest.AsProtobufJSON {
    return {
      page: this.page,
      size: this.size
    };
  }
}
export module ListMachinesRequest {
  /**
   * Standard JavaScript object representation for ListMachinesRequest
   */
  export interface AsObject {
    page?: number;
    size?: number;
  }

  /**
   * Protobuf JSON representation for ListMachinesRequest
   */
  export interface AsProtobufJSON {
    page?: number;
    size?: number;
  }
}

/**
 * Message implementation for protos.ListMachinesResponse
 */
export class ListMachinesResponse implements GrpcMessage {
  static id = 'protos.ListMachinesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListMachinesResponse();
    ListMachinesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListMachinesResponse) {
    _instance.machines = _instance.machines || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListMachinesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Machine();
          _reader.readMessage(
            messageInitializer1,
            Machine.deserializeBinaryFromReader
          );
          (_instance.machines = _instance.machines || []).push(
            messageInitializer1
          );
          break;
        default:
          _reader.skipField();
      }
    }

    ListMachinesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListMachinesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.machines && _instance.machines.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.machines as any,
        Machine.serializeBinaryToWriter
      );
    }
  }

  private _machines?: Machine[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListMachinesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListMachinesResponse.AsObject>) {
    _value = _value || {};
    this.machines = (_value.machines || []).map(m => new Machine(m));
    ListMachinesResponse.refineValues(this);
  }
  get machines(): Machine[] | undefined {
    return this._machines;
  }
  set machines(value: Machine[] | undefined) {
    this._machines = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListMachinesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListMachinesResponse.AsObject {
    return {
      machines: (this.machines || []).map(m => m.toObject())
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): ListMachinesResponse.AsProtobufJSON {
    return {
      machines: (this.machines || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListMachinesResponse {
  /**
   * Standard JavaScript object representation for ListMachinesResponse
   */
  export interface AsObject {
    machines?: Machine.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListMachinesResponse
   */
  export interface AsProtobufJSON {
    machines?: Machine.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for protos.GetMachineRequest
 */
export class GetMachineRequest implements GrpcMessage {
  static id = 'protos.GetMachineRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetMachineRequest();
    GetMachineRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetMachineRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetMachineRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    GetMachineRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetMachineRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetMachineRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetMachineRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    GetMachineRequest.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    GetMachineRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetMachineRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): GetMachineRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module GetMachineRequest {
  /**
   * Standard JavaScript object representation for GetMachineRequest
   */
  export interface AsObject {
    id?: number;
  }

  /**
   * Protobuf JSON representation for GetMachineRequest
   */
  export interface AsProtobufJSON {
    id?: number;
  }
}

/**
 * Message implementation for protos.CreateMachineRequest
 */
export class CreateMachineRequest implements GrpcMessage {
  static id = 'protos.CreateMachineRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateMachineRequest();
    CreateMachineRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateMachineRequest) {
    _instance.machine = _instance.machine || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateMachineRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 3:
          _instance.machine = new Machine();
          _reader.readMessage(
            _instance.machine,
            Machine.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreateMachineRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateMachineRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.machine) {
      _writer.writeMessage(
        3,
        _instance.machine as any,
        Machine.serializeBinaryToWriter
      );
    }
  }

  private _machine?: Machine;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateMachineRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateMachineRequest.AsObject>) {
    _value = _value || {};
    this.machine = _value.machine ? new Machine(_value.machine) : undefined;
    CreateMachineRequest.refineValues(this);
  }
  get machine(): Machine | undefined {
    return this._machine;
  }
  set machine(value: Machine | undefined) {
    this._machine = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateMachineRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateMachineRequest.AsObject {
    return {
      machine: this.machine ? this.machine.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): CreateMachineRequest.AsProtobufJSON {
    return {
      machine: this.machine ? this.machine.toProtobufJSON(options) : null
    };
  }
}
export module CreateMachineRequest {
  /**
   * Standard JavaScript object representation for CreateMachineRequest
   */
  export interface AsObject {
    machine?: Machine.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateMachineRequest
   */
  export interface AsProtobufJSON {
    machine?: Machine.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.UpdateMachineRequest
 */
export class UpdateMachineRequest implements GrpcMessage {
  static id = 'protos.UpdateMachineRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateMachineRequest();
    UpdateMachineRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateMachineRequest) {
    _instance.machine = _instance.machine || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateMachineRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.machine = new Machine();
          _reader.readMessage(
            _instance.machine,
            Machine.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateMachineRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateMachineRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.machine) {
      _writer.writeMessage(
        1,
        _instance.machine as any,
        Machine.serializeBinaryToWriter
      );
    }
  }

  private _machine?: Machine;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateMachineRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateMachineRequest.AsObject>) {
    _value = _value || {};
    this.machine = _value.machine ? new Machine(_value.machine) : undefined;
    UpdateMachineRequest.refineValues(this);
  }
  get machine(): Machine | undefined {
    return this._machine;
  }
  set machine(value: Machine | undefined) {
    this._machine = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateMachineRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateMachineRequest.AsObject {
    return {
      machine: this.machine ? this.machine.toObject() : undefined
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): UpdateMachineRequest.AsProtobufJSON {
    return {
      machine: this.machine ? this.machine.toProtobufJSON(options) : null
    };
  }
}
export module UpdateMachineRequest {
  /**
   * Standard JavaScript object representation for UpdateMachineRequest
   */
  export interface AsObject {
    machine?: Machine.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateMachineRequest
   */
  export interface AsProtobufJSON {
    machine?: Machine.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.DeleteMachineRequest
 */
export class DeleteMachineRequest implements GrpcMessage {
  static id = 'protos.DeleteMachineRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteMachineRequest();
    DeleteMachineRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteMachineRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteMachineRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        default:
          _reader.skipField();
      }
    }

    DeleteMachineRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteMachineRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteMachineRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteMachineRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteMachineRequest.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    DeleteMachineRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteMachineRequest.AsObject {
    return {
      id: this.id
    };
  }

  /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */
  toJSON() {
    return this.toObject();
  }

  /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */
  toProtobufJSON(
    // @ts-ignore
    options?: ToProtobufJSONOptions
  ): DeleteMachineRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteMachineRequest {
  /**
   * Standard JavaScript object representation for DeleteMachineRequest
   */
  export interface AsObject {
    id?: number;
  }

  /**
   * Protobuf JSON representation for DeleteMachineRequest
   */
  export interface AsProtobufJSON {
    id?: number;
  }
}
