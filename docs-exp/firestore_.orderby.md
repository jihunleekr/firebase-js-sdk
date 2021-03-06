<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@firebase/firestore](./firestore.md) &gt; [/](./firestore_.md) &gt; [orderBy](./firestore_.orderby.md)

## orderBy() function

Creates a `QueryConstraint` that sorts the query result by the specified field, optionally in descending order instead of ascending.

<b>Signature:</b>

```typescript
export declare function orderBy(fieldPath: string | FieldPath, directionStr?: OrderByDirection): QueryConstraint;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  fieldPath | string \| [FieldPath](./firestore_.fieldpath.md) | The field to sort by. |
|  directionStr | [OrderByDirection](./firestore_.orderbydirection.md) | Optional direction to sort by ('asc' or 'desc'). If not specified, order will be ascending. |

<b>Returns:</b>

[QueryConstraint](./firestore_.queryconstraint.md)

The created `Query`<!-- -->.

