/*jshint node:true*/
'use strict';

module.exports = function(/* environment, appConfig */) {
  return {
    name: "Let's Cook",
    short_name: "Let's Cook",
    description: "An app for organizing your weekly menu and groceries list.",
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#FFA105",
    icons: [
      {
        "src": "images/icons/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "images/icons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  };
}
