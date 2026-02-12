// ระบบค้นหา (จะทำงานเฉพาะหน้าที่มีช่อง Search)
const searchInput = document.getElementById('search');
if (searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        let value = e.target.value.toLowerCase();
        let cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            let title = card.querySelector('strong').innerText.toLowerCase();
            card.style.display = title.includes(value) ? "block" : "none";
        });
    });
}

// ฟังก์ชันอื่นๆ ที่ต้องการใช้ทุกหน้าสามารถเขียนเพิ่มที่นี่ได้เลย