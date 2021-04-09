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
export enum Status {
  Health = 0,
  Waring = 1,
  Damage = 2
}
/**
 * Message implementation for protos.Tool
 */
export class Tool implements GrpcMessage {
  static id = 'protos.Tool';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Tool();
    Tool.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Tool) {
    _instance.id = _instance.id || 0;
    _instance.machineId = _instance.machineId || 0;
    _instance.status = _instance.status || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Tool, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.machineId = _reader.readInt32();
          break;
        case 3:
          _instance.status = _reader.readEnum();
          break;
        default:
          _reader.skipField();
      }
    }

    Tool.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Tool, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.machineId) {
      _writer.writeInt32(2, _instance.machineId);
    }
    if (_instance.status) {
      _writer.writeEnum(3, _instance.status);
    }
  }

  private _id?: number;
  private _machineId?: number;
  private _status?: Status;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Tool to deeply clone from
   */
  constructor(_value?: RecursivePartial<Tool.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.machineId = _value.machineId;
    this.status = _value.status;
    Tool.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get machineId(): number | undefined {
    return this._machineId;
  }
  set machineId(value: number | undefined) {
    this._machineId = value;
  }
  get status(): Status | undefined {
    return this._status;
  }
  set status(value: Status | undefined) {
    this._status = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Tool.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Tool.AsObject {
    return {
      id: this.id,
      machineId: this.machineId,
      status: this.status
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
  ): Tool.AsProtobufJSON {
    return {
      id: this.id,
      machineId: this.machineId,
      status: Status[this.status ?? 0]
    };
  }
}
export module Tool {
  /**
   * Standard JavaScript object representation for Tool
   */
  export interface AsObject {
    id?: number;
    machineId?: number;
    status?: Status;
  }

  /**
   * Protobuf JSON representation for Tool
   */
  export interface AsProtobufJSON {
    id?: number;
    machineId?: number;
    status?: string;
  }
}
