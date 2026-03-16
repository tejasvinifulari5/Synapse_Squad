        function togglePassword(inputId, button) {
            const input = document.getElementById(inputId);
            const icon = button.querySelector('.eye-icon');
            
            if (input.type === 'password') {
                input.type = 'text';
                icon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                `;
            } else {
                input.type = 'password';
                icon.innerHTML = `
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.644C3.301 8.844 7.087 5 12 5c4.913 0 8.699 3.844 9.964 6.678.067.151.067.327 0 .478C20.699 15.156 16.913 19 12 19c-4.913 0-8.699-3.844-9.964-6.678Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                `;
            }
        }

        document.getElementById('registrationForm').addEventListener('submit', function(e) {

    e.preventDefault(); // stop default form submit

    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirm-password').value;

    if (pass !== confirm) {

        const confirmInput = document.getElementById('confirm-password');

        confirmInput.classList.add('border-red-500','ring-red-100','ring-4');

        setTimeout(() => {
            confirmInput.classList.remove('border-red-500','ring-red-100','ring-4');
        },3000);

        return;
    }

    // success redirect
    window.location.href = "dashboard.html";

});
