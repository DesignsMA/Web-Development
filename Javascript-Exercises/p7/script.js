function hexToIPv4(hex) {
  // Quitar 0x si viene incluido
  hex = hex.replace(/^0x/, "");

  // Asegurar 8 caracteres
  hex = hex.padStart(8, "0");

  // Convertir cada par a decimal
  const octets = hex.match(/.{2}/g).map(h => parseInt(h, 16));

  return octets.join(".");
}

function cidrToMask(cidr) {
  let mask = (0xffffffff << (32 - cidr)) >>> 0;

  return [
    (mask >>> 24) & 255,
    (mask >>> 16) & 255,
    (mask >>> 8) & 255,
    mask & 255
  ].join(".");
}

function getNetwork(ip, mask) {
  const ipParts = ip.split(".").map(Number);
  const maskParts = mask.split(".").map(Number);

  const network = ipParts.map((v, i) => v & maskParts[i]);
  return network.join(".");
}
const hex = "00F0A8C0"; // 192.168.1.1
const cidr = 24;

const ip = hexToIPv4(hex);
const mask = cidrToMask(cidr);
const network = getNetwork(ip, mask);

console.log("IP:", ip);
console.log("Mask:", mask);
console.log("Network:", network);