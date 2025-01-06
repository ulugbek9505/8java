// So'zlar ro'yxati
const words = ["non", "banan", "mashina", "asal", "olma", "aziza", "Gul"];
const targetChar = 'n';

// So'zlarni 'n' harfi bo'yicha ajratish
const withTargetChar = words.filter(word => word.toLowerCase().includes(targetChar));
const withoutTargetChar = words.filter(word => !word.toLowerCase().includes(targetChar));

// Natijani chiqarish
console.log(`${withTargetChar} - '${targetChar}' harfi ishtirok etgan so'zlar`);
console.log(`${withoutTargetChar} - '${targetChar}' harfi ishtirok etmagan so'zlar`);
