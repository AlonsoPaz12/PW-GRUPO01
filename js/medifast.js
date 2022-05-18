function register() {      
    const radioButton = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
        switch (radioButton) {
            case "option1":
                location.href = "inicio_paciente.html";
                break;
            case "option2":
                location.href = "inicio_medico.html";
                break;
            default:
                location.href
        }
    }