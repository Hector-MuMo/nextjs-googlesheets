import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';
import { auth } from '../../utils/authGoogle'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        const body = JSON.parse(req.body);

        const sheets = google.sheets({
            auth,
            version: 'v4'
        })

        const response = await sheets.spreadsheets.values.append({
            spreadsheetId: process.env.SPREADSHEET_ID,
            range: 'A1:E1',
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    [body.Id, body.Nombre, body.Apellidos, body.Email, body.Telefono]
                ]
            }
        })

        console.log(response.data)

        return res.status(200).json({
            data: response.data
        })
    } catch (error) {
        console.log(error)
    }
}; 