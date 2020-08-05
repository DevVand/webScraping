const puppeteer = require('puppeteer');//Para navegar pelas paginas
const download = require('download-file');//Para fazer o download

(async () => {
    //Cria a pagina
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //Navega pela pagina
    await page.goto('http://www.ans.gov.br/prestadores/tiss-troca-de-informacao-de-saude-suplementar');

    //Busca o padrão tiss mais atualizado
    await page.click('a[href$="padrao-tiss-junho-2020"]');

     //Baixa o padrão tiss
    const links = await page.$eval('a[href$="Padrao_TISS_Componente_Organizacional_202006.pdf"]',a=>a.href)
    var options = {
        directory: "",
        filename: "Padrao_TISS_Componente_Organizacional_202006.pdf"
    }
    
    download(links, options, function(err){
        if (err) throw err
        console.log("Pdf Baixado")
    })
    //Fecha o app
    await browser.close();
  })();


