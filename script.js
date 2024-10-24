document.getElementById('backgroundColor').addEventListener('change', function() {
    document.body.style.backgroundColor = this.value;
});

document.getElementById('fontSize').addEventListener('input', function() {
    document.body.style.fontSize = this.value + 'px';
});

document.getElementById('darkModeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

document.getElementById('fontStyle').addEventListener('change', function() {
    document.body.style.fontFamily = this.value;
});
document.addEventListener('DOMContentLoaded', function() {
});

// Ambil elemen dari DOM berdasarkan ID
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');
const newTaskInput = document.getElementById('newTask');

// Fungsi untuk menambahkan task
addTaskButton.addEventListener('click', function() {
    const taskText = newTaskInput.value.trim(); // Ambil nilai task, trim untuk menghilangkan spasi di awal dan akhir

    if (taskText === '') {
        alert('Task cannot be empty');  // Jika input kosong, tampilkan alert
        return;  // Hentikan fungsi jika task kosong
    }

    // Buat elemen list baru
    const li = document.createElement('li');

    // Tambahkan elemen ke dalam daftar task (ul)
    const taskContent = document.createElement('span');
    taskContent.textContent = taskText;

    // Bersihkan input setelah task ditambahkan
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete'; // Tambahkan teks "Delete" ke dalam tombol
    deleteButton.style.marginLeft = '20px';
    deleteButton.addEventListener('click', function() {
        taskList.removeChild(li);  // Hapus task dari daftar (ul)
    });

    // Tambahkan task dan tombol delete ke dalam elemen li
    li.appendChild(taskContent);
    li.appendChild(deleteButton);

    // Tambahkan elemen li ke dalam daftar (ul)
    taskList.appendChild(li);

    // Bersihkan input setelah task ditambahkan
    newTaskInput.value = '';
});