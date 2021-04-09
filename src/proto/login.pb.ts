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
import * as protos001 from './base.pb';
/**
 * Message implementation for protos.UserInfo
 */
export class UserInfo implements GrpcMessage {
  static id = 'protos.UserInfo';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UserInfo();
    UserInfo.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UserInfo) {
    _instance.username = _instance.username || '';
    _instance.password = _instance.password || '';
    _instance.device = _instance.device || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UserInfo,
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
          _instance.device = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    UserInfo.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: UserInfo, _writer: BinaryWriter) {
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

  private _username?: string;
  private _password?: string;
  private _device?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UserInfo to deeply clone from
   */
  constructor(_value?: RecursivePartial<UserInfo.AsObject>) {
    _value = _value || {};
    this.username = _value.username;
    this.password = _value.password;
    this.device = _value.device;
    UserInfo.refineValues(this);
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
    UserInfo.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UserInfo.AsObject {
    return {
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
  ): UserInfo.AsProtobufJSON {
    return {
      username: this.username,
      password: this.password,
      device: this.device
    };
  }
}
export module UserInfo {
  /**
   * Standard JavaScript object representation for UserInfo
   */
  export interface AsObject {
    username?: string;
    password?: string;
    device?: string;
  }

  /**
   * Protobuf JSON representation for UserInfo
   */
  export interface AsProtobufJSON {
    username?: string;
    password?: string;
    device?: string;
  }
}

/**
 * Message implementation for protos.Success
 */
export class Success implements GrpcMessage {
  static id = 'protos.Success';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Success();
    Success.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Success) {
    _instance.token = _instance.token || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Success,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.token = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Success.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Success, _writer: BinaryWriter) {
    if (_instance.token) {
      _writer.writeString(1, _instance.token);
    }
  }

  private _token?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Success to deeply clone from
   */
  constructor(_value?: RecursivePartial<Success.AsObject>) {
    _value = _value || {};
    this.token = _value.token;
    Success.refineValues(this);
  }
  get token(): string | undefined {
    return this._token;
  }
  set token(value: string | undefined) {
    this._token = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Success.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Success.AsObject {
    return {
      token: this.token
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
  ): Success.AsProtobufJSON {
    return {
      token: this.token
    };
  }
}
export module Success {
  /**
   * Standard JavaScript object representation for Success
   */
  export interface AsObject {
    token?: string;
  }

  /**
   * Protobuf JSON representation for Success
   */
  export interface AsProtobufJSON {
    token?: string;
  }
}
