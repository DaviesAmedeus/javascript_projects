        // Check if geolocation is available in the browser
        if ("geolocation" in navigator) {
            // Get the user's current location
            navigator.geolocation.getCurrentPosition(function(position) {
                // The user's latitude and longitude are in position.coords.latitude and position.coords.longitude
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
               
    
                console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
                document.getElementById('user-location').innerText = "Latitude: "+latitude+" "+"Longitude: "+longitude;

                 
        // const apiUrl = ' https://nominatim.openstreetmap.org/reverse?lat=-6.805913&lon=39.2298496';
       const apiUrl = 'https://geocode.maps.co/reverse?lat='+latitude+'&lon='+longitude+'&api_key=66326826d7705823866430etbe6c756'

    //    const apiUrl = 'https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=-6.805913&longitude=39.2298496&localityLanguage=en'

        // Make a GET request
        fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });



            }, function(error) {
                // Handle errors, if any
                switch (error.code) {
                    case error.PERMISSION_DENIED:
                        console.error("User denied the request for geolocation.");
                        break;
                    case error.POSITION_UNAVAILABLE:
                        console.error("Location information is unavailable.");
                        break;
                    case error.TIMEOUT:
                        console.error("The request to get user location timed out.");
                        break;
                    case error.UNKNOWN_ERROR:
                        console.error("An unknown error occurred.");
                        break;
                }
            });
        } else {
            console.error("Geolocation is not available in this browser.");
        }
         

   

