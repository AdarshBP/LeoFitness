
var phoneNumber = "7406686010";
var whatsappLink = "https://wa.me/" + phoneNumber + "?text=";


function generateWhatsAppLink(data) {
    var description =""
    //if there is data length then add it to the description
    if(data.length > 0){
        description = "I'm excited to join your gym.I would like to know more information about "+data+" Plan and its benefits.";
    }else{
        description = "I'm excited to join your gym.I would like to know more information about various Plans and its benefits.";
    }
    sendWhatsAppMessage(description);    
}

function generateCustomWhatsAppLink(data) {
    var description ="";
   
    if(data == "Business"){
        description = "I'm excited to join you , lets discuss about the business.";
    }else if (data == "Franchise"){
        description = "I'm excited to join you , lets discuss about the Franchise and think on expanding your business.";
    }else if (data == "Partnership"){
        description = "I'm excited to be your partner , lets discuss about the Partnership.";
    }else if (data == "Network"){
        description = "I would like to know more information about your Network and its referal benefits.";
    }else if (data == "Careers"){
        description = "I would like to know more information about your Careers and its benefits.";
    }else if (data == "SampleClass"){
        description = "I'm Excited to join your gym , I would like to join your Sample Class.";
    }else{
        return;
    }
    sendWhatsAppMessage(description);
}

function sendWhatsAppMessage(message){
    var encodedDescription = encodeURIComponent(
        message
    );
    window.open(whatsappLink+encodedDescription, "_blank");
}

