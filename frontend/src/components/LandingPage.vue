<template>
  <div class="landing-page">
    <div class="main-content">
      <nav class="navbar">
        <div class="logo-section">
          <img src="/frost_and_flour_icon.png" alt="Frost and Flour Logo" class="logo-img" />
          <span class="logo-text">Frost and Flour</span>
        </div>
        <ul class="nav-links">
          <li class="active">Home</li>
          <li>Menu</li>
          <li>About</li>
          <li>Orders</li>
          <li>Contact</li>
        </ul>
        <div v-if="authUser" class="nav-icons">
          <div class="profile-icon-wrapper" ref="profileMenuRef">
            <button class="icon-btn" @click.stop="showProfileMenu = !showProfileMenu">
              <!-- Person SVG -->
              <svg width="24" height="24" fill="none" stroke="#d72660" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-2.2 3.6-4 8-4s8 1.8 8 4"/></svg>
            </button>
            <div v-if="showProfileMenu" class="profile-dropdown">
              <div class="dropdown-item" @click="viewProfile">View Profile</div>
              <div class="dropdown-item" @click="logout">Logout</div>
            </div>
          </div>
          <div class="cart-icon-wrapper">
            <button class="icon-btn">
              <!-- Cart SVG -->
              <svg width="24" height="24" fill="none" stroke="#d72660" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              <span class="cart-badge">{{ cartCount }}</span>
            </button>
          </div>
        </div>
      </nav>

      <section class="hero-section">
        <div class="hero-img-col">
          <img src="/home_page.jpg" alt="Bakery Cake" class="hero-img" />
        </div>
        <div class="hero-content-col">
          <h1 class="hero-title">Deliver You A Blissful<br />Dessert in Every Bite</h1>
          <p class="hero-desc">
Indulge in handcrafted desserts made with love, fresh ingredients, and a sprinkle of joy. From classic cupcakes to signature creations, every bite is a celebration of flavor. Whether you're craving a treat or planning a special event, we're here to make your day a little sweeter!          </p>
          <button class="about-btn">About Us</button>
        </div>
      </section>

      <!-- Best Selling Menu Preview Section -->
      <section class="menu-preview-section">
        <div class="menu-header-row">
          <div class="menu-header-title">
            <h2>Try Our Best Selling</h2>
            <div class="menu-header-underline"></div>
          </div>
          <div class="menu-header-divider"></div>
          <div class="menu-header-desc">
            <p>Here's our best creations that everyone loves. Lightness and sweetness of the cake make you want more and more. Start from cake, sundaes and other creations.</p>
          </div>
        </div>
        <div class="menu-cards-row">
          <div v-for="item in bestSelling" :key="item.id" class="menu-card">
            <img :src="item.img" :alt="item.name" class="menu-card-img" />
            <div class="menu-card-title">{{ item.name }}</div>
            <div class="menu-card-rating">
              <span v-for="n in 5" :key="n" :class="['star', { inactive: n > Math.round(item.rating) }]">★</span>
              <span class="rating-text">{{ item.rating.toFixed(1) }} Rating</span>
            </div>
          </div>
        </div>
        <div class="menu-view-more-row">
          <button class="menu-view-more-btn">View More <span class="arrow">→</span></button>
        </div>
      </section>

      <!-- About Us Section -->
      <section class="about-preview-section">
        <img src="/about_preview.jpg" alt="About Us" class="about-bg-img" />
        <div class="about-content">
          <h2 class="about-title">About us</h2>
          <p class="about-desc">We're all about good vibes and great bakes! Everything we make is crafted to spark joy and satisfy your sweet tooth!</p>
          <button class="about-read-btn">Read More</button>
        </div>
      </section>

      <!-- Contact Section / Footer -->
      <footer class="contact-footer-section">
        <img src="/contact_preview.jpg" alt="Contact Background" class="contact-bg-img" />
        <div class="contact-footer-content">
          <div class="footer-top-row">
            <div class="footer-logo-row">
              <img src="/frost_and_flour_icon.png" alt="Frost and Flour Logo" class="footer-logo-img" />
              <span class="footer-logo-text">Frost & Flour</span>
            </div>
            <div class="footer-social-row footer-social-right">
              <span>Follow us</span>
              <a href="#" class="footer-social-icon" aria-label="Facebook"><svg width="22" height="22" fill="none" stroke="#d72660" stroke-width="2" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
              <a href="#" class="footer-social-icon" aria-label="Pinterest"><svg width="22" height="22" fill="none" stroke="#d72660" stroke-width="2" viewBox="0 0 24 24"><path d="M8.72 21c.38-1.5 2.28-8.5 2.28-8.5s-.57-1.13-.57-2.8c0-2.62 2.1-4.75 4.7-4.75 2.2 0 3.43 1.57 3.43 3.66 0 2.2-1.17 5.5-2.8 5.5-1.1 0-1.92-1.1-1.66-2.45.32-1.7.94-3.54.94-4.77 0-1.1-.6-2-1.8-2-1.43 0-2.6 1.5-2.6 3.5 0 1.3.47 2.2.47 2.2s-1.6 6.7-1.9 8.1c-.2.8-.3 1.7-.3 2.5 0 .3.1.6.2.8.1.2.3.3.5.3.2 0 .4-.1.5-.3.1-.2.2-.5.2-.8 0-.8.1-1.7.3-2.5z"/></svg></a>
              <a href="#" class="footer-social-icon" aria-label="WhatsApp"><svg width="22" height="22" fill="none" stroke="#d72660" stroke-width="2" viewBox="0 0 24 24"><path d="M21.7 20.3l-3.4-3.4c1.1-1.5 1.7-3.3 1.7-5.2C20 6.5 16.5 3 12.5 3S5 6.5 5 11c0 1.9.6 3.7 1.7 5.2l-3.4 3.4c-.4.4-.4 1 0 1.4.2.2.5.3.7.3s.5-.1.7-.3l3.4-3.4c1.5 1.1 3.3 1.7 5.2 1.7 4 0 7.5-3.5 7.5-7.5 0-1.9-.6-3.7-1.7-5.2z"/></svg></a>
              <a href="#" class="footer-social-icon" aria-label="Instagram"><svg width="22" height="22" fill="none" stroke="#d72660" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5"/></svg></a>
            </div>
          </div>
          <div class="footer-divider"></div>
          <div class="footer-bottom-row">
            <div class="footer-col">
              <div class="footer-col-title">Contact</div>
              <div>(051)-2552890</div>
              <div>frostandflour@gmail.com</div>
              <div>Street 39 H-8/3</div>
              <div>Islamabad, Pakistan</div>
            </div>
            <div class="footer-col">
              <div class="footer-col-title">Explore</div>
              <div>Home</div>
              <div>Blog</div>
              <div>Services</div>
            </div>
          </div>
          <div class="footer-copyright">© 2024 Frost & Flour. All rights reserved</div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const authUser = ref(localStorage.getItem('authUser'))
const showProfileMenu = ref(false)
const cartCount = ref(0)
const profileMenuRef = ref(null)

function logout() {
  localStorage.removeItem('authUser')
  authUser.value = null
  router.push('/login')
}

function viewProfile() {
  // Placeholder for profile view logic
  showProfileMenu.value = false
  alert('Profile page coming soon!')
}

// Close dropdown when clicking outside
function handleClickOutside(event) {
  if (profileMenuRef.value && !profileMenuRef.value.contains(event.target)) {
    showProfileMenu.value = false
  }
}
if (typeof window !== 'undefined') {
  window.addEventListener('click', handleClickOutside)
}

// Listen for storage changes (in case of multi-tab logout)
window.addEventListener('storage', () => {
  authUser.value = localStorage.getItem('authUser')
})

const bestSelling = [
  {
    id: 1,
    name: 'Raspberry Sundae',
    img: '/rasbperry_sundae.jpg',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Churros',
    img: '/churros.jpg',
    rating: 4.6,
  },
  {
    id: 3,
    name: 'Blueberry Pie',
    img: '/blueberry_pie.jpg',
    rating: 4.2,
  },
  {
    id: 4,
     name: 'Macarons',
    img: '/macarons.jpg',
    rating: 4.0,
  },
  {
    id: 5,
    name: 'Molten Lava Cake',
    img: '/molten_lava.jpg',
    rating: 4.3,
  },
  {
    id: 6,
    name: 'Fruit Waffle',
    img: '/Fruit_waffle.jpg',
    rating: 4.1,
  },
  {
    id: 7,
    name: 'Sprinkled Doughnuts',
    img: '/sprinkled_doughnuts.jpg',
    rating: 4.3,
  },
]
</script>

<style scoped>
:global(html), :global(body) {
  background: #ffe6f0;
  margin: 0;
  padding: 0;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
}
.landing-page {
  background: #ffe6f0;
  min-height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  color: #d72660;
  overflow-x: hidden;
}

.main-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.navbar {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0;
  background: #ffe6f0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 10;
  border: none;
  box-shadow: none;
  height: 64px;
}
.logo-section {
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin: 0;
  padding: 0 0 0 1.2rem;
  min-width: 0;
}
.logo-img {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background: none;
  border: none;
  margin: 0;
  object-fit: contain;
  display: block;
}
.logo-text {
  font-size: 1.3rem;
  font-family: inherit;
  font-weight: 500;
  color: #d72660;
  margin-left: 0.6rem;
  letter-spacing: 0.01em;
  display: flex;
  align-items: center;
  line-height: 1;
  white-space: nowrap;
}
.nav-links {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;
  list-style: none;
  font-size: 1rem;
  font-weight: 500;
  color: #d72660;
  margin: 0;
  padding: 0 1.2rem 0 0;
  flex: 0 0 auto;
}
.nav-links li {
  cursor: pointer;
  padding-bottom: 0.2rem;
  border-bottom: 2px solid transparent;
  transition: border 0.2s;
  white-space: nowrap;
  color: #d72660;
  font-weight: 500;
  background: none;
  border: none;
  margin: 0;
  display: flex;
  align-items: center;
}
.nav-links li.active, .nav-links li:hover {
  border-bottom: 2px solid #d72660;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  max-width: 1100px;
  margin: 2.5rem auto;
  padding: 2.5rem 2rem;
  background: #ffe6f0;
  border-radius: 0;
  box-sizing: border-box;
}
.hero-img-col {
  flex: 1 1 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-width: 0;
}
.hero-img {
  width: 350px;
  max-width: 100%;
  border-radius: 24px;
  object-fit: cover;
  background: #fff;
  box-shadow: 0 2px 12px rgba(0,0,0,0.04);
  display: block;
}
.hero-content-col {
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 420px;
  min-width: 0;
  padding: 0 1rem;
}
.hero-title {
  color: #d34a5a;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.2;
}
.hero-desc {
  color: #444;
  font-size: 1rem;
  margin-bottom: 1.5rem;
}
.about-btn {
  background: #6fcf97;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 0.7rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.about-btn:hover {
  background: #4caf50;
}

.menu-preview-section {
  margin: 3.5rem auto 80px auto;
  max-width: 1200px;
  background: none;
  padding: 2.5rem 1.5rem 2.5rem 1.5rem;
  border-radius: 24px;
  box-sizing: border-box;
  min-height: 340px;
}
.menu-header-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 3.5rem;
  margin-bottom: 2.2rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
.menu-header-title {
  min-width: 320px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.menu-header-title h2 {
  color: #7a263a;
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  letter-spacing: 0.01em;
}
.menu-header-underline {
  width: 60px;
  height: 3px;
  background: #d72660;
  border-radius: 2px;
  margin-top: 0.2rem;
}
.menu-header-divider {
  width: 2px;
  min-height: 70px;
  background: #e9d6d6;
  margin: 0 2.2rem;
  border-radius: 2px;
  align-self: stretch;
}
.menu-header-desc p {
  color: #7a263a;
  font-size: 1.05rem;
  margin: 0;
  max-width: 420px;
  line-height: 1.5;
  text-align: left;
  padding-left: 7rem;
}
.menu-cards-row {
  display: flex;
  gap: 1.5rem;
  flex-wrap: nowrap;
  overflow-x: auto;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
}
.menu-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 0 0 3px #fff, 0 2px 16px 0 #ffd6e6, 0 0 16px 2px #ffb6d5;
  border: 2.5px solid #ffb6d5;
  min-width: 200px;
  max-width: 220px;
  flex: 0 0 200px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.1rem 1rem 1rem 1rem;
  transition: box-shadow 0.2s, box-shadow 0.22s, transform 0.22s, border 0.22s;
}
.menu-card:hover {
  box-shadow: 0 0 0 4px #fff, 0 6px 32px 0 #ffb6d5, 0 0 32px 4px #d72660;
  border: 2.5px solid #d72660;
  transform: translateY(-8px) scale(1.04);
  z-index: 2;
}
.menu-card-img {
  width: 100%;
  height: 170px;
  object-fit: cover;
  border-radius: 16px;
  margin-bottom: 0.8rem;
  box-shadow: 0 2px 16px 0 #ffd6e6;
}
.menu-card-title {
  font-size: 1.05rem;
  font-weight: 600;
  color: #7a263a;
  margin-bottom: 0.4rem;
}
.menu-card-rating {
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: 1rem;
  color: #d72660;
  font-weight: 500;
}
.menu-card-rating .star {
  color: #ffc107;
  font-size: 1.1rem;
}
.menu-card-rating .star.inactive {
  color: #e0e0e0;
}
.menu-card-rating .rating-text {
  color: #b48a78;
  font-size: 0.95rem;
  margin-left: 0.5rem;
  font-weight: 400;
}
.menu-view-more-row {
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
}
.menu-view-more-btn {
  background: #fff;
  color: #d72660;
  border: 1.5px solid #d72660;
  border-radius: 24px;
  padding: 0.6rem 2.2rem;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, color 0.18s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.menu-view-more-btn:hover {
  background: #d72660;
  color: #fff;
}
.menu-view-more-btn .arrow {
  font-size: 1.2rem;
  margin-left: 0.2rem;
}

/* Restore nav-icons and icon styles */
.nav-icons {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-left: 1.5rem;
}
.icon-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  position: relative;
}
.profile-icon-wrapper, .cart-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.profile-dropdown {
  position: absolute;
  top: 2.2rem;
  right: 0;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 12px rgba(229, 115, 138, 0.13);
  min-width: 140px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 0;
}
.dropdown-item {
  padding: 0.7rem 1.2rem;
  color: #d72660;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.15s;
}
.dropdown-item:hover {
  background: #ffe6f0;
}
.cart-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
}
.cart-badge {
  position: absolute;
  top: -8px;
  right: -6px;
  background: #d72660;
  color: #fff;
  border-radius: 50%;
  font-size: 0.75rem;
  font-weight: 600;
  padding: 0 6px;
  min-width: 18px;
  height: 18px;
  text-align: center;
  line-height: 18px;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon-btn svg {
  display: block;
  width: 24px;
  height: 24px;
  z-index: 1;
}

.about-preview-section {
  width: 100vw;
  min-height: 260px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow: hidden;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
}
.about-bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;
  object-position: center;
  display: block;
  z-index: 1;
  pointer-events: none;
  user-select: none;
}
.about-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.about-title {
  font-size: 2rem;
  font-weight: 700;
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  margin-bottom: 0.7rem;
  font-style: italic;
  letter-spacing: 0.01em;
  text-shadow: 0 2px 8px rgba(0,0,0,0.18);
}
.about-desc {
  font-size: 1.08rem;
  font-weight: 400;
  margin-bottom: 1.3rem;
  color: #fff;
  text-shadow: 0 1px 6px rgba(0,0,0,0.13);
}
.about-read-btn {
  background: #a85c43;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 0.7rem 2.2rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.18s;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.about-read-btn:hover {
  background: #7a3c24;
}

.contact-footer-section {
  width: 100vw;
  min-height: 320px;
  position: relative;
  overflow: hidden;
  margin: 120px 0 0 0;
  padding: 0;
  box-sizing: border-box;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  justify-content: center;
}
.contact-bg-img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 1;
  pointer-events: none;
  user-select: none;
  opacity: 1;
}
.contact-footer-content {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2.5rem 2rem 1.2rem 2rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
}
.footer-top-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2.5rem;
  margin-bottom: 1.2rem;
  width: 100%;
}
.footer-logo-row {
  display: flex;
  align-items: center;
  gap: 0.7rem;
}
.footer-logo-img {
  width: 48px;
  height: 48px;
  border-radius: 10px;
  object-fit: contain;
  background: #fff;
  padding: 4px;
}
.footer-logo-text {
  font-size: 1.3rem;
  font-weight: 600;
  color: #fff;
  letter-spacing: 0.01em;
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
}
.footer-social-row.footer-social-right {
  margin-left: auto;
  gap: 1.1rem;
  display: flex;
  align-items: center;
}
.footer-social-icon svg {
  vertical-align: middle;
  stroke: #d72660;
  fill: none;
  transition: stroke 0.18s;
}
.footer-social-icon:hover svg {
  stroke: #fff;
}
.footer-divider {
  width: 100%;
  height: 1.5px;
  background: rgba(255,255,255,0.18);
  margin: 1.2rem 0 1.2rem 0;
  border-radius: 2px;
}
.footer-bottom-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 4.5rem;
  margin-bottom: 1.2rem;
  width: 100%;
}
.footer-col {
  min-width: 180px;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  font-size: 1.05rem;
  color: #fff;
}
.footer-col-title {
  font-size: 1.15rem;
  font-weight: 600;
  color: #ffd6e6;
  margin-bottom: 0.5rem;
  letter-spacing: 0.01em;
}
.footer-copyright {
  text-align: center;
  color: #fff;
  font-size: 0.98rem;
  margin-top: 1.2rem;
  opacity: 0.85;
}
</style> 