import React, { useEffect } from "react";

const MessengerChat = () => {
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        xfbml: true,
        version: "v9.0",
      });
    };
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  });
  return (
    <>
      <div id="fb-root" />
      <div
        className="fb-customerchat"
        attribution="install_email"
        page_id="300857950340881"
        logged_in_greeting="Hi! Thank you for reaching Zion Philippines. Message us for inquiries."
        logged_out_greeting="Thank you for visiting Zion Philippines!"
        theme_color="#d1a636"
      />
    </>
  );
};

export default MessengerChat;
