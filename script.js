const chars = [
    {name: "Kei Tsukishima", position: "Middle Blocker", image: "assets/full-body/tsukki.jpg", height: "100cm", team: "Karasuno High School", description: "Kei Tsukishima is a tall and intelligent middle blocker for the Karasuno High School volleyball team. He is known for his analytical approach to the game and his ability to read the opponent's plays.", stats: "assets/stats/tsukki-stats.jpg"},
    {name: "Tobio Kageyama", position: "Setter", image: "assets/full-body/kageyama.jpg", height: "180cm", team: "Karasuno High School", description: "Tobio Kageyama is a talented setter for the Karasuno High School volleyball team. He is known for his exceptional setting skills and his competitive nature on the court.", stats: "assets/stats/kageyama-stats.jpg"},
    {name: "Shoyo Hinata", position: "Middle Blocker", image: "assets/full-body/hinata.jpg", height: "170cm", team: "Karasuno High School", description: "Shoyo Hinata is a passionate and energetic middle blocker for the Karasuno High School volleyball team. Despite his short stature, he has incredible jumping ability and determination.", stats: "assets/stats/hinata-stats.png"},
    {name: "Yu Nishinoya", position: "Libero", image: "assets/full-body/nishinoya.jpg", height: "160cm", team: "Karasuno High School", description: "Yu Nishinoya is a skilled libero for the Karasuno High School volleyball team. He is known for his quick reflexes, agility, and ability to make incredible saves.", stats: "assets/stats/nishinoya-stats.jpg"},
    {name: "Daichi Sawamura", position: "Captain / Wing Spiker", image: "assets/full-body/daichi.jpg", height: "185cm", team: "Karasuno High School", description: "Daichi Sawamura is the captain and a wing spiker for the Karasuno High School volleyball team. He is known for his leadership skills, reliability, and ability to motivate his teammates.", stats: "assets/stats/daichi-stats.jpg"},
    {name: "Sugawara Koushi", position: "Setter", image: "assets/full-body/sugawara.jpg", height: "175cm", team: "Karasuno High School", description: "Sugawara Koushi is a setter for the Karasuno High School volleyball team. He is known for his supportive nature, strategic thinking, and ability to bring out the best in his teammates.", stats: "assets/stats/suga-stats.jpg"},
    {name: "Oikawa Tooru", position: "Setter", image: "assets/full-body/oikawa.jpg", height: "182cm", team: "Aoba Johsai High School", description: "Oikawa Tooru is a skilled setter for the Aoba Johsai High School volleyball team. He is known for his charismatic personality, exceptional setting skills, and ability to lead his team to victory.", stats: "assets/stats/oikawa-stats.jpg"},
    {name: "Bokuto Koutarou", position: "Wing Spiker", image: "assets/full-body/bokuto.jpg", height: "190cm", team: "Fukurodani Academy", description: "Bokuto Koutarou is a talented wing spiker for the Fukurodani Academy volleyball team. He is known for his powerful spikes, energetic personality, and ability to inspire his teammates.", stats: "assets/stats/bokuto-stats.jpg"}
]

let currentChar = 0;

const nameElement = document.getElementById("name");
const positionElement = document.getElementById("position");
const imageElement = document.getElementById("full-body");
const heightElement = document.getElementById("height");
const teamElement = document.getElementById("team");
const descriptionElement = document.getElementById("description");
const statsElement = document.getElementById("stats");

const prevButton = document.getElementById("left");
const nextButton = document.getElementById("right");

const isCharacterPage =
    nameElement &&
    positionElement &&
    imageElement &&
    heightElement &&
    teamElement &&
    descriptionElement &&
    prevButton &&
    nextButton;

function updateCharacter() {
    if (!isCharacterPage) {
        return;
    }

    const char = chars[currentChar];
    nameElement.textContent = char.name;
    positionElement.textContent = char.position;
    imageElement.src = char.image;
    heightElement.textContent = char.height;
    teamElement.textContent = char.team;
    descriptionElement.textContent = char.description;
    statsElement.src = char.stats;
}

if (isCharacterPage) {
    prevButton.addEventListener("click", () => {
        currentChar = (currentChar - 1 + chars.length) % chars.length;
        updateCharacter();
    });

    nextButton.addEventListener("click", () => {
        currentChar = (currentChar + 1) % chars.length;
        updateCharacter();
    });

    updateCharacter();
}