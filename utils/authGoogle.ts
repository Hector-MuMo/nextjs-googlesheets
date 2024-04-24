import { google } from 'googleapis';

//Keyfilename must be a json document from google cloud project
const auth = new google.auth.GoogleAuth({
    keyFilename: 'credentials-hector.json',
    scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
    ]
});

export {
    auth
}