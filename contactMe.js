function openGmail() {
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // Open Gmail app on phone
    window.location.href = "mailto:ayomi.4ever1@gmail.com";
  } else {
    // Open Gmail website on PC
    window.open(
      "https://mail.google.com/mail/?view=cm&to=ayomi.4ever1@gmail.com",
      "_blank"
    );
  }
}