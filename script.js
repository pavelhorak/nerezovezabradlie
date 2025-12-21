const imageFiles = [
  "img/30415693_1821378184560751_1485485336346755072_n.jpg",
  "img/487019199_1145943307227973_8901633528539201162_n.jpg",
  "img/508694399_24360306390241276_725954554787584115_n.jpg",
  "img/472745856_1089308952891409_6431987374934322497_n.jpg",
  "img/487457983_1145942377228066_1021818878199768682_n.jpg",
  "img/509307754_24360308033574445_4406386725509488104_n.jpg",
  "img/472843641_1089318696223768_328359379940416560_n.jpg",
  "img/502561830_24360307883574460_4090536521889473208_n.jpg",
  "img/509357387_24360307933574455_4789760648153136394_n.jpg",
  "img/473429260_1093990392423265_4099069774959236161_n.jpg",
  "img/503688207_24360307950241120_400820894498930258_n.jpg",
  "img/509600735_24360307910241124_5503506490096845779_n.jpg",
  "img/474050975_1098038692018435_160909154088607816_n.jpg",
  "img/508341695_24360306393574609_6271731597468257580_n.jpg",
  "img/543181761_1266428061846163_2755762450908748260_n.jpg",
  "img/474535938_1098658951956409_8937269792503483673_n.jpg",
  "img/508419682_24360306470241268_476743685354919214_n.jpg",
  "img/555630430_1283630146792621_2272135059888785668_n.jpg",
  "img/474738311_1099253828563588_2842668531889662132_n.jpg",
  "img/508629933_24360307990241116_4300642800811790881_n.jpg",
  "img/565183779_1302396368249332_7557875451583883711_n.jpg",
  "img/474784566_1099253531896951_624147571193415016_n.jpg",
  "img/508634365_24360307943574454_2211098096171264490_n.jpg",
  "img/566205724_1302399038249065_107811310983445327_n.jpg",
  "img/474860517_1099242915231346_3917173155637079181_n.jpg",
  "img/508654956_24360306436907938_3080231538392621564_n.jpg",
  "img/568269799_1302399184915717_1537106451691606340_n.jpg",
  "img/481230159_1123645119457792_6474586257796273295_n.jpg",
  "img/508678704_24360306750241240_7277685111992062538_n.jpg",
  "img/579434228_1320837646405204_4028379649278868566_n.jpg",
  "img/481782776_1123641219458182_1967675571881115968_n.jpg",
  "img/508690679_24360306733574575_4977987089517026461_n.jpg"];

const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.getElementsByClassName('close')[0];

function loadImages() {
    images.forEach(src => {
        const item = document.createElement('div');
        item.className = 'gallery-item';

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Nerezové zábradlie';
        img.loading = 'lazy';

        item.onclick = () => openLightbox(src);

        item.appendChild(img);
        gallery.appendChild(item);
    });
}

function openLightbox(src) {
    lightbox.style.display = "block";
    lightboxImg.src = src;
    document.body.style.overflow = 'hidden'; // Disable scroll
}

function closeLightbox() {
    lightbox.style.display = "none";
    document.body.style.overflow = 'auto'; // Enable scroll
}

closeBtn.onclick = closeLightbox;

window.onclick = function (event) {
    if (event.target == lightbox) {
        closeLightbox();
    }
}

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.style.display === "block") {
        closeLightbox();
    }
});

loadImages();
