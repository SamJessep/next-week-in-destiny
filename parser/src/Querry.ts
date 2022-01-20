var fs = require("fs");
export const PLUG_DEFS = "src/data/DestinyPlugSetDefinition.json";
export const ITEM_DEFS = "src/data/DestinyInventoryItemDefinition.json";
export const SOCKET_DEFS = "src/data/DestinySocketTypeDefinition.json";

export const getItemByHash = (manifestType: string, hash: string) => {
  var data = fs.readFileSync(manifestType, { encoding: "utf8" });
  const json = JSON.parse(data);
  return json[hash];
};

const getPlugs = (plugHash: string) => {
  var data = fs.readFileSync(PLUG_DEFS);
  const json = JSON.parse(data);
  return json[plugHash].reusablePlugItems;
};

const getPlugPerks = (json: string, plugHash: string) => {
  const plugs = getPlugs(plugHash);
  return plugs.map((plug: any) => getPerk(json, plug.plugItemHash));
};

const getPerk = (json: any, perkHash: string) => {
  const perk = json[perkHash];
  return perk?.displayProperties;
};

const getSocketName = (socketHash: string) => {
  var data = fs.readFileSync(SOCKET_DEFS);
  const json = JSON.parse(data);
  const socket = json[socketHash];
  return socket?.plugWhitelist[0].categoryIdentifier;
};

const isShitSocket = (socket: any, index: number) => {
  if (!socket.name) return true;
  if (index > 1) {
    if (!Array.isArray(socket.plugs)) return true;
  }
  if (socket.name.toLowerCase() == "shader") return true;
  return false;
};

export const getAllPerks = (weaponHash: string) => {
  var data = fs.readFileSync(ITEM_DEFS);
  const json = JSON.parse(data);
  const weapon = getItemByHash(ITEM_DEFS, weaponHash);
  const sockets = weapon.sockets.socketEntries;
  const cleanedSockets: any = [];
  sockets.forEach((socket: any, index: number) => {
    const isRandomSocket = "randomizedPlugSetHash" in socket;
    const name = getSocketName(socket.socketTypeHash);
    const plugs = isRandomSocket
      ? getPlugPerks(json, socket.randomizedPlugSetHash)
      : getPerk(json, socket.singleInitialItemHash);
    const newSocket = { name, plugs, random: isRandomSocket };
    if (!isShitSocket(newSocket, index)) cleanedSockets.push(newSocket);
  });

  return cleanedSockets;
};
