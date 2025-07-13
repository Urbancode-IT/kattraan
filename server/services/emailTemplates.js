// services/emailTemplates.js

/**
 * Returns a full HTML email template with the given header and content.
 * @param {string} headerText - The title or header for the email.
 * @param {string} content - The HTML content to embed under the header.
 * @returns {string} - A complete HTML document string.
 */
function createEmailTemplate(headerText, content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${headerText}</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
  <style>
    body, table, td {
      font-family: 'Poppins', Arial, sans-serif;
      color: #333;
      margin: 0;
      padding: 0;
      background-color: #f7f7f7;
    }
    .container { width: 100%; padding: 20px; }
    .email-body {
      max-width: 600px;
      margin: auto;
      background-color: #ffffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    .header {
      background-color: #1ab79d;
      color: #fff;
      padding: 20px;
      text-align: center;
    }
    .header img { max-width: 150px; margin-bottom: 10px; }
    .header h1 {
      margin: 0;
      font-size: 24px;
    }
    .content { padding: 20px; line-height: 1.6; }
    .content h2 { color: #1ab79d; font-size: 20px; }
    .cta-button {
      display: inline-block;
      margin: 20px 0;
      padding: 10px 20px;
      background-color: #1ab79d;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: 600;
    }
    .footer {
      background-color: #1ab79d;
      padding: 20px;
      text-align: center;
      font-size: 14px;
      color: #fff;
    }
    .footer a { color: #fff; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="container">
    <table class="email-body" cellpadding="0" cellspacing="0" width="100%">
      <tr>
        <td class="header">
          <img src="https://kattraan.com/logo.png" alt="Kattraan Logo" />
          <h1>${headerText}</h1>
        </td>
      </tr>
      <tr>
        <td class="content">
          ${content}
        </td>
      </tr>
      <tr>
        <td class="footer">
          <p>If you have any questions, contact us at <a href="mailto:support@kattraan.com">support@kattraan.com</a></p>
          <p>&copy; ${new Date().getFullYear()} Kattraan. All rights reserved.</p>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;
}

module.exports = { createEmailTemplate };
