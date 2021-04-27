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
 * Message implementation for protos.Wear
 */
export class Wear implements GrpcMessage {
  static id = 'protos.Wear';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Wear();
    Wear.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Wear) {
    _instance.id = _instance.id || 0;
    _instance.toolId = _instance.toolId || 0;
    _instance.date = _instance.date || '';
    _instance.loss = _instance.loss || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(_instance: Wear, _reader: BinaryReader) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.id = _reader.readInt32();
          break;
        case 2:
          _instance.toolId = _reader.readInt32();
          break;
        case 3:
          _instance.date = _reader.readString();
          break;
        case 4:
          _instance.loss = _reader.readFloat();
          break;
        default:
          _reader.skipField();
      }
    }

    Wear.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Wear, _writer: BinaryWriter) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
    if (_instance.toolId) {
      _writer.writeInt32(2, _instance.toolId);
    }
    if (_instance.date) {
      _writer.writeString(3, _instance.date);
    }
    if (_instance.loss) {
      _writer.writeFloat(4, _instance.loss);
    }
  }

  private _id?: number;
  private _toolId?: number;
  private _date?: string;
  private _loss?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Wear to deeply clone from
   */
  constructor(_value?: RecursivePartial<Wear.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    this.toolId = _value.toolId;
    this.date = _value.date;
    this.loss = _value.loss;
    Wear.refineValues(this);
  }
  get id(): number | undefined {
    return this._id;
  }
  set id(value: number | undefined) {
    this._id = value;
  }
  get toolId(): number | undefined {
    return this._toolId;
  }
  set toolId(value: number | undefined) {
    this._toolId = value;
  }
  get date(): string | undefined {
    return this._date;
  }
  set date(value: string | undefined) {
    this._date = value;
  }
  get loss(): number | undefined {
    return this._loss;
  }
  set loss(value: number | undefined) {
    this._loss = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Wear.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Wear.AsObject {
    return {
      id: this.id,
      toolId: this.toolId,
      date: this.date,
      loss: this.loss
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
  ): Wear.AsProtobufJSON {
    return {
      id: this.id,
      toolId: this.toolId,
      date: this.date,
      loss: this.loss
    };
  }
}
export module Wear {
  /**
   * Standard JavaScript object representation for Wear
   */
  export interface AsObject {
    id?: number;
    toolId?: number;
    date?: string;
    loss?: number;
  }

  /**
   * Protobuf JSON representation for Wear
   */
  export interface AsProtobufJSON {
    id?: number;
    toolId?: number;
    date?: string;
    loss?: number;
  }
}
