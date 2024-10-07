/* const express = require('express');
const { chromium } = require('playwright');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;



app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['*'],
    allowedHeaders: ['*']
}));

app.get('/scrape', async (req, res) => {
    try {
        // Lanzar el navegador
        const browser = await chromium.launch({ headless: true });
        const userAgentStrings = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          ];
          const context = await browser.newContext({
            userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
          });
        
          const page = await context.newPage();
            
            // Close the browser
        
        // Navegar a la página objetivo
        await page.goto('https://www.riamoneytransfer.com/es-es/send-money-to-bolivia');

        // Esperar hasta que se cargue el contenido dinámico

        await page.waitForSelector('.text-promo-rate'); // Cambia el selector por el adecuado
        // Extraer el contenido dinámico
        const dynamicContent = await page.evaluate(() => {
            return document.querySelector('.text-promo-rate').innerText; // Cambia el selector
        });

        // Cerrar el navegador
        await browser.close();

        // Enviar la respuesta con el contenido dinámico
        res.json({ data: dynamicContent });
    } catch (error) {
        console.error('Error en el scraping:', error);
        res.status(500).json({ error: 'Error al hacer scraping de la página' });
    }
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
 */

const express = require('express');
const { chromium } = require('playwright');
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;



app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['*'],
    allowedHeaders: ['*']
}));

app.get('/scrape', async (req, res) => {
    try {
        // Lanzar el navegador
        const browser = await chromium.launch({ headless: true });
        const userAgentStrings = [
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36',
          ];
          const context = await browser.newContext({
            userAgent: userAgentStrings[Math.floor(Math.random() * userAgentStrings.length)],
          });
        
          const page = await context.newPage();
            
            // Close the browser
        
        /* const page = await browser.newPage(); */
        
        // Navegar a la página objetivo
        /* await page.goto('https://www.riamoneytransfer.com/es-es/send-money-to-bolivia'); */
        await page.goto('https://www.riamoneytransfer.com/es-es/');
        await page.click('text=Rechazar cookies');
        await page.click('.dropdown-container');
        await page.waitForTimeout(1000);
        await page.waitForSelector('.list-search-list'); 
        await page.click('.list-search-list li:nth-child(27)');
        // Esperar hasta que se cargue el contenido dinámico
        await page.waitForTimeout(1000);

        await page.waitForSelector('.text-promo-rate'); // Cambia el selector por el adecuado
        // Extraer el contenido dinámico
        const dynamicContent = await page.evaluate(() => {
            return document.querySelector('.text-promo-rate').innerText; // Cambia el selector
        });

        // Cerrar el navegador
        await browser.close();

        // Enviar la respuesta con el contenido dinámico
        res.json({ data: dynamicContent });
    } catch (error) {
        console.error('Error en el scraping:', error);
        res.status(500).json({ error: 'Error al hacer scraping de la página' });
    }
});

app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});
