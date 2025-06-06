function showSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

function goBack() {
  document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
}

window.addEventListener("popstate", function () {
  goBack();
});
