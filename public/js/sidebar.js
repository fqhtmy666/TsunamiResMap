// Fungsi untuk memuat sidebar dari route "/sidebar"
function loadSidebar() {
    fetch('/sidebar')
        .then(response => response.text())
        .then(html => {
            document.getElementById('sidebar-container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading sidebar:', error);
        });
}

// Panggil fungsi loadSidebar saat halaman dimuat
window.onload = loadSidebar;
