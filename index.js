const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar');
    await page.click('a[href$="padrao-tiss-junho-2020"]');
    const links = await page.$$eval('a[href$="Padrao_TISS_Componente_Organizacional_202006.pdf"]', e=>e.map((a)=>a.href))
    console.log(links[0])
  })();