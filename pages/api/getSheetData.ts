import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';

const auth = new google.auth.GoogleAuth({
    keyFilename: 'credentials-hector.json',
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
    ]
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const sheets = google.sheets({ version: 'v4', auth });
        const response = await sheets.spreadsheets.values.get({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'A1:E100'
        })

        return res.status(200).send(response.data.values);
    } catch (error) {
        console.log(error)
    }
}; 