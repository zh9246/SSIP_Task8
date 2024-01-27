import React from 'react'

const ContactCard = () => {
  return (
    <div class="container mx-auto px-4 py-6">
        <div class="flex flex-wrap justify-between items-center">
            <div class="w-full md:w-1/3 mb-4 md:mb-0">
                <img src="logo-placeholder.png" alt="Cheezious Logo" class="w-40 h-40"/>
            </div>
            <div class="w-full md:w-1/3 mb-4 md:mb-0">
                <h2 class="font-bold text-lg mb-2">Cheezious</h2>
                <p><i class="fas fa-phone mr-2"></i>+925111446699</p>
                <p><i class="fas fa-envelope mr-2"></i>support@cheezious.com</p>
                <p><i class="fas fa-map-marker-alt mr-2"></i>Cheezious- Baghbanpura, Main G.T. Road, Baghbanpura, Lahore, Cheezious- Baghbanpura, Lahore</p>
                <div class="flex mt-4">
                    <img src="google-play-badge.png" alt="Google Play" class="app-icons"/>
                    <img src="app-store-badge.png" alt="App Store" class="app-icons"/>
                </div>
            </div>
            <div class="w-full md:w-1/3">
                <h3 class="font-bold text-lg mb-2">Our Timings</h3>
                <p>Monday – Sunday</p>
                <p>11:00 AM – 03:00 AM</p>
                <div class="footer-icons mt-4">
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-twitter-square"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>
            </div>
        </div>
        <hr class="my-6"/>
        <p class="text-center text-sm">&copy; 2024 Powered by Blink Co.</p>
    </div>
  )
}

export default ContactCard
