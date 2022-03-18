
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

export enum eIconSide
{
	LEFT = 'left',
	RIGHT = 'right'
}

export interface iGroupButtons
{
	groupButtonsWrapperStyle?:any,
	buttons?:Array<any>
}