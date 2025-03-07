async function fetchSkyscannerPrice() {
    const skyscannerUrl = "https://www.skyscanner.com/transport/flights/ric/mhh/251104/251110/config/15873-2511040646--32573-1-14055-2511041115%7C14055-2511101455--32573-1-15873-2511102329?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false";
    
    const priceContainer = document.getElementById("flight-price");
    
    try {
        // Skyscanner API needed for real-time pricing (replace with actual API call)
        const response = await fetch("https://your-backend.com/get-skyscanner-price"); // Placeholder
        const data = await response.json();
        
        let price = data.price || "Check Price"; // Default fallback text
        
        priceContainer.innerHTML = `<a href='${skyscannerUrl}' target='_blank' class='flight-button'>Flight: $${price}</a>`;
    } catch (error) {
        console.error("Error fetching flight price:", error);
        priceContainer.innerHTML = `<a href='${skyscannerUrl}' target='_blank' class='flight-button'>Check Price</a>`;
    }
}

// Load the flight price
fetchSkyscannerPrice();
