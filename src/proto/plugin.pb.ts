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
 * Message implementation for google.protobuf.compiler.Version
 */
export class Version implements GrpcMessage {
  static id = 'google.protobuf.compiler.Version';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new Version();
    Version.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: Version) {
    _instance.major = _instance.major || 0;
    _instance.minor = _instance.minor || 0;
    _instance.patch = _instance.patch || 0;
    _instance.suffix = _instance.suffix || '';
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: Version,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.major = _reader.readInt32();
          break;
        case 2:
          _instance.minor = _reader.readInt32();
          break;
        case 3:
          _instance.patch = _reader.readInt32();
          break;
        case 4:
          _instance.suffix = _reader.readString();
          break;
        default:
          _reader.skipField();
      }
    }

    Version.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(_instance: Version, _writer: BinaryWriter) {
    if (_instance.major) {
      _writer.writeInt32(1, _instance.major);
    }
    if (_instance.minor) {
      _writer.writeInt32(2, _instance.minor);
    }
    if (_instance.patch) {
      _writer.writeInt32(3, _instance.patch);
    }
    if (_instance.suffix) {
      _writer.writeString(4, _instance.suffix);
    }
  }

  private _major?: number;
  private _minor?: number;
  private _patch?: number;
  private _suffix?: string;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of Version to deeply clone from
   */
  constructor(_value?: RecursivePartial<Version.AsObject>) {
    _value = _value || {};
    this.major = _value.major;
    this.minor = _value.minor;
    this.patch = _value.patch;
    this.suffix = _value.suffix;
    Version.refineValues(this);
  }
  get major(): number | undefined {
    return this._major;
  }
  set major(value: number | undefined) {
    this._major = value;
  }
  get minor(): number | undefined {
    return this._minor;
  }
  set minor(value: number | undefined) {
    this._minor = value;
  }
  get patch(): number | undefined {
    return this._patch;
  }
  set patch(value: number | undefined) {
    this._patch = value;
  }
  get suffix(): string | undefined {
    return this._suffix;
  }
  set suffix(value: string | undefined) {
    this._suffix = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    Version.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): Version.AsObject {
    return {
      major: this.major,
      minor: this.minor,
      patch: this.patch,
      suffix: this.suffix
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
  ): Version.AsProtobufJSON {
    return {
      major: this.major,
      minor: this.minor,
      patch: this.patch,
      suffix: this.suffix
    };
  }
}
export module Version {
  /**
   * Standard JavaScript object representation for Version
   */
  export interface AsObject {
    major?: number;
    minor?: number;
    patch?: number;
    suffix?: string;
  }

  /**
   * Protobuf JSON representation for Version
   */
  export interface AsProtobufJSON {
    major?: number;
    minor?: number;
    patch?: number;
    suffix?: string;
  }
}

/**
 * Message implementation for google.protobuf.compiler.CodeGeneratorRequest
 */
export class CodeGeneratorRequest implements GrpcMessage {
  static id = 'google.protobuf.compiler.CodeGeneratorRequest';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CodeGeneratorRequest();
    CodeGeneratorRequest.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CodeGeneratorRequest) {
    _instance.fileToGenerate = _instance.fileToGenerate || [];
    _instance.parameter = _instance.parameter || '';
    _instance.protoFile = _instance.protoFile || [];
    _instance.compilerVersion = _instance.compilerVersion || undefined;
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CodeGeneratorRequest,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          (_instance.fileToGenerate = _instance.fileToGenerate || []).push(
            _reader.readString()
          );
          break;
        case 2:
          _instance.parameter = _reader.readString();
          break;
        case 15:
          const messageInitializer15 = new googleProtobuf000.FileDescriptorProto();
          _reader.readMessage(
            messageInitializer15,
            googleProtobuf000.FileDescriptorProto.deserializeBinaryFromReader
          );
          (_instance.protoFile = _instance.protoFile || []).push(
            messageInitializer15
          );
          break;
        case 3:
          _instance.compilerVersion = new Version();
          _reader.readMessage(
            _instance.compilerVersion,
            Version.deserializeBinaryFromReader
          );
          break;
        default:
          _reader.skipField();
      }
    }

    CodeGeneratorRequest.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CodeGeneratorRequest,
    _writer: BinaryWriter
  ) {
    if (_instance.fileToGenerate && _instance.fileToGenerate.length) {
      _writer.writeRepeatedString(1, _instance.fileToGenerate);
    }
    if (_instance.parameter) {
      _writer.writeString(2, _instance.parameter);
    }
    if (_instance.protoFile && _instance.protoFile.length) {
      _writer.writeRepeatedMessage(
        15,
        _instance.protoFile as any,
        googleProtobuf000.FileDescriptorProto.serializeBinaryToWriter
      );
    }
    if (_instance.compilerVersion) {
      _writer.writeMessage(
        3,
        _instance.compilerVersion as any,
        Version.serializeBinaryToWriter
      );
    }
  }

  private _fileToGenerate?: string[];
  private _parameter?: string;
  private _protoFile?: googleProtobuf000.FileDescriptorProto[];
  private _compilerVersion?: Version;

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CodeGeneratorRequest to deeply clone from
   */
  constructor(_value?: RecursivePartial<CodeGeneratorRequest.AsObject>) {
    _value = _value || {};
    this.fileToGenerate = (_value.fileToGenerate || []).slice();
    this.parameter = _value.parameter;
    this.protoFile = (_value.protoFile || []).map(
      m => new googleProtobuf000.FileDescriptorProto(m)
    );
    this.compilerVersion = _value.compilerVersion
      ? new Version(_value.compilerVersion)
      : undefined;
    CodeGeneratorRequest.refineValues(this);
  }
  get fileToGenerate(): string[] | undefined {
    return this._fileToGenerate;
  }
  set fileToGenerate(value: string[] | undefined) {
    this._fileToGenerate = value;
  }
  get parameter(): string | undefined {
    return this._parameter;
  }
  set parameter(value: string | undefined) {
    this._parameter = value;
  }
  get protoFile(): googleProtobuf000.FileDescriptorProto[] | undefined {
    return this._protoFile;
  }
  set protoFile(value: googleProtobuf000.FileDescriptorProto[] | undefined) {
    this._protoFile = value;
  }
  get compilerVersion(): Version | undefined {
    return this._compilerVersion;
  }
  set compilerVersion(value: Version | undefined) {
    this._compilerVersion = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CodeGeneratorRequest.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CodeGeneratorRequest.AsObject {
    return {
      fileToGenerate: (this.fileToGenerate || []).slice(),
      parameter: this.parameter,
      protoFile: (this.protoFile || []).map(m => m.toObject()),
      compilerVersion: this.compilerVersion
        ? this.compilerVersion.toObject()
        : undefined
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
  ): CodeGeneratorRequest.AsProtobufJSON {
    return {
      fileToGenerate: (this.fileToGenerate || []).slice(),
      parameter: this.parameter,
      protoFile: (this.protoFile || []).map(m => m.toProtobufJSON(options)),
      compilerVersion: this.compilerVersion
        ? this.compilerVersion.toProtobufJSON(options)
        : null
    };
  }
}
export module CodeGeneratorRequest {
  /**
   * Standard JavaScript object representation for CodeGeneratorRequest
   */
  export interface AsObject {
    fileToGenerate?: string[];
    parameter?: string;
    protoFile?: googleProtobuf000.FileDescriptorProto.AsObject[];
    compilerVersion?: Version.AsObject;
  }

  /**
   * Protobuf JSON representation for CodeGeneratorRequest
   */
  export interface AsProtobufJSON {
    fileToGenerate?: string[];
    parameter?: string;
    protoFile?: googleProtobuf000.FileDescriptorProto.AsProtobufJSON[] | null;
    compilerVersion?: Version.AsProtobufJSON | null;
  }
}

/**
 * Message implementation for google.protobuf.compiler.CodeGeneratorResponse
 */
export class CodeGeneratorResponse implements GrpcMessage {
  static id = 'google.protobuf.compiler.CodeGeneratorResponse';

  /**
   * Deserialize binary data to message
   * @param instance message instance
   */
  static deserializeBinary(bytes: ByteSource) {
    const instance = new CodeGeneratorResponse();
    CodeGeneratorResponse.deserializeBinaryFromReader(
      instance,
      new BinaryReader(bytes)
    );
    return instance;
  }

  /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */
  static refineValues(_instance: CodeGeneratorResponse) {
    _instance.error = _instance.error || '';
    _instance.supportedFeatures = _instance.supportedFeatures || '0';
    _instance.file = _instance.file || [];
  }

  /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */
  static deserializeBinaryFromReader(
    _instance: CodeGeneratorResponse,
    _reader: BinaryReader
  ) {
    while (_reader.nextField()) {
      if (_reader.isEndGroup()) break;

      switch (_reader.getFieldNumber()) {
        case 1:
          _instance.error = _reader.readString();
          break;
        case 2:
          _instance.supportedFeatures = _reader.readUint64String();
          break;
        case 15:
          const messageInitializer15 = new CodeGeneratorResponse.File();
          _reader.readMessage(
            messageInitializer15,
            CodeGeneratorResponse.File.deserializeBinaryFromReader
          );
          (_instance.file = _instance.file || []).push(messageInitializer15);
          break;
        default:
          _reader.skipField();
      }
    }

    CodeGeneratorResponse.refineValues(_instance);
  }

  /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */
  static serializeBinaryToWriter(
    _instance: CodeGeneratorResponse,
    _writer: BinaryWriter
  ) {
    if (_instance.error) {
      _writer.writeString(1, _instance.error);
    }
    if (_instance.supportedFeatures) {
      _writer.writeUint64String(2, _instance.supportedFeatures);
    }
    if (_instance.file && _instance.file.length) {
      _writer.writeRepeatedMessage(
        15,
        _instance.file as any,
        CodeGeneratorResponse.File.serializeBinaryToWriter
      );
    }
  }

  private _error?: string;
  private _supportedFeatures?: string;
  private _file?: CodeGeneratorResponse.File[];

  /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of CodeGeneratorResponse to deeply clone from
   */
  constructor(_value?: RecursivePartial<CodeGeneratorResponse.AsObject>) {
    _value = _value || {};
    this.error = _value.error;
    this.supportedFeatures = _value.supportedFeatures;
    this.file = (_value.file || []).map(m => new CodeGeneratorResponse.File(m));
    CodeGeneratorResponse.refineValues(this);
  }
  get error(): string | undefined {
    return this._error;
  }
  set error(value: string | undefined) {
    this._error = value;
  }
  get supportedFeatures(): string | undefined {
    return this._supportedFeatures;
  }
  set supportedFeatures(value: string | undefined) {
    this._supportedFeatures = value;
  }
  get file(): CodeGeneratorResponse.File[] | undefined {
    return this._file;
  }
  set file(value: CodeGeneratorResponse.File[] | undefined) {
    this._file = value;
  }

  /**
   * Serialize message to binary data
   * @param instance message instance
   */
  serializeBinary() {
    const writer = new BinaryWriter();
    CodeGeneratorResponse.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
  }

  /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */
  toObject(): CodeGeneratorResponse.AsObject {
    return {
      error: this.error,
      supportedFeatures: this.supportedFeatures,
      file: (this.file || []).map(m => m.toObject())
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
  ): CodeGeneratorResponse.AsProtobufJSON {
    return {
      error: this.error,
      supportedFeatures: this.supportedFeatures,
      file: (this.file || []).map(m => m.toProtobufJSON(options))
    };
  }
}
export module CodeGeneratorResponse {
  /**
   * Standard JavaScript object representation for CodeGeneratorResponse
   */
  export interface AsObject {
    error?: string;
    supportedFeatures?: string;
    file?: CodeGeneratorResponse.File.AsObject[];
  }

  /**
   * Protobuf JSON representation for CodeGeneratorResponse
   */
  export interface AsProtobufJSON {
    error?: string;
    supportedFeatures?: string;
    file?: CodeGeneratorResponse.File.AsProtobufJSON[] | null;
  }
  export enum Feature {
    FEATURE_NONE = 0,
    FEATURE_PROTO3_OPTIONAL = 1
  }
  /**
   * Message implementation for google.protobuf.compiler.File
   */
  export class File implements GrpcMessage {
    static id = 'google.protobuf.compiler.File';

    /**
     * Deserialize binary data to message
     * @param instance message instance
     */
    static deserializeBinary(bytes: ByteSource) {
      const instance = new File();
      File.deserializeBinaryFromReader(instance, new BinaryReader(bytes));
      return instance;
    }

    /**
     * Check all the properties and set default protobuf values if necessary
     * @param _instance message instance
     */
    static refineValues(_instance: File) {
      _instance.name = _instance.name || '';
      _instance.insertionPoint = _instance.insertionPoint || '';
      _instance.content = _instance.content || '';
      _instance.generatedCodeInfo = _instance.generatedCodeInfo || undefined;
    }

    /**
     * Deserializes / reads binary message into message instance using provided binary reader
     * @param _instance message instance
     * @param _reader binary reader instance
     */
    static deserializeBinaryFromReader(_instance: File, _reader: BinaryReader) {
      while (_reader.nextField()) {
        if (_reader.isEndGroup()) break;

        switch (_reader.getFieldNumber()) {
          case 1:
            _instance.name = _reader.readString();
            break;
          case 2:
            _instance.insertionPoint = _reader.readString();
            break;
          case 15:
            _instance.content = _reader.readString();
            break;
          case 16:
            _instance.generatedCodeInfo = new googleProtobuf000.GeneratedCodeInfo();
            _reader.readMessage(
              _instance.generatedCodeInfo,
              googleProtobuf000.GeneratedCodeInfo.deserializeBinaryFromReader
            );
            break;
          default:
            _reader.skipField();
        }
      }

      File.refineValues(_instance);
    }

    /**
     * Serializes a message to binary format using provided binary reader
     * @param _instance message instance
     * @param _writer binary writer instance
     */
    static serializeBinaryToWriter(_instance: File, _writer: BinaryWriter) {
      if (_instance.name) {
        _writer.writeString(1, _instance.name);
      }
      if (_instance.insertionPoint) {
        _writer.writeString(2, _instance.insertionPoint);
      }
      if (_instance.content) {
        _writer.writeString(15, _instance.content);
      }
      if (_instance.generatedCodeInfo) {
        _writer.writeMessage(
          16,
          _instance.generatedCodeInfo as any,
          googleProtobuf000.GeneratedCodeInfo.serializeBinaryToWriter
        );
      }
    }

    private _name?: string;
    private _insertionPoint?: string;
    private _content?: string;
    private _generatedCodeInfo?: googleProtobuf000.GeneratedCodeInfo;

    /**
     * Message constructor. Initializes the properties and applies default Protobuf values if necessary
     * @param _value initial values object or instance of File to deeply clone from
     */
    constructor(_value?: RecursivePartial<File.AsObject>) {
      _value = _value || {};
      this.name = _value.name;
      this.insertionPoint = _value.insertionPoint;
      this.content = _value.content;
      this.generatedCodeInfo = _value.generatedCodeInfo
        ? new googleProtobuf000.GeneratedCodeInfo(_value.generatedCodeInfo)
        : undefined;
      File.refineValues(this);
    }
    get name(): string | undefined {
      return this._name;
    }
    set name(value: string | undefined) {
      this._name = value;
    }
    get insertionPoint(): string | undefined {
      return this._insertionPoint;
    }
    set insertionPoint(value: string | undefined) {
      this._insertionPoint = value;
    }
    get content(): string | undefined {
      return this._content;
    }
    set content(value: string | undefined) {
      this._content = value;
    }
    get generatedCodeInfo(): googleProtobuf000.GeneratedCodeInfo | undefined {
      return this._generatedCodeInfo;
    }
    set generatedCodeInfo(
      value: googleProtobuf000.GeneratedCodeInfo | undefined
    ) {
      this._generatedCodeInfo = value;
    }

    /**
     * Serialize message to binary data
     * @param instance message instance
     */
    serializeBinary() {
      const writer = new BinaryWriter();
      File.serializeBinaryToWriter(this, writer);
      return writer.getResultBuffer();
    }

    /**
     * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
     */
    toObject(): File.AsObject {
      return {
        name: this.name,
        insertionPoint: this.insertionPoint,
        content: this.content,
        generatedCodeInfo: this.generatedCodeInfo
          ? this.generatedCodeInfo.toObject()
          : undefined
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
    ): File.AsProtobufJSON {
      return {
        name: this.name,
        insertionPoint: this.insertionPoint,
        content: this.content,
        generatedCodeInfo: this.generatedCodeInfo
          ? this.generatedCodeInfo.toProtobufJSON(options)
          : null
      };
    }
  }
  export module File {
    /**
     * Standard JavaScript object representation for File
     */
    export interface AsObject {
      name?: string;
      insertionPoint?: string;
      content?: string;
      generatedCodeInfo?: googleProtobuf000.GeneratedCodeInfo.AsObject;
    }

    /**
     * Protobuf JSON representation for File
     */
    export interface AsProtobufJSON {
      name?: string;
      insertionPoint?: string;
      content?: string;
      generatedCodeInfo?: googleProtobuf000.GeneratedCodeInfo.AsProtobufJSON | null;
    }
  }
}
