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
 * Message implementation for protos.Result
 */
export class Result implements GrpcMessage {
  static id = 'protos.Result';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Result();
    Result.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Result) {
    _instance.code = _instance.code || 0;
    _instance.message = _instance.message || '';
    _instance.data = _instance.data || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Result, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.code = _reader.readInt32();
          break;
        case 2:
          _instance.message = _reader.readString();
          break;
        case 3:
          _instance.data = new googleProtobuf000.Any();
          _reader.readMessage(
            _instance.data,
            googleProtobuf000.Any.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    Result.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Result, _writer: BinaryWriter) {
    if (_instance.code) {
      _writer.writeInt32(1, _instance.code);
    }
    if (_instance.message) {
      _writer.writeString(2, _instance.message);
    }
    if (_instance.data) {
      _writer.writeMessage(
        3,
        _instance.data as any,
        googleProtobuf000.Any.serializeBinaryToWriter
      );
    }
  }

  private _code?: number;
  private _message?: string;
  private _data?: googleProtobuf000.Any;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Result to deeply clone from
   */
  constructor(_value?: RecursivePartial<Result.AsObject>) {
    _value = _value || {};
    this.code = _value.code;
    this.message = _value.message;
    this.data = _value.data
      ? new googleProtobuf000.Any(_value.data)
      : undefined;
    Result.refineValues(this);
  }
  get code(): number | undefined {
    return this._code;
  }
  set code(value: number | undefined) {
    this._code = value;
  }
  get message(): string | undefined {
    return this._message;
  }
  set message(value: string | undefined) {
    this._message = value;
  }
  get data(): googleProtobuf000.Any | undefined {
    return this._data;
  }
  set data(value: googleProtobuf000.Any | undefined) {
    this._data = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Result.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Result.AsObject {
    return {
      code: this.code,
      message: this.message,
      data: this.data ? this.data.toObject() : undefined
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
  ): Result.AsProtobufJSON {
    return {
      code: this.code,
      message: this.message,
      data: this.data ? this.data.toProtobufJSON(options) : null
    };
  }
}
export module Result {
  /**
   * Standard JavaScript object representation for Result
   */
  export interface AsObject {
    code?: number;
    message?: string;
    data?: googleProtobuf000.Any.AsObject;
  }

  /**
   * Protobuf JSON representation for Result
   */
  export interface AsProtobufJSON {
    code?: number;
    message?: string;
    data?: googleProtobuf000.Any.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.Empty
 */
export class Empty implements GrpcMessage {
  static id = 'protos.Empty';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Empty();
    Empty.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Empty) {}

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Empty, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        default:
          _reader.skipField();
      }
    }

    Empty.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Empty, _writer: BinaryWriter) {}

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Empty to deeply clone from
   */
  constructor(_value?: RecursivePartial<Empty.AsObject>) {
    _value = _value || {};
    Empty.refineValues(this);
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Empty.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Empty.AsObject {
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
  ): Empty.AsProtobufJSON {
    return {};
  }
}
export module Empty {
  /**
   * Standard JavaScript object representation for Empty
   */
  export interface AsObject {}

  /**
   * Protobuf JSON representation for Empty
   */
  export interface AsProtobufJSON {}
}
