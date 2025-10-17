# Server Setup

## Environment Variables

Create a `server/.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/startup_hedgehog"

# Google Sheets Integration
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account","project_id":"...","private_key_id":"...","private_key":"...","client_email":"...","client_id":"...","auth_uri":"...","token_uri":"...","auth_provider_x509_cert_url":"...","client_x509_cert_url":"..."}'
GOOGLE_SHEETS_SPREADSHEET_ID="your_spreadsheet_id_here"
```

### Google Sheets Setup

See the main repository documentation for detailed instructions on:
1. Creating a Google Cloud Project
2. Enabling Google Sheets API
3. Creating a Service Account
4. Getting credentials JSON
5. Sharing your spreadsheet with the service account

## Development

```bash
# Install dependencies
bun install

# Run development server
bun run dev

# Build
bun run build
```

## API Endpoints

### Developer Applications

**POST** `/api/developer-applications`
- Submit a new developer application
- Saves data to Google Sheets
- Validates input with Zod

**GET** `/api/developer-applications/health`
- Health check for Google Sheets connection
