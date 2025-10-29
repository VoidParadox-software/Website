import { google } from "googleapis";

// Scope for Google Sheets API
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

/**
 * Authenticates with Google Sheets API using a service account.
 * @returns {Promise<any>} The authenticated Google Sheets API client.
 */
async function getAuthenticatedClient() {
  const credentials = {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  };

  if (!credentials.client_email || !credentials.private_key) {
    throw new Error(
      "Google Sheets API credentials are not set in environment variables."
    );
  }

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: SCOPES,
  });

  const client = await auth.getClient();
  const sheets = google.sheets({ version: "v4", auth: client });

  return sheets;
}

/**
 * Appends a row of data to a specified Google Sheet.
 * @param {string} spreadsheetId - The ID of the Google Sheet.
 * @param {string} range - The sheet name and range (e.g., 'Sheet1!A1').
 * @param {any[][]} values - The data to append.
 */
export async function appendToSheet(
  spreadsheetId: string,
  range: string,
  values: any[][]
) {
  try {
    const sheets = await getAuthenticatedClient();
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values,
      },
    });
    return response;
  } catch (error) {
    console.error("Error appending to Google Sheet:", error);
    // We don't re-throw the error to avoid breaking the API response if only the sheet writing fails.
    // The primary action (saving to Firestore) should still be considered a success.
  }
}
