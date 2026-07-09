function loadPage(page) {
    const contentDiv = document.getElementById('content');
    
    // ប្រើ fetch ដើម្បីទាញមាតិកានៃទំព័រផ្សេងៗ
    fetch(`${page}.html`)
        .then(response => response.text())
        .then(data => {
            // យកតែមាតិកាដែលស្ថិតក្នុង body យកមកដាក់
            const parser = new DOMParser();
            const doc = parser.parseFromString(data, 'text/html');
            contentDiv.innerHTML = doc.querySelector('body').innerHTML;
        });
}

// មុខងារលេងចម្រៀងដដែល
const audio = new Audio('snaptik_7644545479585418517_v3.mp3');
window.addEventListener('click', () => {
    audio.play();
}, { once: true });