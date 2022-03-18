
export interface iInput
{
	placeholder:string,
	inputStyle?:any,
	onChangeText?:any,
	onFocus?:any,
	onBlur?:any,
	keyboardType?:any
}

export interface iIconInput extends iInput
{
	name:string,
	size:number,
	iconStyle?:any,
	iconSide: eInputIcon,
	iconWraperStyle?:any
}

export interface iGroupInput
{
	inputs:Array<any>,
	wrapperStyle?:any
}

export enum eInputIcon 
{
	LEFT = 'left',
	RIGHT = 'right'
}