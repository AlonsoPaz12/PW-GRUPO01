function register() {      
    const radioButton = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
        switch (radioButton) {
            case "option1":
                document.getElementById("signInForm").action = "inicio_paciente.html";
                break;
            case "option2":
                document.getElementById("signInForm").action = "inicio_medico.html";
                break;
            default:
                location.href
        }
    }