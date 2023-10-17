// This code will run on YouTube pages
if (window.location.href.includes("youtube.com/watch")) {
    // ytd-popup-container is the class of the "Ads blocked" modal that appears when starting a video from time to time
    var modal = document.getElementsByClassName("ytd-popup-container");

    // If the modal is present, close it after 1 second
    setTimeout(() => {
        if(modal){
            for (var i = 0; i < modal.length; i++) {
                modal[i].style.display = "none";
            }
            console.warn("Modal of ads closed!");
        }else{
            console.warn("Modal of ads not found!");
        }
    }, 1000);     
  }
  