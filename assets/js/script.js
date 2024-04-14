function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }

  $(document).ready(function() {
    $("#contactForm").validate({
        rules: {
            fullname: {
                required: true,
                lettersOnly: true, // Menerapkan aturan lettersOnly
                maxlength: 20
            },
            email: {
                required: true,
                email: true,
                maxlength: 30
            },
            phone: {
                required: true,
                number: true,
                minlength: 10,
                maxlength: 13
            },
            message: {
                required: true,
                maxlength: 50
            }
        },
        messages: {
            fullname: {
                required: "Nama lengkap harus diisi",
                lettersOnly: "Nama lengkap harus berupa huruf",
                maxlength: "Nama lengkap tidak boleh lebih dari 20 karakter"
            },
            email: {
                required: "Email harus diisi",
                email: "Format email tidak valid",
                maxlength: "Email tidak boleh lebih dari 30 karakter"
            },
            phone: {
                required: "Nomor handphone harus diisi",
                number: "Nomor handphone harus berupa angka",
                minlength: "Nomor handphone tidak boleh kurang dari 10 digit",
                maxlength: "Nomor handphone tidak boleh lebih dari 12 digit"
            },
            message: {
                required: "Pesan harus diisi",
                maxlength: "Pesan tidak boleh lebih dari 50 karakter"
            }
        }
    });

    // Menambahkan metode kustom untuk aturan lettersOnly
    $.validator.addMethod("lettersOnly", function(value, element) {
        return this.optional(element) || /^[a-zA-Z\s]*$/.test(value);
    }, "Harus berupa huruf");
    
});