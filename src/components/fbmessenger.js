import React, { useEffect } from "react";

// const facebookAppId = "<PAGE_ID>";

export function CustomerChat() {
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
        attribution="setup_tool"
        logged_in_greeting="Welcome to Zion Philippines. Drop your questions and we will get back to you the soonest."
        logged_out_greeting="Thank you for visiting Zion Philippines!"
        theme_color="#d1a636"
        page_id="303146620547418"
      />
    </>
  );
}
