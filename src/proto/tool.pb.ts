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
import * as googleApi000 from './google/api/http.pb';
import * as googleProtobuf001 from '@ngx-grpc/well-known-types';
import * as googleProtobuf002 from '@ngx-grpc/well-known-types';
import * as googleApi003 from './google/api/annotations.pb';
export enum Status {
  Health = 0,
  Waring = 1,
  Damage = 2
}
/**
 * Message implementation for protos.ListToolsRequest
 */
export class ListToolsRequest implements GrpcMessage {
  static id = 'protos.ListToolsRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListToolsRequest();
    ListToolsRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListToolsRequest) {
    _instance.page = _instance.page || 0;
    _instance.size = _instance.size || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListToolsRequest,
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
        default:
          _reader.skipField();
      }
    }

    ListToolsRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListToolsRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.page) {
      _writer.writeInt32(1, _instance.page);
    }
    if (_instance.size) {
      _writer.writeInt32(2, _instance.size);
    }
  }

  private _page?: number;
  private _size?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListToolsRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListToolsRequest.AsObject>) {
    _value = _value || {};
    this.page = _value.page;
    this.size = _value.size;
    ListToolsRequest.refineValues(this);
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
    ListToolsRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListToolsRequest.AsObject {
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
  ): ListToolsRequest.AsProtobufJSON {
    return {
      page: this.page,
      size: this.size
    };
  }
}
export module ListToolsRequest {
  /**
   * Standard JavaScript object representation for ListToolsRequest
   */
  export interface AsObject {
    page?: number;
    size?: number;
  }

  /**
   * Protobuf JSON representation for ListToolsRequest
   */
  export interface AsProtobufJSON {
    page?: number;
    size?: number;
  }
}

/**
 * Message implementation for protos.ListToolsResponse
 */
export class ListToolsResponse implements GrpcMessage {
  static id = 'protos.ListToolsResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new ListToolsResponse();
    ListToolsResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: ListToolsResponse) {
    _instance.tools = _instance.tools || [];
    _instance.nextPageToken = _instance.nextPageToken || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: ListToolsResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          const messageInitializer1 = new Tool();
          _reader.readMessage(
            messageInitializer1,
            Tool.deserializeBinaryFromReader
          );
          (_instance.tools = _instance.tools || []).push(messageInitializer1);
          break;
        case 2:
          _instance.nextPageToken = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    ListToolsResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: ListToolsResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.tools && _instance.tools.length) {
      _writer.writeRepeatedMessage(
        1,
        _instance.tools as any,
        Tool.serializeBinaryToWriter
      );
    }
    if (_instance.nextPageToken) {
      _writer.writeString(2, _instance.nextPageToken);
    }
  }

  private _tools?: Tool[];
  private _nextPageToken?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of ListToolsResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<ListToolsResponse.AsObject>) {
    _value = _value || {};
    this.tools = (_value.tools || []).map(m => new Tool(m));
    this.nextPageToken = _value.nextPageToken;
    ListToolsResponse.refineValues(this);
  }
  get tools(): Tool[] | undefined {
    return this._tools;
  }
  set tools(value: Tool[] | undefined) {
    this._tools = value;
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
    ListToolsResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): ListToolsResponse.AsObject {
    return {
      tools: (this.tools || []).map(m => m.toObject()),
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
  ): ListToolsResponse.AsProtobufJSON {
    return {
      tools: (this.tools || []).map(m => m.toProtobufJSON(options)),
      nextPageToken: this.nextPageToken
    };
  }
}
export module ListToolsResponse {
  /**
   * Standard JavaScript object representation for ListToolsResponse
   */
  export interface AsObject {
    tools?: Tool.AsObject[];
    nextPageToken?: string;
  }

  /**
   * Protobuf JSON representation for ListToolsResponse
   */
  export interface AsProtobufJSON {
    tools?: Tool.AsProtobufJSON[] | null;
    nextPageToken?: string;
  }
}

/**
 * Message implementation for protos.GetToolRequest
 */
export class GetToolRequest implements GrpcMessage {
  static id = 'protos.GetToolRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new GetToolRequest();
    GetToolRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: GetToolRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: GetToolRequest,
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

    GetToolRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: GetToolRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of GetToolRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<GetToolRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    GetToolRequest.refineValues(this);
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
    GetToolRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): GetToolRequest.AsObject {
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
  ): GetToolRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module GetToolRequest {
  /**
   * Standard JavaScript object representation for GetToolRequest
   */
  export interface AsObject {
    id?: number;
  }

  /**
   * Protobuf JSON representation for GetToolRequest
   */
  export interface AsProtobufJSON {
    id?: number;
  }
}

/**
 * Message implementation for protos.CreateToolRequest
 */
export class CreateToolRequest implements GrpcMessage {
  static id = 'protos.CreateToolRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CreateToolRequest();
    CreateToolRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CreateToolRequest) {
    _instance.parent = _instance.parent || '';
    _instance.toolId = _instance.toolId || '';
    _instance.tool = _instance.tool || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CreateToolRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.parent = _reader.readString();
          break;
        case 2:
          _instance.toolId = _reader.readString();
          break;
        case 3:
          _instance.tool = new Tool();
          _reader.readMessage(_instance.tool, Tool.deserializeBinaryFromReader);
          break;
        default:
          _reader.skipField();
      }
    }

    CreateToolRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CreateToolRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.parent) {
      _writer.writeString(1, _instance.parent);
    }
    if (_instance.toolId) {
      _writer.writeString(2, _instance.toolId);
    }
    if (_instance.tool) {
      _writer.writeMessage(
        3,
        _instance.tool as any,
        Tool.serializeBinaryToWriter
      );
    }
  }

  private _parent?: string;
  private _toolId?: string;
  private _tool?: Tool;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CreateToolRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CreateToolRequest.AsObject>) {
    _value = _value || {};
    this.parent = _value.parent;
    this.toolId = _value.toolId;
    this.tool = _value.tool ? new Tool(_value.tool) : undefined;
    CreateToolRequest.refineValues(this);
  }
  get parent(): string | undefined {
    return this._parent;
  }
  set parent(value: string | undefined) {
    this._parent = value;
  }
  get toolId(): string | undefined {
    return this._toolId;
  }
  set toolId(value: string | undefined) {
    this._toolId = value;
  }
  get tool(): Tool | undefined {
    return this._tool;
  }
  set tool(value: Tool | undefined) {
    this._tool = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CreateToolRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CreateToolRequest.AsObject {
    return {
      parent: this.parent,
      toolId: this.toolId,
      tool: this.tool ? this.tool.toObject() : undefined
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
  ): CreateToolRequest.AsProtobufJSON {
    return {
      parent: this.parent,
      toolId: this.toolId,
      tool: this.tool ? this.tool.toProtobufJSON(options) : null
    };
  }
}
export module CreateToolRequest {
  /**
   * Standard JavaScript object representation for CreateToolRequest
   */
  export interface AsObject {
    parent?: string;
    toolId?: string;
    tool?: Tool.AsObject;
  }

  /**
   * Protobuf JSON representation for CreateToolRequest
   */
  export interface AsProtobufJSON {
    parent?: string;
    toolId?: string;
    tool?: Tool.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.UpdateToolRequest
 */
export class UpdateToolRequest implements GrpcMessage {
  static id = 'protos.UpdateToolRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new UpdateToolRequest();
    UpdateToolRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: UpdateToolRequest) {
    _instance.tool = _instance.tool || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: UpdateToolRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.tool = new Tool();
          _reader.readMessage(_instance.tool, Tool.deserializeBinaryFromReader);
          break;
        default:
          _reader.skipField();
      }
    }

    UpdateToolRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: UpdateToolRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.tool) {
      _writer.writeMessage(
        1,
        _instance.tool as any,
        Tool.serializeBinaryToWriter
      );
    }
  }

  private _tool?: Tool;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of UpdateToolRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<UpdateToolRequest.AsObject>) {
    _value = _value || {};
    this.tool = _value.tool ? new Tool(_value.tool) : undefined;
    UpdateToolRequest.refineValues(this);
  }
  get tool(): Tool | undefined {
    return this._tool;
  }
  set tool(value: Tool | undefined) {
    this._tool = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    UpdateToolRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): UpdateToolRequest.AsObject {
    return {
      tool: this.tool ? this.tool.toObject() : undefined
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
  ): UpdateToolRequest.AsProtobufJSON {
    return {
      tool: this.tool ? this.tool.toProtobufJSON(options) : null
    };
  }
}
export module UpdateToolRequest {
  /**
   * Standard JavaScript object representation for UpdateToolRequest
   */
  export interface AsObject {
    tool?: Tool.AsObject;
  }

  /**
   * Protobuf JSON representation for UpdateToolRequest
   */
  export interface AsProtobufJSON {
    tool?: Tool.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for protos.DeleteToolRequest
 */
export class DeleteToolRequest implements GrpcMessage {
  static id = 'protos.DeleteToolRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new DeleteToolRequest();
    DeleteToolRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: DeleteToolRequest) {
    _instance.id = _instance.id || 0;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: DeleteToolRequest,
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

    DeleteToolRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: DeleteToolRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.id) {
      _writer.writeInt32(1, _instance.id);
    }
  }

  private _id?: number;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of DeleteToolRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<DeleteToolRequest.AsObject>) {
    _value = _value || {};
    this.id = _value.id;
    DeleteToolRequest.refineValues(this);
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
    DeleteToolRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): DeleteToolRequest.AsObject {
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
  ): DeleteToolRequest.AsProtobufJSON {
    return {
      id: this.id
    };
  }
}
export module DeleteToolRequest {
  /**
   * Standard JavaScript object representation for DeleteToolRequest
   */
  export interface AsObject {
    id?: number;
  }

  /**
   * Protobuf JSON representation for DeleteToolRequest
   */
  export interface AsProtobufJSON {
    id?: number;
  }
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
