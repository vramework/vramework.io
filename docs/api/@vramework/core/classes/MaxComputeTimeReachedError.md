# Class: MaxComputeTimeReachedError

The server took too long to complete the request, reaching the maximum compute time allowed.

## Extends

- `EError`

## Constructors

### new MaxComputeTimeReachedError()

```ts
new MaxComputeTimeReachedError(message, errorId?): MaxComputeTimeReachedError
```

Creates an instance of EError.

#### Parameters

• **message**: `string` = `'An error occurred'`

The error message.

• **errorId?**: `string`

An optional error ID.

#### Returns

[`MaxComputeTimeReachedError`](MaxComputeTimeReachedError.md)

#### Inherited from

`EError.constructor`

#### Defined in

[packages/core/src/error-handler.ts:11](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/error-handler.ts#L11)

## Properties

### errorId?

```ts
optional errorId: string;
```

An optional error ID.

#### Inherited from

`EError.errorId`

#### Defined in

[packages/core/src/error-handler.ts:13](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/error-handler.ts#L13)