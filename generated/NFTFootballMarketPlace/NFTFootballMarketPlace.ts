// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CollectionApproChanged extends ethereum.Event {
  get params(): CollectionApproChanged__Params {
    return new CollectionApproChanged__Params(this);
  }
}

export class CollectionApproChanged__Params {
  _event: CollectionApproChanged;

  constructor(event: CollectionApproChanged) {
    this._event = event;
  }

  get collection(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[1].value.toBoolean();
  }
}

export class OfferClosed extends ethereum.Event {
  get params(): OfferClosed__Params {
    return new OfferClosed__Params(this);
  }
}

export class OfferClosed__Params {
  _event: OfferClosed;

  constructor(event: OfferClosed) {
    this._event = event;
  }

  get collectionId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get pieceID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get offerID(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class OfferCreated extends ethereum.Event {
  get params(): OfferCreated__Params {
    return new OfferCreated__Params(this);
  }
}

export class OfferCreated__Params {
  _event: OfferCreated;

  constructor(event: OfferCreated) {
    this._event = event;
  }

  get collectionId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get offerIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get creator(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get pieceID(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get supply(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[5].value.toBigInt();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class PiecePurchased extends ethereum.Event {
  get params(): PiecePurchased__Params {
    return new PiecePurchased__Params(this);
  }
}

export class PiecePurchased__Params {
  _event: PiecePurchased;

  constructor(event: PiecePurchased) {
    this._event = event;
  }

  get collectionId(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get offerIndex(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }

  get pieceID(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get buyer(): Address {
    return this._event.parameters[4].value.toAddress();
  }
}

export class NFTFootballMarketPlace__offersResult {
  value0: Address;
  value1: BigInt;
  value2: BigInt;
  value3: BigInt;
  value4: Address;

  constructor(
    value0: Address,
    value1: BigInt,
    value2: BigInt,
    value3: BigInt,
    value4: Address
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set("value4", ethereum.Value.fromAddress(this.value4));
    return map;
  }
}

export class NFTFootballMarketPlace extends ethereum.SmartContract {
  static bind(address: Address): NFTFootballMarketPlace {
    return new NFTFootballMarketPlace("NFTFootballMarketPlace", address);
  }

  marketSupply(param0: BigInt): BigInt {
    let result = super.call("marketSupply", "marketSupply(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_marketSupply(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "marketSupply",
      "marketSupply(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  offers(param0: BigInt): NFTFootballMarketPlace__offersResult {
    let result = super.call(
      "offers",
      "offers(uint256):(address,uint256,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new NFTFootballMarketPlace__offersResult(
      result[0].toAddress(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBigInt(),
      result[4].toAddress()
    );
  }

  try_offers(
    param0: BigInt
  ): ethereum.CallResult<NFTFootballMarketPlace__offersResult> {
    let result = super.tryCall(
      "offers",
      "offers(uint256):(address,uint256,uint256,uint256,address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new NFTFootballMarketPlace__offersResult(
        value[0].toAddress(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBigInt(),
        value[4].toAddress()
      )
    );
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  paymentToken(): Address {
    let result = super.call("paymentToken", "paymentToken():(address)", []);

    return result[0].toAddress();
  }

  try_paymentToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("paymentToken", "paymentToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  wCollections(param0: Address): boolean {
    let result = super.call("wCollections", "wCollections(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBoolean();
  }

  try_wCollections(param0: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("wCollections", "wCollections(address):(bool)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _token(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class CloseOfferCall extends ethereum.Call {
  get inputs(): CloseOfferCall__Inputs {
    return new CloseOfferCall__Inputs(this);
  }

  get outputs(): CloseOfferCall__Outputs {
    return new CloseOfferCall__Outputs(this);
  }
}

export class CloseOfferCall__Inputs {
  _call: CloseOfferCall;

  constructor(call: CloseOfferCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _idx(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class CloseOfferCall__Outputs {
  _call: CloseOfferCall;

  constructor(call: CloseOfferCall) {
    this._call = call;
  }
}

export class CreateOfferCall extends ethereum.Call {
  get inputs(): CreateOfferCall__Inputs {
    return new CreateOfferCall__Inputs(this);
  }

  get outputs(): CreateOfferCall__Outputs {
    return new CreateOfferCall__Outputs(this);
  }
}

export class CreateOfferCall__Inputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _pieceID(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }
}

export class CreateOfferCall__Outputs {
  _call: CreateOfferCall;

  constructor(call: CreateOfferCall) {
    this._call = call;
  }
}

export class PurchaseNFTCall extends ethereum.Call {
  get inputs(): PurchaseNFTCall__Inputs {
    return new PurchaseNFTCall__Inputs(this);
  }

  get outputs(): PurchaseNFTCall__Outputs {
    return new PurchaseNFTCall__Outputs(this);
  }
}

export class PurchaseNFTCall__Inputs {
  _call: PurchaseNFTCall;

  constructor(call: PurchaseNFTCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _offerIdx(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _amount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class PurchaseNFTCall__Outputs {
  _call: PurchaseNFTCall;

  constructor(call: PurchaseNFTCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class UpdateWhitelistCollectionCall extends ethereum.Call {
  get inputs(): UpdateWhitelistCollectionCall__Inputs {
    return new UpdateWhitelistCollectionCall__Inputs(this);
  }

  get outputs(): UpdateWhitelistCollectionCall__Outputs {
    return new UpdateWhitelistCollectionCall__Outputs(this);
  }
}

export class UpdateWhitelistCollectionCall__Inputs {
  _call: UpdateWhitelistCollectionCall;

  constructor(call: UpdateWhitelistCollectionCall) {
    this._call = call;
  }

  get _collection(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _whitelisted(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class UpdateWhitelistCollectionCall__Outputs {
  _call: UpdateWhitelistCollectionCall;

  constructor(call: UpdateWhitelistCollectionCall) {
    this._call = call;
  }
}
