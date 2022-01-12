const fs = require('fs');
require('dotenv').config();

const axios = require('axios').default;
const MANIFEST_URL = "https://www.bungie.net/Platform/Destiny2/Manifest/"
const BUNGIE_URL = "https://www.bungie.net/"
const AUTH_HEADERS = {"X-API-Key":process.env.BUNGIE_API_KEY}
export default async ()=>{
  const res = await axios.get(MANIFEST_URL,{headers:AUTH_HEADERS})
  const enJSONFiles = res.data.Response.jsonWorldComponentContentPaths.en
  for(let key of Object.keys(enJSONFiles)){
    const manifestRes = await axios.get(BUNGIE_URL+enJSONFiles[key],{headers:AUTH_HEADERS})
    await fs.promises.writeFile('./src/data/'+key+'.json', JSON.stringify(manifestRes.data), {flag:"w"})
  }
}