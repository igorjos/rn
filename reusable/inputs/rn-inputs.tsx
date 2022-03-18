
import React from "react"
import { TextInput, View } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { eInputIcon, iGroupInput, iIconInput, iInput } from "./rn-inputs.interface"
import { groupInputWrapperStyle, iconInputWrapperStyle } from "./rn-inputs.style"



const DefaultInput = (props:iInput) => {
	return <TextInput 
		style={{...props.inputStyle}}
		{...props}
	/>
}

const _renderInput = (props:iIconInput) => {
	const inputs = [
		<Icon key={2} style={{...props.iconStyle}} {...props} />,
		<DefaultInput key={1} {...props}/>
	]

	if(props.iconSide === eInputIcon.LEFT)
	return inputs;
	else
	return inputs.reverse();
}

const IconInput = (props:iIconInput) => {
	return <View style={{...iconInputWrapperStyle, ...props.iconWraperStyle}}>
		{_renderInput(props)}
	</View>
}

const GroupInput = (props:iGroupInput) => {
	return <View style={{...groupInputWrapperStyle, ...props.wrapperStyle}}>{props.inputs}</View>
}

export {DefaultInput, IconInput, GroupInput}