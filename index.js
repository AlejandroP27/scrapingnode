const express = require('express');
const { chromium } = require('playwright');

const app = express();
const port = process.env.PORT || 3000;

app.get('/scrape', async (req, res) => {
    const browser = await chromium.launch({ headless: true });
    const page = await browser.newPage();
    
    await page.goto('https://www.riamoneytransfer.com/es-es/send-money-to-bolivia/');
    
    const content = await page.content(); // Obtén el contenido de la página
    
    await browser.close();
    
    res.json({ data: content });
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
