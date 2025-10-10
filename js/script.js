// 画像の配列
const images = ["room-img01.png", "room-img02.png"];

let currentIndex = 0; // 現在の画像番号
const viewer = document.getElementById("viewer");

// 「次へ」ボタン
document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  viewer.src = `/img/${images[currentIndex]}`;
});

// 「前へ」ボタン
document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  viewer.src = `/img/${images[currentIndex]}`;
});

// SWIPER
import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs";

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 5,
  loop: true,
  freeMode: {
    enabled: true,
    momentum: true,
    momentumRatio: 0.01, // デフォルト1の半分の距離しか滑らない
    momentumVelocityRatio: 0.01,
  },
  speed: 20000, // 自動スライド速度（長めにして滑らかに）
  autoplay: {
    delay: 0, // 途切れなく流す
    disableOnInteraction: false,
    waitForTransition: true,
  },
  grabCursor: true,
});

// ギャラリー モーダル
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const close = document.querySelector(".close");

document.querySelectorAll(".gallery img").forEach((img) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});
close.addEventListener("click", () => {
  modal.style.display = "none";
});

// navi hamberger-menu
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("navi");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
  document.body.classList.toggle("no-scroll", nav.classList.contains("active"));
});
