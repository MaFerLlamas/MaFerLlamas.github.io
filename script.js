// ========================================
// FECHA DEL EVENTO
// ========================================

const birthdayDate = new Date(
  "2026-10-17T17:00:00-06:00"
);


// ========================================
// GOOGLE APPS SCRIPT
// ========================================

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzKZQR6UEs8XCnui6PBC4yc_CkcrtnEQQnfDpUh8zd57xatO641pG6o7jChhNcsftXJ/exec";
  


// ========================================
// CUENTA REGRESIVA
// ========================================

const daysEl =
  document.getElementById("days");

const hoursEl =
  document.getElementById("hours");

const minutesEl =
  document.getElementById("minutes");

const secondsEl =
  document.getElementById("seconds");

const messageEl =
  document.getElementById("countdown-message");


function pad(number) {
  return String(number).padStart(2, "0");
}


function updateCountdown() {

  const now = new Date();

  const difference =
    birthdayDate - now;


  if (difference <= 0) {

    daysEl.textContent = "00";
    hoursEl.textContent = "00";
    minutesEl.textContent = "00";
    secondsEl.textContent = "00";

    messageEl.textContent =
      "✦ ¡EL SHOW DEBE CONTINUAR! ✦";

    return;
  }


  const totalSeconds =
    Math.floor(difference / 1000);


  const days =
    Math.floor(
      totalSeconds / 86400
    );


  const hours =
    Math.floor(
      (totalSeconds % 86400) / 3600
    );


  const minutes =
    Math.floor(
      (totalSeconds % 3600) / 60
    );


  const seconds =
    totalSeconds % 60;


  daysEl.textContent =
    pad(days);

  hoursEl.textContent =
    pad(hours);

  minutesEl.textContent =
    pad(minutes);

  secondsEl.textContent =
    pad(seconds);
}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


// ========================================
// RSVP
// ========================================

const form =
  document.getElementById("rsvp-form");

const formMessage =
  document.getElementById("form-message");


form.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();


    const name =
      document
        .getElementById("guest-name")
        .value
        .trim();


    const attendance =
      document
        .getElementById("attendance")
        .value;


    if (
      !name ||
      !attendance
    ) {
      return;
    }


    const addToCalendar = document.getElementById("add-to-calendar");
    const button = form.querySelector("#submit"); 


    button.disabled = true;

    button.textContent =
      "ENVIANDO...";

    formMessage.textContent =
      "";


    // ====================================
    // DATOS
    // ====================================

    const data =
      new URLSearchParams();


    data.append(
      "name",
      name
    )


    data.append(
      "attendance",
      attendance
    );


    try {

      await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: "POST",

          mode: "no-cors",

          body: data
        }
      );


      // ==================================
      // MENSAJE
      // ==================================

      if (attendance === "si") {

        formMessage.textContent =
          `✦ ${name}, tu asistencia ha quedado confirmada. 🖤`;
        addToCalendar.style.visibility = "visible";
          

      } else {

        formMessage.textContent =
          `😭 ${name}, te vamos a extrañar. Gracias por avisar.`;

      }


      form.reset();


    } catch (error) {

      console.error(
        "Error al enviar RSVP:",
        error
      );


      formMessage.textContent =
        "⚠️ No pudimos enviar tu respuesta. Inténtalo nuevamente.";

    }



    button.disabled = false;

    button.textContent =
      "✦ CONFIRMAR ✦";

  }
);