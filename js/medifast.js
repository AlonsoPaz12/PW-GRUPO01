function register() {      
    const radioButton = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
        switch (radioButton) {
            case "option1":
                location.href = "2pac.html";
                break;
            case "option2":
                location.href = "med.html";
                break;
            default:
                location.href
        }
    }