const images = [
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/474493429_1099242945231343_2061755070579647765_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ogn9p3t48e8Q7kNvwHUXeL_&_nc_oc=Adn07mLzwIaCpcZh1fpMmubLXmY_uY5V3vt8dSdefDQ1FQG3l_eyWWDe0sZA988QohQ&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=fLeTQqNIzPhl7cnT5lzR9w&oh=00_AflkKWxfB7yqActfEdKCUSVphcBmrhp0G9i12PMpaRfedw&oe=6944542B",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/474480255_1099253871896917_4161083678935399923_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=tdFRrHt2kjcQ7kNvwGcvK_4&_nc_oc=AdkTLl0B9Xk6pixyd2caQxueihJaGP7txsao-TNU2lmYfzIKTNnC4u3MTvXvyZL3-vg&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=aLw4gDIhdof_X0hetOPh6Q&oh=00_Afmz0oY4m7sEsZZDz1uZCKw6ODCQxaLMy4fMUkDpopQIeA&oe=69444654",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/579434228_1320837646405204_4028379649278868566_n.jpg?stp=c0.169.1024.1024a_dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=O3AxWeugK5sQ7kNvwEQvwVV&_nc_oc=AdkN0jLjfBVUZ6oJXuySkjJhsahdMM2jhpXJAl3zUmxdpBW7nFBr953-pTan_37kG8Q&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=C71B3lPXGMEL44y7khUxsg&oh=00_AfllWOf9f09lDmFihH1zhqWsE8NWDJts7KJi-a7RL4UxrA&oe=69444D32",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/566348241_1302398704915765_1929554548433690355_n.jpg?stp=c0.152.560.560a_cp6_dst-jpg_s552x414_tt6&_nc_cat=108&ccb=1-7&_nc_sid=50ad20&_nc_ohc=YginHJjr3OMQ7kNvwHmAalj&_nc_oc=AdlrQVd3fDIZZ1u8IXM8Cwo5IotVLDxsUJEKiFc3G9qNEOEGwgEHpMoCUMxCg9Oezdo&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=C71B3lPXGMEL44y7khUxsg&oh=00_Afm6ZmjIo_fJuYgySlm6xIgNpxzoDhUj7U37ORJT_x76Tw&oe=694422EC",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/568269799_1302399184915717_1537106451691606340_n.jpg?stp=c448.0.1152.1152a_cp6_dst-jpg_s552x414_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=q744E2y5kVwQ7kNvwEDLYgT&_nc_oc=AdmugRZ1lA357BZgCvZyfz-AaWXs04GosrVwnq5PQ2blhwTS-SpmhQeH3IIUexN8Wyk&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=C71B3lPXGMEL44y7khUxsg&oh=00_Afk8QrouP3uecai3lYjEmh2Iy9MGq-il9OCn-XF1rJo0Mw&oe=69443939",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/568615105_1302398601582442_2669645198575991888_n.jpg?stp=c0.152.560.560a_cp6_dst-jpg_s552x414_tt6&_nc_cat=107&ccb=1-7&_nc_sid=50ad20&_nc_ohc=7A2UnyfHXjoQ7kNvwHT4oWv&_nc_oc=AdmSOR5C1TInXWRCm5omryWRLbo9eb5SrOBvU2DMH4xjooP7vyz2421MVMoVJMdR2mM&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=C71B3lPXGMEL44y7khUxsg&oh=00_AfkveKnW5MLGq6dOPzyGuEvjhCZQpR8UP1WRxzH7guQigA&oe=69444891",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/566205724_1302399038249065_107811310983445327_n.jpg?stp=c448.0.1153.1153a_cp6_dst-jpg_s552x414_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=yjO5KwyJjmwQ7kNvwGTdy7B&_nc_oc=AdnodnoOvDnqmZEi2_fiMMRPInrwCL_FUatl_IMHzTjiQsi2MjC8r1yBjkoXSHnuCfI&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=C71B3lPXGMEL44y7khUxsg&oh=00_AfnCmc809BrjlEr1fL_x2auIWy0hyVHz5s9tGD8XaMn5Rg&oe=69443506",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/565636662_1302398948249074_796271523230827457_n.jpg?stp=c448.0.1153.1153a_cp6_dst-jpg_s552x414_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=PGnbONvIgXYQ7kNvwGAmLFj&_nc_oc=AdmF5zkpQ1sB8Lh_g6kafuea15rNXV3043cFlmCI3pii9W9rvrRCBZWAe9yl_JUM06w&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=C71B3lPXGMEL44y7khUxsg&oh=00_AflYJHXRyZFf50hV34J66NL2RFD5t70H10u6xFebkbjIQg&oe=694430BA",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/565657436_1302396241582678_7631168131663483363_n.jpg?stp=c448.0.1153.1153a_cp6_dst-jpg_s552x414_tt6&_nc_cat=106&ccb=1-7&_nc_sid=50ad20&_nc_ohc=RYsNDfTUe0gQ7kNvwGt-QTG&_nc_oc=AdmetuVZFxXL87U-_c2FtweywGy97kUzCF7_Q-V4awAUPQ0jLsbad-dgA_kuplTatj0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Fa9Xn2jl9VLtbzz98C5K8Q&oh=00_Afm8QFZ8Vhh2QuIa0HOWcKGL4k069MFLo4AobrBa1vE0pA&oe=69443BFB",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/555630430_1283630146792621_2272135059888785668_n.jpg?stp=c448.0.1153.1153a_cp6_dst-jpg_s552x414_tt6&_nc_cat=103&ccb=1-7&_nc_sid=50ad20&_nc_ohc=II2QnG3drosQ7kNvwHwgZd6&_nc_oc=AdnrwcXAm5Tn3RoUAODiNrhb8mp3TIqvGwu-Y3QfKhOWWFfhXiKCzwbmGUjmCBb-JPo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Fa9Xn2jl9VLtbzz98C5K8Q&oh=00_AfnTPwUn_oWrRlW0oN7kuIhHFpPEw11PD62pEftukQMbyA&oe=694430DF",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/543181761_1266428061846163_2755762450908748260_n.jpg?stp=c448.0.1153.1153a_cp6_dst-jpg_s552x414_tt6&_nc_cat=100&ccb=1-7&_nc_sid=50ad20&_nc_ohc=qltoRC5OjI8Q7kNvwEGMAVV&_nc_oc=AdkEiXmVpiGmV6ZR-LLFVszp-GiSzTBBFvjtVxMQDypHZkTF2hBYAd9ggslYoh2pIt0&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Fa9Xn2jl9VLtbzz98C5K8Q&oh=00_AfnLjm1L_SD03cvELBenGlE-NZExqbeHUWpXKS-EDDox3A&oe=6944475F",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/516771990_1218553799966923_7459072363958025791_n.jpg?stp=c0.231.899.899a_dst-jpg_s552x414_tt6&_nc_cat=109&ccb=1-7&_nc_sid=50ad20&_nc_ohc=VhpkXgNyvOIQ7kNvwEjJb8M&_nc_oc=Adkgka6330ChZL1ZR_Obap5Or4KPoYK9vVYFh0_EOewChtdR_TKQCDV3_fMbpa5vmzY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=Fa9Xn2jl9VLtbzz98C5K8Q&oh=00_AfkIYSAM7WugkwdotzRDONznuPOQXxKWMBseXtbdg_0WTA&oe=69442BE5",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/487019199_1145943307227973_8901633528539201162_n.jpg?stp=c0.257.1254.1254a_dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=9Ah21RwiL44Q7kNvwHbtnWR&_nc_oc=AdlnGZRoHgugKFw6P6tfXmrQf_tB0HjjhEoA5pA2ZU_bEALL_UwcCSQd21dIIFUexg8&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=Fa9Xn2jl9VLtbzz98C5K8Q&oh=00_AfkFGkI4qe9AnG4mwUqX7OpfQTy7HCTYCzeEAow4I8SU1Q&oe=69442A28",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/487457983_1145942377228066_1021818878199768682_n.jpg?stp=c0.39.581.581a_dst-jpg_s552x414_tt6&_nc_cat=105&ccb=1-7&_nc_sid=50ad20&_nc_ohc=oF32_HFGUzEQ7kNvwH5dmML&_nc_oc=AdnNOhRpBCa0ZBBfv-PRKUAgswmMmfqj5mKGp3gXRT2-9ut8XyFCQ3kJftGx-mYNSf8&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Fa9Xn2jl9VLtbzz98C5K8Q&oh=00_Afk66plQRgqcLpZ9WZrnVJG3EPmSPxvamV6FZKvEvZagaw&oe=694432FC",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/486799237_1145941403894830_1046858943793764923_n.jpg?stp=c256.0.1536.1536a_dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=50ad20&_nc_ohc=yZrb3KXaC1QQ7kNvwEIgCgf&_nc_oc=Adm8hcUjvFWCXPkGeJpdoI62ztXkvCf1VZVU7CvL01kRcCWqc4HjfGuzuhPVEE82iH0&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=pcaWt6xfZLCZgxNwNAPH2Q&oh=00_Afncln_NDb8QgQu5HG7W8enZdlni3vykwvFoLawIKX2ucA&oe=694425A0",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/474050975_1098038692018435_160909154088607816_n.jpg?stp=dst-jpg_s552x414_tt6&_nc_cat=110&ccb=1-7&_nc_sid=7a06f5&_nc_ohc=K5dMn98wRG0Q7kNvwHrEHwl&_nc_oc=AdlUeEXQPgm2YeN38A-7Fti-upwa4AfqCdnN5JWLcWCcclpQL7N0DhzY7pxO3A0ZCZI&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=pcaWt6xfZLCZgxNwNAPH2Q&oh=00_AflxRcb5a09RZ8cNDcq_K8Cvtqw9htqnyu8ZTXnjF6tofg&oe=69444201",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t1.6435-9/30415693_1821378184560751_1485485336346755072_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=2ij0_9S5wJkQ7kNvwHTVM9i&_nc_oc=Adl_Ul2XtoyXkfP8rtLE_39Bcyg5vNNcx1gCZQbA_CGau48bTg8-5J3DfYPzwUwOH_M&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=Fidu2AToCx7U9pkbAjNO4g&oh=00_AfkyQvBnRe8kRj4hOzXing-72u79VUj0n2qpTRKDa3kzdA&oe=6965F9E9",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/498947166_24360308000241115_6131909245625196918_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=ck0m6AHXUxIQ7kNvwGpS9_N&_nc_oc=AdnViXYpm_OTOK0_K_4ce5GKxmtjFqHxKtLi-jCocZCs50AqFsL-elG1v5PxJPjORzs&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=LJAeSCxzY4KxzszT-SsiDw&oh=00_AflNw7O7XBc-5kz462DeYZYMU54Oq79V2-fMcm8LuMKHOg&oe=69443B7C",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/508429659_24360306700241245_4383162855219140160_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=rWyNBaLgkPAQ7kNvwHyczXZ&_nc_oc=AdkTrBVBlmMW8yu9G0qRha37tz6NVY3fJnguW1oj23s4_bVvpJjTefwGaJPh6Q6d9Sw&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=ZnUWesPYbgYjY-3_I9n0Mg&oh=00_AfnFmzt1eS9kJ_d0p7xwaXq4EMDP5yqX7WMFNrsYsGD3og&oe=69445E2A",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/473429260_1093990392423265_4099069774959236161_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=rU6dkEezTBcQ7kNvwFjzBkl&_nc_oc=AdnkOerzhUpiyie2FPULCOjQ9uR81r-LIDF1QJ1XwDbbGqPNFUKOr8mef8egW6IjFkQ&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=KIbKg0iHRdPIeOGVXvJVQQ&oh=00_AfkasJKOLNCSsoD4bl_yFwIuMN6AM1WLwJsu5FIoYH63XQ&oe=694458F4",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/472843641_1089318696223768_328359379940416560_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=dcY6DNcyKkUQ7kNvwGuGnRw&_nc_oc=Adl3VVdWr3zYAfs8NCLDsIZhu_hm9_W5VjYxZ4zxxCDqy8vOzt9qA0Hj6q3RTKVPN_g&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=8UtHThaDmD-okR176DiIAg&oh=00_AfndfQvh_f4MjyR38yipKZOciezQKkyaZWK41cV8-I4RWQ&oe=694431B5",
    "https://scontent-waw2-1.xx.fbcdn.net/v/t39.30808-6/472791934_1089323996223238_1214518898107784849_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=eI0TrF0C11AQ7kNvwGWLhon&_nc_oc=AdnxOOdvTYQcmvD0lgIeKuRyN03wBtzBpVjSTdv0Vj0tKA499xxk9hbzcjGP8-VFWMY&_nc_zt=23&_nc_ht=scontent-waw2-1.xx&_nc_gid=ytNS5VaBFH2IBfjk3Sr0-g&oh=00_AfnH7Ea-ELKkt1w1nNo41BLzaJQEf-GjPkpRA_n4P6HA_Q&oe=6944319B",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/514651203_24470912475847333_5929975181821283598_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0b6b33&_nc_ohc=dayu9RWDBEMQ7kNvwGWJSpE&_nc_oc=AdmRzwgGnN7KzxN-i8F6jtdXyV4bf5av-DDf5ysyBXN1BOGkJiAmaBq64SgiThbWkMo&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=4uAuWxhRdwhSvnCf_IMkcQ&oh=00_Afl4X1H_Y6LA6dXeL1JfMVqF-pt8hTC-hSA7RO6adndUFA&oe=69443807",
    "https://scontent-waw2-2.xx.fbcdn.net/v/t39.30808-6/509355443_24360307900241125_1298635206031169755_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cf85f3&_nc_ohc=rEljDO1SArIQ7kNvwEXs5K1&_nc_oc=Adk6H9a4gYM0rUTrAOAQpSdTKmq2qVES9Nrp4-2_hg54reWDEw4Rm4x63YGDCMc7fJE&_nc_zt=23&_nc_ht=scontent-waw2-2.xx&_nc_gid=dftt9PzVSFyRu0IMwxxZXQ&oh=00_AfliXV9APC6eh4csrxLvA9ejAaA-GU4VQ6lqioWXqrMiwA&oe=69444ACD"
];

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
