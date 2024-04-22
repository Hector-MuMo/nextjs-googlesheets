import { NextApiRequest, NextApiResponse } from "next";
import { google } from 'googleapis';

//sit
//1sMYN_4c4L_BWq-EIrMm54PiR8lClxIhNOmbV6pYOM4Q
//personal
//14gpW_wA1gDvAGrCPzi6Lfb305RjI-PU5C4oMk6ifwfw

//Keyfilename must be a json document from google cloud project
const auth = new google.auth.GoogleAuth({
    keyFilename: 'sit-credentials.json',
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
    ]
})

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