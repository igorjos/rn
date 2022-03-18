import React from "react"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Text, TouchableOpacity, View } from "react-native"
import { eIconSide, iDefaultButton, iGroupButtons, iIconButton } from "./rn-buttons.interface";
import { buttonStyle, groupContainerStyle, iconButtonStyle } from "./rn-buttons.style";


const renderTextAndIcon = (props:iIconButton) => {
	const items = [
		<Icon key={1} name={props.icon} size={props.iconSize} style={{...props.iconStyle}}/>,
		<Text key={2} style={{...props.textStyle}}>{props.title}</Text>
	];

	if(props.iconSide === eIconSide.LEFT)
	return items;
	else
	return items.reverse()
}

const DefaultButton = (props:iDefaultButton) => {
	return <TouchableOpacity 
			style={{...buttonStyle, ...props.buttonStyle}} 
			{...props}
			>
			<Text style={{...props.textStyle}}>{props.title}</Text>
	</TouchableOpacity>
}

const IconButton = (props:iIconButton) => {
	return <TouchableOpacity 
			style={{...iconButtonStyle, ...props.buttonStyle}} 
			{...props}
			>
			{renderTextAndIcon(props)}
	</TouchableOpacity>
}

const GroupButton = (props:iGroupButtons) => {
	return <View style={{...groupContainerStyle, ...props.groupButtonsWrapperStyle}}>{props.buttons}</View>
}


export {DefaultButton, IconButton, GroupButton}