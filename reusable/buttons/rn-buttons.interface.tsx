import { eIconSide } from "@reusable/interfaces/common"

export interface iDefaultButton
{
	title:string,
	buttonStyle?:any,
	textStyle?:any,
	onPressOut?:any
}

export interface iIconButton extends iDefaultButton
{
	icon:string,
	iconSide: eIconSide,
	iconStyle?: any,
	iconSize?:number
}

export interface iGroupButtons
{
	groupButtonsWrapperStyle?:any,
	buttons?:Array<any>
}