import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';
import { auth } from '../../utils/authGoogle'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const reqBody = JSON.parse(req.body);
        const rangeToUpdate = reqBody.range;
        const sheets = google.sheets({ version: 'v4', auth });
        const response = await sheets.spreadsheets.values.update({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: rangeToUpdate,
            valueInputOption: 'USER_ENTERED',
            includeValuesInResponse: true,
            requestBody: reqBody
        })

        return res.status(200).send(response);
    } catch (error) {
        console.log(error)
    }
};