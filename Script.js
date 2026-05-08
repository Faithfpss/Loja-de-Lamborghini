// 1. Selecionamos o formulário e o campo de texto pelo ID
const formNewsletter = document.getElementById('form-newsletter');
const emailInput = document.getElementById('email-input');
// 2. Criamos um "ouvinte" para o evento de envio (submit)
formNewsletter.addEventListener('submit', function(event) {
 event.preventDefault(); // Impede a página de recarregar
 const email = emailInput.value; // Pega o que o usuário digitou

 // 3. Exibe a mensagem de sucesso e limpa o campo
 alert(`Obrigado por se inscrever, gamer!\nNovidades serão enviadas para: ${email}`);
 emailInput.value = "";
});


document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    // Regex: pelo menos 1 maiúscula e 1 caractere especial
    const hasUpperCase = /[A-Z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (!email || !password) {
        errorMsg.textContent = "Preencha todos os campos!";
        return;
    }

    if (!hasUpperCase || !hasSpecialChar) {
        errorMsg.textContent = "A senha deve ter letra maiúscula e caractere especial!";
        return;
    }

    errorMsg.textContent = "";
    alert("Login válido!");
});