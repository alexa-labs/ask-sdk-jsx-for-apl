export type Primitive =
	| null
	| undefined
	| string
	| number
	| boolean
	| symbol;

export type LiteralUnion<
	LiteralType extends BaseType,
	BaseType extends Primitive
> = LiteralType | (BaseType & {_?: never});