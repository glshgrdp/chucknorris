const jokeText = document.getElementById('joke-text');
const jokeBtn = document.getElementById('joke-btn');

// API'den şaka çekme fonksiyonu
async function getJoke() {
    try {
        jokeText.innerText = "Düşünülüyor..."; // Chuck Norris düşünmez ama biz öyle diyelim
        const response = await fetch('https://api.chucknorris.io/jokes/random');
        const data = await response.json();
        
        // Şakayı ekrana yazdır
        jokeText.innerText = data.value;
    } catch (error) {
        jokeText.innerText = "Bir hata oluştu. Chuck Norris muhtemelen interneti nakavt etti.";
        console.error("Hata:", error);
    }
}

// Butona tıklandığında yeni şaka getir
jokeBtn.addEventListener('click', getJoke);

// Sayfa ilk yüklendiğinde bir şaka getir
getJoke();