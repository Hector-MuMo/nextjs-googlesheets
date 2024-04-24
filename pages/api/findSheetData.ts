import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';
import { auth } from '../../utils/authGoogle'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const sheets = google.sheets({ version: 'v4', auth });
        const response = await sheets.spreadsheets.developerMetadata.search({
            spreadsheetId: process.env.SPREADSHEET_ID,
        })

        return res.status(200).send(response);
    } catch (error) {
        console.log(error)
    }
};

//spreadsheetId: process.env.SPREADSHEET_ID,