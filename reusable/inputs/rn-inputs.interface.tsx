import {eIconSide} from "@reusable/interfaces/common";

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
	iconSide: eIconSide,
	iconWraperStyle?:any
}

export interface iGroupInput
{
	inputs:Array<any>,
	wrapperStyle?:any
}
