[Documentation](modules.md) / hooks.server

## allowCORSAccessAPI

```ts
const allowCORSAccessAPI: Handle;
```

Defined in: [src/hooks.server.ts:46](https://github.com/your-username/your-repo/tree/master/src/hooks.server.ts#L46)

Enable API access for users with valid API keys and allow CORS.

### Param

RequestEvent, resolve: Function

### Returns

- The resolved response

***

## handle

```ts
const handle: Handle;
```

Defined in: [src/hooks.server.ts:97](https://github.com/your-username/your-repo/tree/master/src/hooks.server.ts#L97)

***

## handleAuth()

```ts
function handleAuth(__namedParameters: object): Promise<any>;
```

Defined in: [src/hooks.server.ts:23](https://github.com/your-username/your-repo/tree/master/src/hooks.server.ts#L23)

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

\{ `event`: `any`; `resolve`: `any`; \}

</td>
</tr>
<tr>
<td>

`__namedParameters.event`

</td>
<td>

`any`

</td>
</tr>
<tr>
<td>

`__namedParameters.resolve`

</td>
<td>

`any`

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;`any`&gt;
