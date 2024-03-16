<script>

    function criptografia(value = "") {

      // INIT
      var myString = `"${value}"`
      var myPassword = "myPassword";

      // PROCESS
      var encrypted = CryptoJS.AES.encrypt(myString, myPassword);
      var decrypted = CryptoJS.AES.decrypt(encrypted, myPassword);
      //console.log(encrypted.toString());
      return decrypted.toString();
      //console.log(decrypted.toString(CryptoJS.enc.Utf8));

    }

    //criação do usuario do programa

    class Usuario {
      #nome;
      #email;
      #senha;
      constructor(nome, email, senha) {
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
      }
      get nome() {
        return this.#nome;
      }
      get email() {
        return this.#email;
      }
      get senha() {
        return this.#senha;
      }
    }

    const nome = "Talilo Tarlison";
    const email = "22747461726c69736f6e40676d61696c2e636f6d22";
    const senha = "2254406c696c6f22";
    // criação do usuario
    const Talilo = new Usuario(nome, email, senha);



    var inputEmail = document.getElementById("email");
    var inputSenha = document.getElementById("senha");
    var botao = document.getElementById("botao");
    const erro = document.querySelector(".erro");



    //https://www.freecodecamp.org/portuguese/news/tutorial-sobre-button-onclick-em-html-e-evento-de-clique-em-javascript/
    const token = (Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2));
    //evento botao login
    botao.addEventListener("click", function validarUser() {
      const homePage = "https://bookmarks.talilotarlison.repl.co/assets/page/home.html"
      // criptografia
      var emailAcesso = criptografia(inputEmail.value);
      var senhaAcesso = criptografia(inputSenha.value);
      //console.log(senhaAcesso);
      //console.log(emailAcesso);

      if (emailAcesso === Talilo.email && senhaAcesso === Talilo.senha) {
        localStorage.setItem('tokenlogin', token);
        setTimeout(() => {
          //console.log("clicou redirecionado para pagina home");
          window.location.replace(homePage);

        }, 1000)
      } else {
        //console.log("deu errado nao logou");
        erro.textContent = "Email ou Senha estão errado."
        inputEmail.focus();
        inputEmail.style.border = " solid 1px red";
        setTimeout(() => {
          inputSenha.style.border = " solid 1px red";
        }, 1000)

      }

    })

  </script>