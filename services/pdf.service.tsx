import React from 'react';
import { PermissionsAndroid } from 'react-native';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import moment from 'moment';

class PDFCreatorService
{
	private _html:string;

	constructor(_html:string)
	{
		this._html = _html;
	}

	//Applicable for Android only
	async _checkPermissions()
	{
		const readGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
		if( readGranted !== "granted")
		return Error("Missing Read Storage permission");
		
		const writeGranted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
		if( writeGranted !== "granted")
		return Error("Missing Write Storage permission");

		return true;
	}

	async requestPermission() 
	{
		return await PermissionsAndroid.requestMultiple([
			PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
			PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
		])
	}

	async makePDF(filename?:string, directory:string = 'Documents')
	{
		const permissions = await this._checkPermissions().catch((e) => e);
		
		if(permissions instanceof Error)
		throw permissions;
		
		const options = {
			html: this._html,
			fileName: filename || `${moment().format('DD-MM-YYYY_HH:mm:ss')}`,
			directory: directory,
		};

		try
		{
			const file = await RNHTMLtoPDF.convert(options);
			return file.filePath;
		}
		catch(e:any)
		{
			return Error(e)
		}
		
	}
}

export default PDFCreatorService