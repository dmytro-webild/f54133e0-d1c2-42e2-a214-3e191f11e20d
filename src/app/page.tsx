"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import HeroOverlay from '@/components/sections/hero/HeroOverlay';
import MetricCardTwo from '@/components/sections/metrics/MetricCardTwo';
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import { Award, Flame, Star } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="entrance-slide"
        borderRadius="rounded"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="noiseDiagonalGradient"
        cardStyle="gradient-bordered"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="normal"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingOverlay
      navItems={[
        {
          name: "About",
          id: "about",
        },
        {
          name: "Menu",
          id: "menu",
        },
        {
          name: "Reviews",
          id: "testimonials",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="TriniTastes"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroOverlay
      title="Authentic Caribbean Flavors in Trinidad"
      description="Experience the vibrant, soulful taste of Trinidadian cuisine crafted with premium, local ingredients."
      buttons={[
        {
          text: "View Menu",
          href: "#menu",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/close-up-delicious-mexican-food-with-chilli_23-2148614435.jpg"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/man-presents-girl-ring_1398-4220.jpg",
          alt: "Diner 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598351.jpg",
          alt: "Diner 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/people-cheering-with-wine-glasses-luxurious-restaurant_23-2150517422.jpg",
          alt: "Diner 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/handsome-groom-feeding-his-bride-with-croissant-cafe_176420-2272.jpg",
          alt: "Diner 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/beautiful-young-woman-with-long-blonde-hair-holding-delicious-chocolate-muffin-hand_23-2147974685.jpg",
          alt: "Diner 5",
        },
      ]}
      avatarText="Loved by 50,000+ food enthusiasts"
    />
  </div>

  <div id="about" data-section="about">
      <AboutMetric
      useInvertedBackground={false}
      title="Our Passion for Food"
      metrics={[
        {
          icon: Star,
          label: "Years Active",
          value: "15+",
        },
        {
          icon: Award,
          label: "Awards Won",
          value: "12",
        },
        {
          icon: Flame,
          label: "Master Chefs",
          value: "8",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentySix
      textboxLayout="default"
      useInvertedBackground={true}
      features={[
        {
          title: "Local Ingredients",
          description: "Fresh produce sourced directly from Trinidadian farmers.",
          buttonIcon: "Sprout",
          imageSrc: "http://img.b2bpic.net/free-photo/flat-lay-food-arrangement-with-copy-space_23-2148725032.jpg",
        },
        {
          title: "Traditional Recipes",
          description: "Generations-old secrets kept alive in our kitchen.",
          buttonIcon: "Heart",
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-delicious-poke-bowl_23-2148873827.jpg",
        },
        {
          title: "Premium Ambiance",
          description: "An atmosphere as rich and warm as our cuisine.",
          buttonIcon: "Wine",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-dreads-representing-rastafari-movement_23-2151532044.jpg",
        },
        {
          title: "Expert Service",
          description: "Professional hospitality that makes you feel at home.",
          buttonIcon: "Users",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-recipe-with-plantain_23-2151062786.jpg",
        },
      ]}
      title="The Trini Difference"
      description="We blend traditional island recipes with modern culinary excellence."
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardThree
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="asymmetric-60-wide-40-narrow"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Gourmet Doubles",
          price: "$12.99",
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-chicken-wings_23-2147717039.jpg",
        },
        {
          id: "2",
          name: "Island Pelau",
          price: "$24.99",
          imageSrc: "http://img.b2bpic.net/free-photo/korean-style-fresh-mango-shaved-ice-wood-table_1232-3282.jpg",
        },
        {
          id: "3",
          name: "Spiced Shark Plate",
          price: "$19.99",
          imageSrc: "http://img.b2bpic.net/free-photo/grilled-eggplant-slices-with-pesto-yogurt-sauce_114579-2129.jpg",
        },
        {
          id: "4",
          name: "Mango Glazed Chicken",
          price: "$28.99",
          imageSrc: "http://img.b2bpic.net/free-photo/plate-doner-table_140725-7427.jpg",
        },
        {
          id: "5",
          name: "Sweet Corn Pudding",
          price: "$10.50",
          imageSrc: "http://img.b2bpic.net/free-photo/side-view-grilled-chicken-fillet-with-sauce-rice-garnish-tray_141793-3632.jpg",
        },
        {
          id: "6",
          name: "Signature Sorrel",
          price: "$8.99",
          imageSrc: "http://img.b2bpic.net/free-photo/halved-melon-with-slices-fruits-bowl_23-2147879751.jpg",
        },
      ]}
      title="Signature Dishes"
      description="Discover our most requested culinary creations."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardFifteen
      useInvertedBackground={true}
      testimonial="The most authentic Trini flavors I have ever experienced. Absolutely divine!"
      rating={5}
      author="Marcus Thompson"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/medium-shot-couple-having-lunch-luxury-restaurant_23-2150598413.jpg",
          alt: "Marcus",
        },
        {
          src: "http://img.b2bpic.net/free-photo/girl-sitting-table-holding-mobile-phone-indoors_171337-17096.jpg",
          alt: "Sarah",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-one-black-american-female-eats-gourmet-vegetarian-meal-drinks-wine-restaurant_613910-7365.jpg",
          alt: "James",
        },
        {
          src: "http://img.b2bpic.net/free-photo/happy-close-up-portrait-beautiful-black-skinned-woman-wearing-blouse-flower-headband-enjoying-dinner-while-eating-restaurant_613910-18781.jpg",
          alt: "Elena",
        },
        {
          src: "http://img.b2bpic.net/free-photo/man-taking-photos-senior-friend_23-2149356892.jpg",
          alt: "Robert",
        },
      ]}
      ratingAnimation="slide-up"
      avatarsAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricCardTwo
      animationType="slide-up"
      textboxLayout="split"
      gridVariant="bento-grid"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          value: "50k+",
          description: "Meals Served",
        },
        {
          id: "m2",
          value: "99%",
          description: "Customer Satisfaction",
        },
        {
          id: "m3",
          value: "24/7",
          description: "Quality Commitment",
        },
      ]}
      title="Our Impact"
      description="Serving happiness across the region, one plate at a time."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqDouble
      textboxLayout="split"
      useInvertedBackground={true}
      faqs={[
        {
          id: "q1",
          title: "Do I need a reservation?",
          content: "Yes, we recommend booking in advance, especially during weekends.",
        },
        {
          id: "q2",
          title: "Do you offer private dining?",
          content: "We offer beautiful spaces for private events and celebrations.",
        },
        {
          id: "q3",
          title: "Are your ingredients local?",
          content: "We pride ourselves on sourcing the best ingredients directly from local Trinidadian farmers.",
        },
      ]}
      title="Common Questions"
      description="Find answers about our booking and dining policies."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Contact Us"
      description="Have a query or want to book a table? Let us know."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
        rows: 4,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/side-view-smiling-curly-woman-talking-by-phone_171337-16735.jpg"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoReveal
      logoText="TriniTastes"
      leftLink={{
        text: "Privacy Policy",
        href: "#",
      }}
      rightLink={{
        text: "Terms of Service",
        href: "#",
      }}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
