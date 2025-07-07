[Documentation](../../modules.md) / lib/server/validations

## isAdminField

```ts
const isAdminField: ZodDefault<ZodBoolean>;
```

Defined in: [src/lib/server/validations.ts:27](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L27)

***

## isVerifiedField

```ts
const isVerifiedField: ZodDefault<ZodBoolean>;
```

Defined in: [src/lib/server/validations.ts:29](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L29)

***

## NAME\_MAX\_LEN

```ts
const NAME_MAX_LEN: 50 = 50;
```

Defined in: [src/lib/server/validations.ts:17](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L17)

***

## NAME\_MIN\_LEN

```ts
const NAME_MIN_LEN: 3 = 3;
```

Defined in: [src/lib/server/validations.ts:16](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L16)

***

## nameField

```ts
const nameField: ZodString;
```

Defined in: [src/lib/server/validations.ts:31](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L31)

***

## PASSWORD\_MAX\_LEN

```ts
const PASSWORD_MAX_LEN: 50 = 50;
```

Defined in: [src/lib/server/validations.ts:14](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L14)

***

## PASSWORD\_MIN\_LEN

```ts
const PASSWORD_MIN_LEN: 6 = 6;
```

Defined in: [src/lib/server/validations.ts:13](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L13)

***

## passwordConfirmField

```ts
const passwordConfirmField: ZodString;
```

Defined in: [src/lib/server/validations.ts:41](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L41)

***

## passwordField

```ts
const passwordField: ZodString;
```

Defined in: [src/lib/server/validations.ts:69](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L69)

***

## SESSION\_ID\_LEN

```ts
const SESSION_ID_LEN: 40 = 40;
```

Defined in: [src/lib/server/validations.ts:21](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L21)

***

## settingsAccountFormSchema

```ts
const settingsAccountFormSchema: ZodObject<{
  name: ZodString;
}, "strip", ZodTypeAny, {
  name?: string;
}, {
  name?: string;
}>;
```

Defined in: [src/lib/server/validations.ts:102](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L102)

***

## settingsNotificationsFormSchema

```ts
const settingsNotificationsFormSchema: ZodObject<{
  name: ZodString;
}, "strip", ZodTypeAny, {
  name?: string;
}, {
  name?: string;
}>;
```

Defined in: [src/lib/server/validations.ts:106](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L106)

***

## settingsProfileFormSchema

```ts
const settingsProfileFormSchema: ZodObject<{
  username: ZodString;
}, "strip", ZodTypeAny, {
  username?: string;
}, {
  username?: string;
}>;
```

Defined in: [src/lib/server/validations.ts:110](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L110)

***

## TOKEN\_EXPIRATION\_TIME

```ts
const TOKEN_EXPIRATION_TIME: 30 = 30;
```

Defined in: [src/lib/server/validations.ts:24](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L24)

***

## TOKEN\_LEN

```ts
const TOKEN_LEN: 15 = 15;
```

Defined in: [src/lib/server/validations.ts:23](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L23)

***

## tokenField

```ts
const tokenField: ZodString;
```

Defined in: [src/lib/server/validations.ts:79](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L79)

***

## tokenSchema

```ts
const tokenSchema: ZodObject<{
  token: ZodString;
}, "strip", ZodTypeAny, {
  token?: string;
}, {
  token?: string;
}>;
```

Defined in: [src/lib/server/validations.ts:115](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L115)

***

## updateUserFormSchema

```ts
const updateUserFormSchema: ZodObject<{
  name: ZodString;
}, "strip", ZodTypeAny, {
  name?: string;
}, {
  name?: string;
}>;
```

Defined in: [src/lib/server/validations.ts:124](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L124)

***

## USER\_ID\_LEN

```ts
const USER_ID_LEN: 15 = 15;
```

Defined in: [src/lib/server/validations.ts:19](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L19)

***

## userIdField

```ts
const userIdField: ZodString;
```

Defined in: [src/lib/server/validations.ts:84](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L84)

***

## userIdSchema

```ts
const userIdSchema: ZodObject<{
  userId: ZodString;
}, "strip", ZodTypeAny, {
  userId?: string;
}, {
  userId?: string;
}>;
```

Defined in: [src/lib/server/validations.ts:119](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L119)

***

## USERNAME\_MAX\_LEN

```ts
const USERNAME_MAX_LEN: 20 = 20;
```

Defined in: [src/lib/server/validations.ts:11](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L11)

***

## USERNAME\_MIN\_LEN

```ts
const USERNAME_MIN_LEN: 3 = 3;
```

Defined in: [src/lib/server/validations.ts:10](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L10)

Validations module uses the Zod library to define 
and validate different types of user inputs.

### See

 - Zod [Zod Docs](https://zod.dev/?id=basic-usage)
 - flash-messages [sveltekit-flash-messages](https://github.com/ciscoheat/sveltekit-flash-messages#how-to-use)

***

## usernameField

```ts
const usernameField: ZodString;
```

Defined in: [src/lib/server/validations.ts:91](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L91)

***

## passwordConfirmMustBeEqualToPassword()

```ts
function passwordConfirmMustBeEqualToPassword(__namedParameters: EqualPasswords, ctx: RefinementCtx): void;
```

Defined in: [src/lib/server/validations.ts:47](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/validations.ts#L47)

### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`__namedParameters`

</td>
<td>

`EqualPasswords`

</td>
</tr>
<tr>
<td>

`ctx`

</td>
<td>

`RefinementCtx`

</td>
</tr>
</tbody>
</table>

### Returns

`void`
