
function validateForm() {
  
    if (document.cookie) {
        var c = document.cookie;
        language = c.substring(c.lastIndexOf("=") + 1);
    } else {
        language = "EN";
    }

    var event_form;
    if (language == "EN")
        event_form = document.getElementsByName("events")[0];
    else {
        order_form = document.getElementsByName("events")[1];
    }

    var form_titles = document.getElementsByClassName("form_title");
    form_titles[0].innerHTML = "Your information has been uploaded which is as below."
    form_titles[1].innerHTML = "Votre information a été téléchargée, comme ci-dessous."

    var event_info;
    document.getElementById("event_table").style.display = "none";
    document.getElementById("event_info").style.display = "block";
   if (language == "EN") {
        event_info = document.getElementsByClassName("order_info_t")[0];
        event_form = document.getElementsByName("events")[0];
        document.getElementsByClassName("order_info_t")[1].style.display = "none";
        event_info.getElementsByClassName("name_v")[0].appendChild(document.createTextNode(event_form.your_name.value));
        event_info.getElementsByClassName("mail_v")[0].appendChild(document.createTextNode(event_form.email.value));
        event_info.getElementsByClassName("phone_v")[0].appendChild(document.createTextNode(event_form.ph_number.value));
        event_info.getElementsByClassName("event_v")[0].appendChild(document.createTextNode(event_form.event.value));
        event_info.getElementsByClassName("nbr_people_v")[0].appendChild(document.createTextNode(event_form.nbr_personnes.value));
        event_info.getElementsByClassName("date_v")[0].appendChild(document.createTextNode(event_form.eventDate.value));
        event_info.getElementsByClassName("message_v")[0].appendChild(document.createTextNode(event_form.your_text.value));
    }else {
        event_info = document.getElementsByClassName("order_info_t")[1];
        order_form = document.getElementsByName("events")[1];
        document.getElementsByClassName("order_info_t")[0].style.display = "none";
        event_info.getElementsByClassName("name_v")[1].appendChild(document.createTextNode(event_form.your_name.value));
        event_info.getElementsByClassName("mail_v")[1].appendChild(document.createTextNode(event_form.email.value));
        event_info.getElementsByClassName("phone_v")[1].appendChild(document.createTextNode(event_form.ph_number.value));
        event_info.getElementsByClassName("event_v")[1].appendChild(document.createTextNode(event_form.event.value));
        event_info.getElementsByClassName("nbr_people_v")[1].appendChild(document.createTextNode(event_form.nbr_personnes.value));
        event_info.getElementsByClassName("date_v")[1].appendChild(document.createTextNode(event_form.eventDate.value));
        event_info.getElementsByClassName("message_v")[1].appendChild(document.createTextNode(event_form.your_text.value));
    }


   event_info.style.display = "table";
   event_form.style.display = "none";

   /*event_info.getElementsByClassName("name_v")[0].appendChild(document.createTextNode(event_form.your_name.value));
   event_info.getElementsByClassName("mail_v")[0].appendChild(document.createTextNode(event_form.email.value));
   event_info.getElementsByClassName("phone_v")[0].appendChild(document.createTextNode(event_form.ph_number.value));
   event_info.getElementsByClassName("event_v")[0].appendChild(document.createTextNode(event_form.event.value));
   event_info.getElementsByClassName("nbr_people_v")[0].appendChild(document.createTextNode(event_form.nbr_personnes.value));
   event_info.getElementsByClassName("date_v")[0].appendChild(document.createTextNode(event_form.eventDate.value));
   event_info.getElementsByClassName("message_v")[0].appendChild(document.createTextNode(event_form.your_text.value));
   */

  }
