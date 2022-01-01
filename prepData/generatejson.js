const imageMap = {
  "PLUG ONE.1 (Adept)":"https://www.bungie.net/common/destiny2_content/icons/1baf945ed58519bc4714f6c71633584a.jpg",
  "Uzume RR4 (Adept)":"https://www.bungie.net/common/destiny2_content/icons/30e5f83d4aab4f5ad52d96748856f62d.jpg",
  "Vision of Confluence (Timelost)":"https://www.bungie.net/common/destiny2_content/icons/7d1034b1713771a8bfe439ac65293674.jpg",
  "Reed's Regret (Adept)":"https://www.bungie.net/common/destiny2_content/icons/482d3645ad4af1e219a790eeaef00c4c.jpg",
  "Praedyth's Revenge (Timelost)":"https://www.bungie.net/common/destiny2_content/icons/0f69a71b41017725de9bd60c29b0ca84.jpg",
  "THE SWARM (Adept)":"https://www.bungie.net/common/destiny2_content/icons/f59aa2a5e7df75da31dc906d8c167b61.jpg",
  "The Palindrome (Adept)": "https://www.bungie.net/common/destiny2_content/icons/0f1fc3d1700d227eeabfb80ed2d8e617.jpg",
  "The Comedian (Adept)": "https://www.bungie.net/common/destiny2_content/icons/9206ad65b7f8339b497b440f18eec8ef.jpg",
  "Shadow Price (Adept)":"https://www.bungie.net/common/destiny2_content/icons/a8749cf2887b36aae84bc35eb3dd5cd2.jpg",
  "Fatebringer (Timelost)": "https://www.bungie.net/common/destiny2_content/icons/2679a29c524de017046d338b1c1de3c7.jpg",
  "Igneous Hammer (Adept)": "https://www.bungie.net/common/destiny2_content/icons/51bb525fdbfe40883dc8372e969b79b0.jpg",
  "The Hothead (Adept)": "https://www.bungie.net/common/destiny2_content/icons/f7378dee43b40f125ee3feab54854f42.jpg",
  "Hung Jury SR4 (Adept)": "https://www.bungie.net/common/destiny2_content/icons/a70dab17197e48824119df7ef397a2dc.jpg",
  "Hezen Vengeance (Timelost)": "https://www.bungie.net/common/destiny2_content/icons/b2662d712b4fc4c0cee8e1b70c167581.jpg",
  "Eye of Sol (Adept)": "https://www.bungie.net/common/destiny2_content/icons/96eba0b6986bdacbce3666b697d90a1f.jpg",
  "Corrective Measure (Timelost)": "https://www.bungie.net/common/destiny2_content/icons/f7beeb61054af0e31be00465d2a27aae.jpg",
  "The Messenger (Adept)": "https://www.bungie.net/common/destiny2_content/icons/ee745e3cf1784b2a800088194ad3a3ef.jpg",
  "Shayura's Wrath (Adept)": "https://www.bungie.net/common/destiny2_content/icons/770f40e2fdd480c2db8843b14ba3a60d.jpg",
  "Sola's Scar (Adept)": "https://www.bungie.net/common/destiny2_content/icons/6d3fd4f88cc6c8875a54fec8d5e39a4b.jpg"
}

const overlayMap = {
  "PLUG ONE.1 (Adept)":"https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "Uzume RR4 (Adept)":"https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "Vision of Confluence (Timelost)":"https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "Reed's Regret (Adept)":"https://www.bungie.net/common/destiny2_content/icons/4368a3e344977c5551407845ede830c2.png",
  "Praedyth's Revenge (Timelost)":"https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "THE SWARM (Adept)":"https://www.bungie.net/common/destiny2_content/icons/6a52f7cd9099990157c739a8260babea.png",
  "The Palindrome (Adept)": "https://www.bungie.net/common/destiny2_content/icons/6a52f7cd9099990157c739a8260babea.png",
  "The Comedian (Adept)": "https://www.bungie.net/common/destiny2_content/icons/4368a3e344977c5551407845ede830c2.png",
  "Shadow Price (Adept)":"https://www.bungie.net/common/destiny2_content/icons/6a52f7cd9099990157c739a8260babea.png",
  "Fatebringer (Timelost)": "https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "Igneous Hammer (Adept)": "https://www.bungie.net/common/destiny2_content/icons/6a52f7cd9099990157c739a8260babea.png",
  "The Hothead (Adept)": "https://www.bungie.net/common/destiny2_content/icons/4368a3e344977c5551407845ede830c2.png",
  "Hung Jury SR4 (Adept)": "https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "Hezen Vengeance (Timelost)": "https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "Eye of Sol (Adept)": "https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "Corrective Measure (Timelost)": "https://www.bungie.net/common/destiny2_content/icons/b07d89064a1fc9a8e061f59b7c747fa5.png",
  "The Messenger (Adept)": "https://www.bungie.net/common/destiny2_content/icons/6a52f7cd9099990157c739a8260babea.png",
  "Shayura's Wrath (Adept)": "https://www.bungie.net/common/destiny2_content/icons/6a52f7cd9099990157c739a8260babea.png",
  "Sola's Scar (Adept)": "https://www.bungie.net/common/destiny2_content/icons/6a52f7cd9099990157c739a8260babea.png"
}

const raidChallengeMap = {
  "Vision of Confluence (Timelost)": 0,
  "Praedyth's Revenge (Timelost)": 1,
  "Fatebringer (Timelost)": 2,
  "Hezen Vengeance (Timelost)":3,
  "Corrective Measure (Timelost)":4
}

const MakeGun = (name)=>{
  return {
    name,
    img:imageMap[name],
    overlay:overlayMap[name]
  }
}


var fs = require("fs");
// READ CSV INTO STRING
var data = fs.readFileSync("weeklydata.csv").toLocaleString();

// STRING TO ARRAY
var weekJSON = []
var weeks = data.split("\n").filter((w,index)=>index!=0); // SPLIT ROWS
weeks.forEach((week) => {
    const items = week.split(",").map(i=>i.trim()); //SPLIT COLUMNS
    if(items.length>2){
      const [DATE, GM_MAP, GM_GUN_1, GM_GUN_2, RAID_GUN, TRIALS_GUN, TRIALS_MAP] = items
      weekJSON.push({
        date:DATE,
        vendors:{
          trials:{
            name:"Trials of osiris",
            items:[
              MakeGun(TRIALS_GUN)
            ],
            map:TRIALS_MAP
          },
          raid:{
            name:"Vault of glass",
            challengeIndex:raidChallengeMap[RAID_GUN],
            items:[
              MakeGun(RAID_GUN)
            ]
          },
          gm:{
            name:"Grandmaster Nightfall",
            items:[
              MakeGun(GM_GUN_1),
              MakeGun(GM_GUN_2)
            ],
            map:GM_MAP
          }
        }
      })
    }
})

fs.writeFileSync("../static/weeklyItems.json", JSON.stringify(weekJSON))