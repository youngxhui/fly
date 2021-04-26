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

/**
 * Message implementation for protos.GetUserRequest
 */
export class GetUserRequest implements GrpcMessage {
  static id = 'protos.GetUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetUserRequest();
    GetUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetUserRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetUserRequest,
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

    GetUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetUserRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    GetUserRequest.refineValues(this);
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
    GetUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetUserRequest.AsObject {
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
  ): GetUserRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module GetUserRequest {
  /**
   * Standard JavaScript object representation for GetUserRequest
   */
  export interface AsObject {
    id?: number;
  }

  /**
   * Protobuf JSON representation for GetUserRequest
   */
  export interface AsProtobufJSON {
    id?: number;
  }
}

/**
 * Message implementation for protos.LoginUserRequest
 */
export class LoginUserRequest implements GrpcMessage {
  static id = 'protos.LoginUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginUserRequest();
    LoginUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginUserRequest) {
    _instance.user = _instance.user || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 4:
          _instance.user = new User();
          _reader.readMessage(_instance.user, User.deserializeBinaryFromReader);
          break;
        default:
          _reader.skipField();
      }
    }

    LoginUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.user) {
      _writer.writeMessage(
        4,
        _instance.user as any,
        User.serializeBinaryToWriter
      );
    }
  }

  private _user?: User;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginUserRequest.AsObject>) {
    _value = _value || {};
    this.user = _value.user ? new User(_value.user) : undefined;
    LoginUserRequest.refineValues(this);
  }
  get user(): User | undefined {
    return this._user;
  }
  set user(value: User | undefined) {
    this._user = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginUserRequest.AsObject {
    return {
      user: this.user ? this.user.toObject() : undefined
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
  ): LoginUserRequest.AsProtobufJSON {
    return {
      user: this.user ? this.user.toProtobufJSON(options) : null
    };
  }
}
export module LoginUserRequest {
  /**
   * Standard JavaScript object representation for LoginUserRequest
   */
  export interface AsObject {
    user?: User.AsObject;
  }

  /**
   * Protobuf JSON representation for LoginUserRequest
   */
  export interface AsProtobufJSON {
    user?: User.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.RegisterUserRequest
 */
export class RegisterUserRequest implements GrpcMessage {
  static id = 'protos.RegisterUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new RegisterUserRequest();
    RegisterUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: RegisterUserRequest) {
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
    _instance.user = _instance.user || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: RegisterUserRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.username = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        case 3:
          _instance.user = new User();
          _reader.readMessage(_instance.user, User.deserializeBinaryFromReader);
          break;
        default:
          _reader.skipField();
      }
    }

    RegisterUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: RegisterUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.username) {
      _writer.writeString(1, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
    if (_instance.user) {
      _writer.writeMessage(
        3,
        _instance.user as any,
        User.serializeBinaryToWriter
      );
    }
  }

  private _username?: string;
  private _password?: string;
  private _user?: User;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of RegisterUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<RegisterUserRequest.AsObject>) {
    _value = _value || {};
    this.username = _value.username;
    this.password = _value.password;
    this.user = _value.user ? new User(_value.user) : undefined;
    RegisterUserRequest.refineValues(this);
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get user(): User | undefined {
    return this._user;
  }
  set user(value: User | undefined) {
    this._user = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    RegisterUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): RegisterUserRequest.AsObject {
    return {
      username: this.username,
      password: this.password,
      user: this.user ? this.user.toObject() : undefined
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
  ): RegisterUserRequest.AsProtobufJSON {
    return {
      username: this.username,
      password: this.password,
      user: this.user ? this.user.toProtobufJSON(options) : null
    };
  }
}
export module RegisterUserRequest {
  /**
   * Standard JavaScript object representation for RegisterUserRequest
   */
  export interface AsObject {
    username?: string;
    password?: string;
    user?: User.AsObject;
  }

  /**
   * Protobuf JSON representation for RegisterUserRequest
   */
  export interface AsProtobufJSON {
    username?: string;
    password?: string;
    user?: User.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.DeleteUserRequest
 */
export class DeleteUserRequest implements GrpcMessage {
  static id = 'protos.DeleteUserRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteUserRequest();
    DeleteUserRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteUserRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteUserRequest,
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

    DeleteUserRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteUserRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteUserRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteUserRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteUserRequest.refineValues(this);
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
    DeleteUserRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteUserRequest.AsObject {
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
  ): DeleteUserRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteUserRequest {
  /**
   * Standard JavaScript object representation for DeleteUserRequest
   */
  export interface AsObject {
    id?: number;
  }

  /**
   * Protobuf JSON representation for DeleteUserRequest
   */
  export interface AsProtobufJSON {
    id?: number;
  }
}

/**
 * Message implementation for protos.User
 */
export class User implements GrpcMessage {
  static id = 'protos.User';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new User();
    User.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: User) {
    _instance.id = _instance.id || 0;
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
    _instance.device = _instance.device || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: User, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 4:
          _instance.id = _reader.readInt32();
          break;
        case 1:
          _instance.username = _reader.readString();
          break;
        case 2:
          _instance.password = _reader.readString();
          break;
        case 3:
          _instance.device = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    User.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: User, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(4, _instance.id);
    }
    if (_instance.username) {
      _writer.writeString(1, _instance.username);
    }
    if (_instance.password) {
      _writer.writeString(2, _instance.password);
    }
    if (_instance.device) {
      _writer.writeString(3, _instance.device);
    }
  }

  private _id?: number;
  private _username?: string;
  private _password?: string;
  private _device?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of User to deeply clone from
   */
  constructor(_value?: RecursivePartial<User.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.username = _value.username;
    this.password = _value.password;
    this.device = _value.device;
    User.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get username(): string | undefined {
    return this._username;
  }
  set username(value: string | undefined) {
    this._username = value;
  }
  get password(): string | undefined {
    return this._password;
  }
  set password(value: string | undefined) {
    this._password = value;
  }
  get device(): string | undefined {
    return this._device;
  }
  set device(value: string | undefined) {
    this._device = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    User.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): User.AsObject {
    return {
      id: this.id,
      username: this.username,
      password: this.password,
      device: this.device
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
  ): User.AsProtobufJSON {
    return {
      id: this.id,
      username: this.username,
      password: this.password,
      device: this.device
    };
  }
}
export module User {
  /**
   * Standard JavaScript object representation for User
   */
  export interface AsObject {
    id?: number;
    username?: string;
    password?: string;
    device?: string;
  }

  /**
   * Protobuf JSON representation for User
   */
  export interface AsProtobufJSON {
    id?: number;
    username?: string;
    password?: string;
    device?: string;
  }
}

/**
 * Message implementation for protos.LoginOffResponse
 */
export class LoginOffResponse implements GrpcMessage {
  static id = 'protos.LoginOffResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginOffResponse();
    LoginOffResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginOffResponse) {
    _instance.message = _instance.message || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginOffResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.message = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LoginOffResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginOffResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.message) {
      _writer.writeString(1, _instance.message);
    }
  }

  private _message?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginOffResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginOffResponse.AsObject>) {
    _value = _value || {};
    this.message = _value.message;
    LoginOffResponse.refineValues(this);
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginOffResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginOffResponse.AsObject {
    return {
      message: this.message
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
  ): LoginOffResponse.AsProtobufJSON {
    return {
      message: this.message
    };
  }
}
export module LoginOffResponse {
  /**
   * Standard JavaScript object representation for LoginOffResponse
   */
  export interface AsObject {
    message?: string;
  }

  /**
   * Protobuf JSON representation for LoginOffResponse
   */
  export interface AsProtobufJSON {
    message?: string;
  }
}

/**
 * Message implementation for protos.LoginUserResponse
 */
export class LoginUserResponse implements GrpcMessage {
  static id = 'protos.LoginUserResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new LoginUserResponse();
    LoginUserResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: LoginUserResponse) {
    _instance.token = _instance.token || '';
    _instance.header = _instance.header || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: LoginUserResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.token = _reader.readString();
          break;
        case 2:
          _instance.header = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    LoginUserResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: LoginUserResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.token) {
      _writer.writeString(1, _instance.token);
    }
    if (_instance.header) {
      _writer.writeString(2, _instance.header);
    }
  }

  private _token?: string;
  private _header?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of LoginUserResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<LoginUserResponse.AsObject>) {
    _value = _value || {};
    this.token = _value.token;
    this.header = _value.header;
    LoginUserResponse.refineValues(this);
  }
  get token(): string | undefined {
    return this._token;
  }
  set token(value: string | undefined) {
    this._token = value;
  }
  get header(): string | undefined {
    return this._header;
  }
  set header(value: string | undefined) {
    this._header = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    LoginUserResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): LoginUserResponse.AsObject {
    return {
      token: this.token,
      header: this.header
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
  ): LoginUserResponse.AsProtobufJSON {
    return {
      token: this.token,
      header: this.header
    };
  }
}
export module LoginUserResponse {
  /**
   * Standard JavaScript object representation for LoginUserResponse
   */
  export interface AsObject {
    token?: string;
    header?: string;
  }

  /**
   * Protobuf JSON representation for LoginUserResponse
   */
  export interface AsProtobufJSON {
    token?: string;
    header?: string;
  }
}
