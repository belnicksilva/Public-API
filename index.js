import express  from "express";
import axios from 'axios';
import CoinpaprikaAPI from '@coinpaprika/api-nodejs-client';

//External lib included in the .gitignore - The external file has the APIKey
import {index,currency} from './secret.js';

const client = new CoinpaprikaAPI();


const app=express();
const port = 3000;

app.use(express.static('public'));

app.get('/', async (req,res)=>{
    let vv=await client.getTicker().then().catch(console.error);
    
    //Extration and conversion of Bitcoin and ethereum from the request (Public API)
    let bit=Math.round(vv.find(item=>item.name==="Bitcoin").price_usd),
    ether=Math.round(vv.find(item=>item.name==="Ethereum").price_usd);

    let sp500=0,dow=0;
    var coin=0,info;
    try {
      //Axios to send HTTP requests to the API and handle responses
      coin= await axios.request(currency);
      const stock = await axios.request(index);

      sp500=Math.round(parseInt(stock.data.SPX.high));
      dow=Math.round(parseInt(stock.data.DJI.high));
      
      info={
        ethereum:ether,
        bitcoin:bit,
        sp500:sp500,
        dow:dow,
        eur_usd:coin.data['EUR/USD'].rate,
        eur_gbp:coin.data['EUR/GBP'].rate,
      };

    } catch (error) {
        console.error(error);
    }

    res.render('index.ejs',info);
});

app.listen(port,()=>{
    console.log("Listening on port:"+port+"...");
});