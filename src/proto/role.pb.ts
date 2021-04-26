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
 * Message implementation for protos.Role
 */
export class Role implements GrpcMessage {
  static id = 'protos.Role';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Role();
    Role.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Role) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Role, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    Role.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Role, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Role to deeply clone from
   */
  constructor(_value?: RecursivePartial<Role.AsObject>) {
    _value = _value || {};
    Role.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Role.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Role.AsObject {
    return {};
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
  ): Role.AsProtobufJSON {
    return {};
  }
}
export module Role {
  /**
   * Standard JavaScript object representation for Role
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for Role
   */
  export interface AsProtobufJSON {}
}

/**
 * Message implementation for protos.ListRolesRequest
 */
export class ListRolesRequest implements GrpcMessage {
  static id = 'protos.ListRolesRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRolesRequest();
    ListRolesRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRolesRequest) {
    _instance.parent = _instance.parent || '';
    _instance.pageSize = _instance.pageSize || 0;
    _instance.pageToken = _instance.pageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRolesRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.pageSize = _reader.readInt32();
          break;
        case 3:
          _instance.pageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListRolesRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRolesRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.pageSize) {
      _writer.writeInt32(2, _instance.pageSize);
    }
    if (_instance.pageToken) {
      _writer.writeString(3, _instance.pageToken);
    }
  }

  private _parent?: string;
  private _pageSize?: number;
  private _pageToken?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRolesRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListRolesRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.pageSize = _value.pageSize;
    this.pageToken = _value.pageToken;
    ListRolesRequest.refineValues(this);
  }
  get parent(): string | undefined {
    return this._parent;
  }
  set parent(value: string | undefined) {
    this._parent = value;
  }
  get pageSize(): number | undefined {
    return this._pageSize;
  }
  set pageSize(value: number | undefined) {
    this._pageSize = value;
  }
  get pageToken(): string | undefined {
    return this._pageToken;
  }
  set pageToken(value: string | undefined) {
    this._pageToken = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    ListRolesRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRolesRequest.AsObject {
    return {
      parent: this.parent,
      pageSize: this.pageSize,
      pageToken: this.pageToken
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
  ): ListRolesRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      pageSize: this.pageSize,
      pageToken: this.pageToken
    };
  }
}
export module ListRolesRequest {
  /**
   * Standard JavaScript object representation for ListRolesRequest
   */
  export interface AsObject {
    parent?: string;
    pageSize?: number;
    pageToken?: string;
  }

  /**
   * Protobuf JSON representation for ListRolesRequest
   */
  export interface AsProtobufJSON {
    parent?: string;
    pageSize?: number;
    pageToken?: string;
  }
}

/**
 * Message implementation for protos.ListRolesResponse
 */
export class ListRolesResponse implements GrpcMessage {
  static id = 'protos.ListRolesResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListRolesResponse();
    ListRolesResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListRolesResponse) {
    _instance.roles = _instance.roles || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListRolesResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Role();
          _reader.readMessage(
            messageInitializer1,
            Role.deserializeBinaryFromReader
          );
          (_instance.roles = _instance.roles || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListRolesResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListRolesResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.roles && _instance.roles.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.roles as any,
        Role.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _roles?: Role[];
  private _nextPageToken?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListRolesResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListRolesResponse.AsObject>) {
    _value = _value || {};
    this.roles = (_value.roles || []).map(m => new Role(m));
    this.nextPageToken = _value.nextPageToken;
    ListRolesResponse.refineValues(this);
  }
  get roles(): Role[] | undefined {
    return this._roles;
  }
  set roles(value: Role[] | undefined) {
    this._roles = value;
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
    ListRolesResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListRolesResponse.AsObject {
    return {
      roles: (this.roles || []).map(m => m.toObject()),
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
  ): ListRolesResponse.AsProtobufJSON {
    return {
      roles: (this.roles || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListRolesResponse {
  /**
   * Standard JavaScript object representation for ListRolesResponse
   */
  export interface AsObject {
    roles?: Role.AsObject[];
    nextPageToken?: string;
  }

  /**
   * Protobuf JSON representation for ListRolesResponse
   */
  export interface AsProtobufJSON {
    roles?: Role.AsProtobufJSON[] | null;
    nextPageToken?: string;
  }
}

/**
 * Message implementation for protos.GetRoleRequest
 */
export class GetRoleRequest implements GrpcMessage {
  static id = 'protos.GetRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetRoleRequest();
    GetRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetRoleRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetRoleRequest,
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

    GetRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetRoleRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    GetRoleRequest.refineValues(this);
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
    GetRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetRoleRequest.AsObject {
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
  ): GetRoleRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module GetRoleRequest {
  /**
   * Standard JavaScript object representation for GetRoleRequest
   */
  export interface AsObject {
    name?: string;
  }

  /**
   * Protobuf JSON representation for GetRoleRequest
   */
  export interface AsProtobufJSON {
    name?: string;
  }
}

/**
 * Message implementation for protos.CreateRoleRequest
 */
export class CreateRoleRequest implements GrpcMessage {
  static id = 'protos.CreateRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateRoleRequest();
    CreateRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateRoleRequest) {
    _instance.parent = _instance.parent || '';
    _instance.roleId = _instance.roleId || '';
    _instance.role = _instance.role || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.roleId = _reader.readString();
          break;
        case 3:
          _instance.role = new Role();
          _reader.readMessage(_instance.role, Role.deserializeBinaryFromReader);
          break;
        default:
          _reader.skipField();
      }
    }

    CreateRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.roleId) {
      _writer.writeString(2, _instance.roleId);
    }
    if (_instance.role) {
      _writer.writeMessage(
        3,
        _instance.role as any,
        Role.serializeBinaryToWriter
      );
    }
  }

  private _parent?: string;
  private _roleId?: string;
  private _role?: Role;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateRoleRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.roleId = _value.roleId;
    this.role = _value.role ? new Role(_value.role) : undefined;
    CreateRoleRequest.refineValues(this);
  }
  get parent(): string | undefined {
    return this._parent;
  }
  set parent(value: string | undefined) {
    this._parent = value;
  }
  get roleId(): string | undefined {
    return this._roleId;
  }
  set roleId(value: string | undefined) {
    this._roleId = value;
  }
  get role(): Role | undefined {
    return this._role;
  }
  set role(value: Role | undefined) {
    this._role = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateRoleRequest.AsObject {
    return {
      parent: this.parent,
      roleId: this.roleId,
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
  ): CreateRoleRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      roleId: this.roleId,
      role: this.role ? this.role.toProtobufJSON(options) : null
    };
  }
}
export module CreateRoleRequest {
  /**
   * Standard JavaScript object representation for CreateRoleRequest
   */
  export interface AsObject {
    parent?: string;
    roleId?: string;
    role?: Role.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateRoleRequest
   */
  export interface AsProtobufJSON {
    parent?: string;
    roleId?: string;
    role?: Role.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.UpdateRoleRequest
 */
export class UpdateRoleRequest implements GrpcMessage {
  static id = 'protos.UpdateRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateRoleRequest();
    UpdateRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateRoleRequest) {
    _instance.role = _instance.role || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateRoleRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.role = new Role();
          _reader.readMessage(_instance.role, Role.deserializeBinaryFromReader);
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.role) {
      _writer.writeMessage(
        1,
        _instance.role as any,
        Role.serializeBinaryToWriter
      );
    }
  }

  private _role?: Role;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateRoleRequest.AsObject>) {
    _value = _value || {};
    this.role = _value.role ? new Role(_value.role) : undefined;
    UpdateRoleRequest.refineValues(this);
  }
  get role(): Role | undefined {
    return this._role;
  }
  set role(value: Role | undefined) {
    this._role = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateRoleRequest.AsObject {
    return {
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
  ): UpdateRoleRequest.AsProtobufJSON {
    return {
      role: this.role ? this.role.toProtobufJSON(options) : null
    };
  }
}
export module UpdateRoleRequest {
  /**
   * Standard JavaScript object representation for UpdateRoleRequest
   */
  export interface AsObject {
    role?: Role.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateRoleRequest
   */
  export interface AsProtobufJSON {
    role?: Role.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.DeleteRoleRequest
 */
export class DeleteRoleRequest implements GrpcMessage {
  static id = 'protos.DeleteRoleRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteRoleRequest();
    DeleteRoleRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteRoleRequest) {
    _instance.name = _instance.name || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteRoleRequest,
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

    DeleteRoleRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteRoleRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.name) {
      _writer.writeString(1, _instance.name);
    }
  }

  private _name?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteRoleRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteRoleRequest.AsObject>) {
    _value = _value || {};
    this.name = _value.name;
    DeleteRoleRequest.refineValues(this);
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
    DeleteRoleRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteRoleRequest.AsObject {
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
  ): DeleteRoleRequest.AsProtobufJSON {
    return {
      name: this.name
    };
  }
}
export module DeleteRoleRequest {
  /**
   * Standard JavaScript object representation for DeleteRoleRequest
   */
  export interface AsObject {
    name?: string;
  }

  /**
   * Protobuf JSON representation for DeleteRoleRequest
   */
  export interface AsProtobufJSON {
    name?: string;
  }
}
