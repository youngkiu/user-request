const fs = require('fs');
const path = require('path');
require('dotenv').config();

const indexHtmlPath = path.join(__dirname, 'index.html');
let indexHtml = fs.readFileSync(indexHtmlPath, 'utf8');

indexHtml = indexHtml.replace('YOUR_USER_ID', process.env.EMAILJS_USER_ID)
                     .replace('YOUR_SERVICE_ID', process.env.EMAILJS_SERVICE_ID)
                     .replace('YOUR_TEMPLATE_ID', process.env.EMAILJS_TEMPLATE_ID);

const distPath = path.join(__dirname, 'dist');
if (!fs.existsSync(distPath)){
    fs.mkdirSync(distPath);
}

fs.writeFileSync(path.join(distPath, 'index.html'), indexHtml);

console.log('Environment variables have been injected into index.html');
