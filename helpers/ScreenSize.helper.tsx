import { Dimensions } from "react-native";

const defaultH = 2532; //Iphone 13 screen resolution (max)
const scale = Dimensions.get('window').scale;
const h = Dimensions.get('window').height;

export function regulateHeight(size:number) {

	let newH = size * ((h * 100)/defaultH)/100; 

	if(h > 300 && h < 500)
	newH = newH * 2;

	if(h >= 500 && h <= 700)
	newH = newH * 3;
	
	if(h >= 701 && h <= 900)
	newH = newH * 3.8;

	return newH;
}

export function regulateFont(size:number) {
	
	if(h <= 700)
	{
		return Math.ceil(Math.floor(size / 1.5));
	}
	else if(h >=701 && h <= 800)
	{
		return size -2;
	}

	return size;
}