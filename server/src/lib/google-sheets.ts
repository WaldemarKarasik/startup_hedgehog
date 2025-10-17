import { google } from "googleapis";

/**
 * Google Sheets client for Developer Applications
 */
export class GoogleSheetsClient {
  private sheets;
  private spreadsheetId: string;

  constructor() {
    // Parse credentials from environment variable
    const credentialsJson = process.env.GOOGLE_SHEETS_CREDENTIALS;
    if (!credentialsJson) {
      throw new Error("GOOGLE_SHEETS_CREDENTIALS environment variable is not set");
    }

    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
    if (!spreadsheetId) {
      throw new Error("GOOGLE_SHEETS_SPREADSHEET_ID environment variable is not set");
    }

    this.spreadsheetId = spreadsheetId;

    // Parse JSON credentials
    let credentials;
    try {
      credentials = JSON.parse(credentialsJson);
    } catch (error) {
      throw new Error("Failed to parse GOOGLE_SHEETS_CREDENTIALS JSON");
    }

    // Create JWT auth client
    const auth = new google.auth.JWT({
      email: credentials.client_email,
      key: credentials.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // Initialize Sheets API
    this.sheets = google.sheets({ version: "v4", auth });
  }

  /**
   * Add a new developer application row to the spreadsheet
   */
  async addDeveloperApplication(data: {
    name: string;
    email: string;
    telegram: string;
    productName: string;
    productDescription: string;
    revenueSharePercent: string;
    githubUrl: string;
    demoUrl: string;
    videoUrl: string;
    hasUsers: string;
    userCount: string;
    customizationReady: string;
    targetBusinesses: string;
    portfolio: string;
    additionalInfo: string;
  }): Promise<void> {
    const timestamp = new Date().toISOString();
    const status = "🆕 New";

    // Row values matching the spreadsheet columns:
    // A: Timestamp, B: Status, C: Name, D: Email, E: Telegram, F: Product Name,
    // G: Description, H: RS %, I: GitHub URL, J: Demo URL, K: Video URL,
    // L: Has Users, M: User Count, N: Customization Ready, O: Target Businesses,
    // P: Portfolio, Q: Additional Info
    const values = [
      [
        timestamp,
        status,
        data.name,
        data.email,
        data.telegram,
        data.productName,
        data.productDescription,
        data.revenueSharePercent,
        data.githubUrl,
        data.demoUrl,
        data.videoUrl,
        data.hasUsers,
        data.userCount,
        data.customizationReady,
        data.targetBusinesses,
        data.portfolio,
        data.additionalInfo,
      ],
    ];

    try {
      await this.sheets.spreadsheets.values.append({
        spreadsheetId: this.spreadsheetId,
        range: "Sheet1!A:Q", // Adjust sheet name if different
        valueInputOption: "RAW",
        requestBody: {
          values,
        },
      });
    } catch (error) {
      console.error("Error adding row to Google Sheets:", error);
      throw new Error("Failed to add application to Google Sheets");
    }
  }

  /**
   * Test connection to Google Sheets
   */
  async testConnection(): Promise<boolean> {
    try {
      const response = await this.sheets.spreadsheets.get({
        spreadsheetId: this.spreadsheetId,
      });
      return !!response.data;
    } catch (error) {
      console.error("Google Sheets connection test failed:", error);
      return false;
    }
  }
}

// Singleton instance
let sheetsClientInstance: GoogleSheetsClient | null = null;

/**
 * Get Google Sheets client instance (singleton)
 */
export function getGoogleSheetsClient(): GoogleSheetsClient {
  if (!sheetsClientInstance) {
    sheetsClientInstance = new GoogleSheetsClient();
  }
  return sheetsClientInstance;
}
