# Interface: SessionService\<UserSession\>

Interface for handling user sessions.

## Type Parameters

• **UserSession** = [`CoreUserSession`](CoreUserSession.md)

The type of the user session.

## Properties

### getUserSession()

```ts
getUserSession: (credentialsRequired, vrameworkRequest) => Promise<undefined | UserSession>;
```

Retrieves the user session.

#### Parameters

• **credentialsRequired**: `boolean`

A flag indicating whether credentials are required.

• **vrameworkRequest**: [`VrameworkRequest`](../classes/VrameworkRequest.md)\<`any`\>

The request object.

#### Returns

`Promise`\<`undefined` \| `UserSession`\>

A promise that resolves to the user session or undefined.

#### Defined in

[packages/core/src/services/session-service.ts:15](https://github.com/vramework/vramework/blob/d6bdd98863fc2395b074502b5cd67b069031d73f/packages/core/src/services/session-service.ts#L15)