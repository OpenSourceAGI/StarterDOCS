[Documentation](../../modules.md) / lib/server/ratelimits

## accountSettingsLimiter

```ts
const accountSettingsLimiter: RetryAfterRateLimiter<never>;
```

Defined in: [src/lib/server/ratelimits.ts:33](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/ratelimits.ts#L33)

***

## loginLimiter

```ts
const loginLimiter: RetryAfterRateLimiter<never>;
```

Defined in: [src/lib/server/ratelimits.ts:23](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/ratelimits.ts#L23)

***

## notificationsSettingsLimiter

```ts
const notificationsSettingsLimiter: RetryAfterRateLimiter<never>;
```

Defined in: [src/lib/server/ratelimits.ts:38](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/ratelimits.ts#L38)

***

## profileSettingsLimiter

```ts
const profileSettingsLimiter: RetryAfterRateLimiter<never>;
```

Defined in: [src/lib/server/ratelimits.ts:43](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/ratelimits.ts#L43)

***

## registerLimiter

```ts
const registerLimiter: RetryAfterRateLimiter<never>;
```

Defined in: [src/lib/server/ratelimits.ts:28](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/ratelimits.ts#L28)

***

## verifyRateLimiter()

```ts
function verifyRateLimiter(event: any, limiter: any): Promise<string>;
```

Defined in: [src/lib/server/ratelimits.ts:11](https://github.com/vtempest/Svelte-Starter-DOCS/tree/master/src/lib/server/ratelimits.ts#L11)

Verifies the rate limiter for a given request event.

### Parameters

<table>
<thead>
<tr>
<th>Parameter</th>
<th>Type</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>

`event`

</td>
<td>

`any`

</td>
<td>

The request event to be checked.

</td>
</tr>
<tr>
<td>

`limiter`

</td>
<td>

`any`

</td>
<td>

The rate limiter to be used for checking the event.

</td>
</tr>
</tbody>
</table>

### Returns

`Promise`&lt;`string`&gt;

- A string representation of the retry after time in minutes if the event is limited, otherwise undefined.

### See

Rate-Limiter [Rate Limiter Docs](https://github.com/ciscoheat/sveltekit-rate-limiter#how-to-use)
