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
import * as protos001 from './role.pb';
/**
 * Message implementation for protos.People
 */
export class People implements GrpcMessage {
  static id = 'protos.People';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new People();
    People.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: People) {
    _instance.id = _instance.id || 0;
    _instance.name = _instance.name || '';
    _instance.password = _instance.password || '';
    _instance.role = _instance.role || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: People, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.name = _reader.readString();
          break;
        case 3:
          _instance.password = _reader.readString();
          break;
        case 4:
          _instance.role = new protos001.Role();
          _reader.readMessage(
            _instance.role,
            protos001.Role.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    People.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: People, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.name) {
      _writer.writeString(2, _instance.name);
    }
    if (_instance.password) {
      _writer.writeString(3, _instance.password);
    }
    if (_instance.role) {
      _writer.writeMessage(
        4,
        _instance.role as any,
        protos001.Role.serializeBinaryToWriter
      );
    }
  }

  private _id?: number;
  private _name?: string;
  private _password?: string;
  private _role?: protos001.Role;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of People to deeply clone from
   */
  constructor(_value?: RecursivePartial<People.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.name = _value.name;
    this.password = _value.password;
    this.role = _value.role ? new protos001.Role(_value.role) : undefined;
    People.refineValues(this);
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
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get role(): protos001.Role | undefined {
    return this._role;
  }
  set role(value: protos001.Role | undefined) {
    this._role = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    People.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): People.AsObject {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      role: this.role ? this.role.toObject() : undefined
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
  ): People.AsProtobufJSON {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      role: this.role ? this.role.toProtobufJSON(options) : null
    };
  }
}
export module People {
  /**
   * Standard JavaScript object representation for People
   */
  export interface AsObject {
    id?: number;
    name?: string;
    password?: string;
    role?: protos001.Role.AsObject;
  }

  /**
   * Protobuf JSON representation for People
   */
  export interface AsProtobufJSON {
    id?: number;
    name?: string;
    password?: string;
    role?: protos001.Role.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.ListPeoplesRequest
 */
export class ListPeoplesRequest implements GrpcMessage {
  static id = 'protos.ListPeoplesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListPeoplesRequest();
    ListPeoplesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListPeoplesRequest) {
    _instance.page = _instance.page || 0;
    _instance.size = _instance.size || 0;
    _instance.people = _instance.people || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListPeoplesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.page = _reader.readInt32();
          break;
        case 2:
          _instance.size = _reader.readInt32();
          break;
        case 3:
          const messageInitializer3 = new People();
          _reader.readMessage(
            messageInitializer3,
            People.deserializeBinaryFromReader
          );
          (_instance.people = _instance.people || []).push(messageInitializer3);
          break;
        default:
          _reader.skipField();
      }
    }

    ListPeoplesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListPeoplesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.page) {
      _writer.writeInt32(1, _instance.page);
    }
    if (_instance.size) {
      _writer.writeInt32(2, _instance.size);
    }
    if (_instance.people && _instance.people.length) {
      _writer.writeRepeatedMessage(
        3,
        _instance.people as any,
        People.serializeBinaryToWriter
      );
    }
  }

  private _page?: number;
  private _size?: number;
  private _people?: People[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListPeoplesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListPeoplesRequest.AsObject>) {
    _value = _value || {};
    this.page = _value.page;
    this.size = _value.size;
    this.people = (_value.people || []).map(m => new People(m));
    ListPeoplesRequest.refineValues(this);
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
  get people(): People[] | undefined {
    return this._people;
  }
  set people(value: People[] | undefined) {
    this._people = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListPeoplesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListPeoplesRequest.AsObject {
    return {
      page: this.page,
      size: this.size,
      people: (this.people || []).map(m => m.toObject())
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
  ): ListPeoplesRequest.AsProtobufJSON {
    return {
      page: this.page,
      size: this.size,
      people: (this.people || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module ListPeoplesRequest {
  /**
   * Standard JavaScript object representation for ListPeoplesRequest
   */
  export interface AsObject {
    page?: number;
    size?: number;
    people?: People.AsObject[];
  }

  /**
   * Protobuf JSON representation for ListPeoplesRequest
   */
  export interface AsProtobufJSON {
    page?: number;
    size?: number;
    people?: People.AsProtobufJSON[] | null;
  }
}

/**
 * Message implementation for protos.ListPeoplesResponse
 */
export class ListPeoplesResponse implements GrpcMessage {
  static id = 'protos.ListPeoplesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListPeoplesResponse();
    ListPeoplesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListPeoplesResponse) {
    _instance.peoples = _instance.peoples || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListPeoplesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new People();
          _reader.readMessage(
            messageInitializer1,
            People.deserializeBinaryFromReader
          );
          (_instance.peoples = _instance.peoples || []).push(
            messageInitializer1
          );
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListPeoplesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListPeoplesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.peoples && _instance.peoples.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.peoples as any,
        People.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _peoples?: People[];
  private _nextPageToken?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListPeoplesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListPeoplesResponse.AsObject>) {
    _value = _value || {};
    this.peoples = (_value.peoples || []).map(m => new People(m));
    this.nextPageToken = _value.nextPageToken;
    ListPeoplesResponse.refineValues(this);
  }
  get peoples(): People[] | undefined {
    return this._peoples;
  }
  set peoples(value: People[] | undefined) {
    this._peoples = value;
  }
  get nextPageToken(): string | undefined {
    return this._nextPageToken;
  }
  set nextPageToken(value: string | undefined) {
    this._nextPageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListPeoplesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListPeoplesResponse.AsObject {
    return {
      peoples: (this.peoples || []).map(m => m.toObject()),
      nextPageToken: this.nextPageToken
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
  ): ListPeoplesResponse.AsProtobufJSON {
    return {
      peoples: (this.peoples || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListPeoplesResponse {
  /**
   * Standard JavaScript object representation for ListPeoplesResponse
   */
  export interface AsObject {
    peoples?: People.AsObject[];
    nextPageToken?: string;
  }

  /**
   * Protobuf JSON representation for ListPeoplesResponse
   */
  export interface AsProtobufJSON {
    peoples?: People.AsProtobufJSON[] | null;
    nextPageToken?: string;
  }
}

/**
 * Message implementation for protos.GetPeopleRequest
 */
export class GetPeopleRequest implements GrpcMessage {
  static id = 'protos.GetPeopleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetPeopleRequest();
    GetPeopleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetPeopleRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetPeopleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    GetPeopleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetPeopleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetPeopleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetPeopleRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    GetPeopleRequest.refineValues(this);
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
    GetPeopleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetPeopleRequest.AsObject {
    return {
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
  ): GetPeopleRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetPeopleRequest {
  /**
   * Standard JavaScript object representation for GetPeopleRequest
   */
  export interface AsObject {
    name?: string;
  }

  /**
   * Protobuf JSON representation for GetPeopleRequest
   */
  export interface AsProtobufJSON {
    name?: string;
  }
}

/**
 * Message implementation for protos.CreatePeopleRequest
 */
export class CreatePeopleRequest implements GrpcMessage {
  static id = 'protos.CreatePeopleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreatePeopleRequest();
    CreatePeopleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreatePeopleRequest) {
    _instance.parent = _instance.parent || '';
    _instance.peopleId = _instance.peopleId || '';
    _instance.people = _instance.people || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreatePeopleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.peopleId = _reader.readString();
          break;
        case 3:
          _instance.people = new People();
          _reader.readMessage(
            _instance.people,
            People.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CreatePeopleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreatePeopleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.peopleId) {
      _writer.writeString(2, _instance.peopleId);
    }
    if (_instance.people) {
      _writer.writeMessage(
        3,
        _instance.people as any,
        People.serializeBinaryToWriter
      );
    }
  }

  private _parent?: string;
  private _peopleId?: string;
  private _people?: People;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreatePeopleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreatePeopleRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.peopleId = _value.peopleId;
    this.people = _value.people ? new People(_value.people) : undefined;
    CreatePeopleRequest.refineValues(this);
  }
  get parent(): string | undefined {
    return this._parent;
  }
  set parent(value: string | undefined) {
    this._parent = value;
  }
  get peopleId(): string | undefined {
    return this._peopleId;
  }
  set peopleId(value: string | undefined) {
    this._peopleId = value;
  }
  get people(): People | undefined {
    return this._people;
  }
  set people(value: People | undefined) {
    this._people = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreatePeopleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreatePeopleRequest.AsObject {
    return {
      parent: this.parent,
      peopleId: this.peopleId,
      people: this.people ? this.people.toObject() : undefined
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
  ): CreatePeopleRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      peopleId: this.peopleId,
      people: this.people ? this.people.toProtobufJSON(options) : null
    };
  }
}
export module CreatePeopleRequest {
  /**
   * Standard JavaScript object representation for CreatePeopleRequest
   */
  export interface AsObject {
    parent?: string;
    peopleId?: string;
    people?: People.AsObject;
  }

  /**
   * Protobuf JSON representation for CreatePeopleRequest
   */
  export interface AsProtobufJSON {
    parent?: string;
    peopleId?: string;
    people?: People.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.UpdatePeopleRequest
 */
export class UpdatePeopleRequest implements GrpcMessage {
  static id = 'protos.UpdatePeopleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdatePeopleRequest();
    UpdatePeopleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdatePeopleRequest) {
    _instance.people = _instance.people || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdatePeopleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.people = new People();
          _reader.readMessage(
            _instance.people,
            People.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    UpdatePeopleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdatePeopleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.people) {
      _writer.writeMessage(
        1,
        _instance.people as any,
        People.serializeBinaryToWriter
      );
    }
  }

  private _people?: People;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdatePeopleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdatePeopleRequest.AsObject>) {
    _value = _value || {};
    this.people = _value.people ? new People(_value.people) : undefined;
    UpdatePeopleRequest.refineValues(this);
  }
  get people(): People | undefined {
    return this._people;
  }
  set people(value: People | undefined) {
    this._people = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdatePeopleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdatePeopleRequest.AsObject {
    return {
      people: this.people ? this.people.toObject() : undefined
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
  ): UpdatePeopleRequest.AsProtobufJSON {
    return {
      people: this.people ? this.people.toProtobufJSON(options) : null
    };
  }
}
export module UpdatePeopleRequest {
  /**
   * Standard JavaScript object representation for UpdatePeopleRequest
   */
  export interface AsObject {
    people?: People.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdatePeopleRequest
   */
  export interface AsProtobufJSON {
    people?: People.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.DeletePeopleRequest
 */
export class DeletePeopleRequest implements GrpcMessage {
  static id = 'protos.DeletePeopleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeletePeopleRequest();
    DeletePeopleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeletePeopleRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeletePeopleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.name = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    DeletePeopleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeletePeopleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeletePeopleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeletePeopleRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeletePeopleRequest.refineValues(this);
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
    DeletePeopleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeletePeopleRequest.AsObject {
    return {
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
  ): DeletePeopleRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeletePeopleRequest {
  /**
   * Standard JavaScript object representation for DeletePeopleRequest
   */
  export interface AsObject {
    name?: string;
  }

  /**
   * Protobuf JSON representation for DeletePeopleRequest
   */
  export interface AsProtobufJSON {
    name?: string;
  }
}
