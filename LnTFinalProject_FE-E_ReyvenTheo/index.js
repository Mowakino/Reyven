document.getElementById('registration-form').addEventListener('submit', function(event) {
  event.preventDefault();

  // Validasi form
  var email = document.getElementById('email').value;
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var event = document.getElementById('event').value;
  var errorMessage = '';

  if (!email.includes('@')) {
    errorMessage += 'Email harus memiliki karakter "@"\n';
  }

  if (name.length < 3) {
    errorMessage += 'Nama harus memiliki minimal 3 karakter\n';
  }

  if (!phone.startsWith('08') || phone.length < 14 || phone.length > 16) {
    errorMessage += 'Nomor telepon harus dimulai dengan "08" dan memiliki panjang 14 digit\n';
  }

  if (errorMessage !== '') {
    document.getElementById('error-message').innerText = errorMessage;
    return;
  }

  // Kirim data menggunakan AJAX (misalnya dengan jQuery)
  $.ajax({
    url: 'https://your-firebase-database-url.firebaseio.com/registrations.json',
    type: 'POST',
    data: JSON.stringify({ email: email, name: name, phone: phone, event: event }),
    success: function(response) {
      alert('Pendaftaran berhasil!');
      // Reset form setelah pendaftaran berhasil
      document.getElementById('registration-form').reset();
    },
    error: function(xhr, status, error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan saat mengirim data.');
    }
  });
});