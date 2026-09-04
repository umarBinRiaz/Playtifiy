var songs = [
    {
        id: 1,
        title: "Hum Bhool Gaye Har Baat",
        artist: "Malik Tayab Official, Mahir Ali, Shar Ali",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a9/fc/30/a9fc3035-b072-21a4-bc7c-bffe115eb21c/5059552444355.jpg/600x600bb.jpg",
        src: "./assets/00.mp3"
    },

    {
        id: 2,
        title: "Itna Na Mujhse Tu Pyar Badha",
        artist: "Talat Mahmood, Lata Mangeshkar, Sali Chowdhury",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/74/cb/87/74cb8725-f0ad-5422-d57d-de8384b9cc9f/191773208868.jpg/600x600bb.jpg",
        src: "https://pagalnew.com/128-downloads/1074"
    },

    {
        id: 3,
        title: "Kahan Ho Tum Chale Aao",
        artist: "Nayyara Noor",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/39/39/5b/39395b03-2cc7-c76f-4c71-532741edc7ae/197190950144.jpg/600x600bb.jpg",
        src: "./assets/001.mp3"
    },

    {
        id: 4,
        title: "Ham Tere Pyar Mein",
        artist: "Lata Mangeshkar",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/2b/db/a0/2bdba01f-7d80-8748-a9a6-1e4eca03941d/196626978615.jpg/600x600bb.jpg",
        src: "https://koshalworld.com/files/download/id/77910"
    },

    {
        id: 5,
        title: "In Ankhon Ki Masti",
        artist: "Asha Bhosle",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/ce/25/31/ce25310f-f518-b29f-f09c-c6dd8addb214/191773222185.jpg/600x600bb.jpg",
        src: "https://pagalnew.com/128-downloads/29182"
    },

    {
        id: 6,
        title: "Abhi Na Jao Chhod Kar",
        artist: "Asha Bhosle, Mohammed Rafi",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/c4/78/86/c478867c-29d8-b35d-1b6b-0f0d8c914f7d/192562250273.jpg/600x600bb.jpg",
        src: "https://pagalnew.com/128-downloads/1043"
    },

    {
        id: 7,
        title: "Chupke Chupke Raat Din Aansoon Bahanayad Hai",
        artist: "Ghulam Ali",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music118/v4/30/6d/6d/306d6d0a-cd50-b00e-4a14-b72fd17ec4cb/192562250297.jpg/600x600bb.jpg",
        src: "https://hq.mr-punjab.com/filehq/66498/128k/Chupke%20Chupke%20Raat%20Din%20-%20Ghulam%20Ali%20(Mr-Punjab.Com).html"
    },

    {
        id: 8,
        title: "Jane Woh Kaise Log The",
        artist: "Hemant Kumar",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/bd/96/9a/bd969a8e-a46e-f509-bc00-9bb80f214d33/192562250198.jpg/600x600bb.jpg",
        src: "https://koshalworld.com/files/download/id/15386"
    },

    // {
    //     id: 9,
    //     title: 'Rafta Rafta Woh Meri Hasti Ka (From "Zeenat")',
    //     artist: "Mehdi Hassan",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/eb/83/15/eb83150c-c84f-323e-3e66-a2461db09576/196626350442.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/8c/dc/82/8cdc828c-d8a2-6137-a251-acde8c57f88c/mzaf_12242710413501112395.plus.aac.p.m4a"
    // },

    // {
    //     id: 10,
    //     title: "Jane Woh Kaise Log They",
    //     artist: "Hemant Kumar",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/bd/96/9a/bd969a8e-a46e-f509-bc00-9bb80f214d33/192562250198.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/68/52/fe/6852fe5b-5132-e6a8-6fd5-f9539a0a49ed/mzaf_4279416889368241692.plus.aac.p.m4a"
    // },

    // {
    //     id: 11,
    //     title: "Hum Tere Shahar Mein Aaye Hai",
    //     artist: "Ghulam Ali",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/13/e8/60/13e860d3-53c4-f68d-6596-65c5f71f03a1/1941570883350.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/96/55/8c/96558cf0-3bfa-7ec0-630b-28efbba57cd3/mzaf_14676714109038085307.plus.aac.p.m4a"
    // },

    // {
    //     id: 12,
    //     title: "Abhi Na Jao Chhod Kar",
    //     artist: "Asha Bhosle, Mohammed Rafi",
    //     cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcw_sdfUqdG5lQpjxfyGVxt_g_weog4_4HUoLumjVnw&s=10",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/05/f9/7e/05f97e96-944b-f188-4c65-81d7e44db09c/mzaf_568902556799628949.plus.aac.p.m4a"
    // },

    // {
    //     id: 13,
    //     title: "Ham Tere Pyar Mein",
    //     artist: "Lata Mangeshkar",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/2b/db/a0/2bdba01f-7d80-8748-a9a6-1e4eca03941d/196626978615.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/94/dd/bd/94ddbd16-fdea-a450-3d7e-55ce872d2aec/mzaf_8762787203134734461.plus.aac.p.m4a"
    // },

    // {
    //     id: 14,
    //     title: "Hum Bhool Gaye Har Baat",
    //     artist: "Malik Tayab Official, Mahir Ali, Shar Ali",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/a9/fc/30/a9fc3035-b072-21a4-bc7c-bffe115eb21c/5059552444355.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/1a/3c/52/1a3c520a-b4cc-3f21-a688-87d2f9ff00a0/mzaf_18431049446038039826.plus.aac.p.m4a"
    // },

    // {
    //     id: 15,
    //     title: 'Karde Karam Tu (From "Parwarish")',
    //     artist: "Samar Jafri",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/9e/c3/f2/9ec3f2cd-ed2f-250d-fa97-bd2712fd35ef/859712238658_cover.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/6c/96/41/6c9641aa-9986-ed5f-2a84-78c0aefa175c/mzaf_4892974186995625880.plus.aac.p.m4a"
    // },

    {
        id: 16,
        title: 'Guzaarishien (From "Parwarish")',
        artist: "Samar Jafri, Alistair Alvin",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/61/37/d7/6137d73d-d303-738f-952c-2701b97484e3/859706932821_cover.jpg/600x600bb.jpg",
        src: "https://pagalsongz.com/listen/guzarishein.mp3"
    },

    {
        id: 17,
        title: "Chalo Door Kahin",
        artist: "Samar Jafri",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/44/ef/74/44ef749b-5e0b-0893-20e9-6cb8f0ccf940/859719537440.jpg/600x600bb.jpg",
        src: "https://www.ghanaclasic.com/wp-content/uploads/2026/03/Samar-Jafri-Chalo-Door-Kahin.mp3"
    },

    {
        id: 18,
        title: "Chal Diye Tum Kahan",
        artist: "LAJUR",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/2f/f3/9e/2ff39eda-e1bc-82ce-ba50-ecf81420b511/859792403090_cover.jpg/600x600bb.jpg",
        src: "./assets/0010.mp3"
    },

    {
        id: 19,
        title: "Meri Zindagi Hai Tu",
        artist: "Asim Azhar, Sabri Sisters",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/39/49/d4/3949d4b2-63b0-e6f4-4fc1-ea122ef390db/859722614695_cover.jpg/600x600bb.jpg",
        src: "https://cdnsongs.com/music/data/Single_Track/202511/Meri_Zindagi_Hai_Tu/128/Meri_Zindagi_Hai_Tu_1.mp3"
    },

    {
        id: 20,
        title: "Mere Samnewali Khidki Mein",
        artist: "Kishore Kumar, R. D. Burman",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/a1/12/e6/a112e691-c01e-7778-74f7-4ac633ca60cd/195081206080.jpg/600x600bb.jpg",
        src: "https://pagalnew.com/128-downloads/2099"
    },

    {
        id: 21,
        title: "Mere Mehboob Qayamat Hogi",
        artist: "Kishore Kumar, Laxmikant–Pyarelal",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVjA8TYF_fU_p-ieHHTR7ESGIMInd0g0V3RAFiS-MF4w&s=10",
        src: "https://koshalworld.com/files/download/id/32184"
    },

    // {
    //     id: 22,
    //     title: "295",
    //     artist: "Sidhu Moose Wala",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/97/69/58/976958ae-725e-bd41-6755-f0921c697840/810063889609_cover.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7f/f3/6d/7ff36d63-b933-3993-cd2f-f3fd770c3763/mzaf_12675758250838366519.plus.aac.p.m4a"
    // },

    // {
    //     id: 23,
    //     title: "Sanson Ki Mala Peh Simroon",
    //     artist: "Nusrat Fateh Ali Khan",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/8d/0b/f0/8d0bf03d-3c4e-b8b5-1a59-61e2ab039a16/24UM1IM13749.rgb.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/12/ce/eb/12ceebb4-d107-2d24-f079-2b30629276e4/mzaf_4435291931482650450.plus.aac.p.m4a"
    // },

    // {
    //     id: 24,
    //     title: "Un Ka Andaz-E-Karam",
    //     artist: "Nusrat Fateh Ali Khan",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/8e/1f/fd/8e1ffd82-3970-4364-eaa1-8b4bce9a7704/24UM1IM13831.rgb.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/4b/44/51/4b44513d-953c-fda4-6d7c-b35e26b130b1/mzaf_5300475119392818626.plus.aac.p.m4a"
    // },

    // {
    //     id: 25,
    //     title: "Kali Kali Zulfon Ke Phande Nah Dalo",
    //     artist: "Nusrat Fateh Ali Khan",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/20/0d/65/200d657f-a60f-1dd8-3429-9f03008a6458/5037005000907_cover.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview112/v4/32/10/c7/3210c75a-00ed-ca02-4de8-00bf52211b43/mzaf_16216806758327028509.plus.aac.p.m4a"
    // },

    // {
    //     id: 26,
    //     title: "Tumhen Dillagi Bhool Jani Padegee",
    //     artist: "Nusrat Fateh Ali Khan",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music4/v4/18/07/bc/1807bcfd-1882-d15c-99f6-5395a5d18643/888831680949.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/7a/22/fd/7a22fdb9-a0a4-e284-8904-8b74229ea2eb/mzaf_10636434307399169151.plus.aac.p.m4a"
    // },

    // {
    //     id: 27,
    //     title: "Dil Pe Zakham Khate Hain",
    //     artist: "Nusrat Fateh Ali Khan",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a1/60/3c/a1603cd6-0909-9bdb-2493-496377d87e13/24UM1IM13853.rgb.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/53/f2/f3/53f2f3a1-db71-1717-97f1-f9f8d63f6aa1/mzaf_6609668821585099183.plus.aac.p.m4a"
    // },

    {
        id: 28,
        title: "Jahan Mein Aisa Kaun Hai",
        artist: "Asha Bhosle",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/44/b3/f8/44b3f846-6e2f-100b-653e-93883e188ccc/191773209018.jpg/600x600bb.jpg",
        src: "https://pagalnew.com/128-downloads/1048"
    },

    {
        id: 29,
        title: "Runaway",
        artist: "AURORA",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/18/ad/13/18ad13c3-ff24-0b31-45c4-06b9064471cc/0044003184152_Cover.jpg/600x600bb.jpg",
        src: "https://files.cvaultx.com/wp-content/uploads/music/2021/05/Aurora_-_Runaway_CeeNaija.com_.mp3"
    },

    // {
    //     id: 30,
    //     title: "Dil Kithay Kharayi Bholeya 2019",
    //     artist: "Zahoor Ahmad Lohar",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/70/7f/de/707fde00-7327-e94e-3b21-25fd7e1d6679/7300341421551.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a8/53/1d/a8531dca-5fb2-293b-0f7a-2319664a2839/mzaf_6495839975441084821.plus.aac.p.m4a"
    // },

    // {
    //     id: 31,
    //     title: "Par Chanaa De (Coke Studio Season 9)",
    //     artist: "Shilpa Rao, Noori",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/41/07/df/4107df8d-67ed-3836-5f62-244c74d11536/859763607021_cover.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/2e/20/d5/2e20d5f4-a81e-b267-acd4-e93249b14bd9/mzaf_1115543082213931963.plus.aac.p.m4a"
    // },

    // {
    //     id: 32,
    //     title: "Hungama Hai Kyon Barpa",
    //     artist: "Ghulam Ali",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/4a/11/7d/4a117d1f-4a6e-5e4b-29f9-aeaa37c449f5/191773286248.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f6/be/28/f6be2845-d2e6-bdc8-e415-628ce31088e8/mzaf_17137133438830444479.plus.aac.p.m4a"
    // },

    {
        id: 33,
        title: 'Kiska Rasta Dekhe - From "Joshila"',
        artist: "Kishore Kumar, R. D. Burman",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/37/9b/44/379b4438-18ae-03df-7f45-eb639f448925/00044006490021.rgb.jpg/600x600bb.jpg",
        src: "https://pagalnew.com/128-downloads/33993"
    },

    // {
    //     id: 34,
    //     title: "Tadpaoge Tadpa Lo",
    //     artist: "Lata Mangeshkar",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music5/v4/20/33/8c/20338ca5-efde-3121-4dbe-ffdcaeefdcb8/889176990229.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/Music7/v4/f0/06/41/f0064112-86f9-6271-04d0-6e8ca8873fa1/mzaf_4824617157315096814.plus.aac.p.m4a"
    // },

    // {
    //     id: 35,
    //     title: "Dekha Ek Khwab",
    //     artist: "Lata Mangeshkar, Kishore Kumar",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/0d/74/d3/0d74d302-195c-2fb5-dfab-6be6bb2f9ac3/192562662687.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/f0/ec/19/f0ec19ba-99f7-30ad-4732-289d65db2698/mzaf_6737478415519510728.plus.aac.p.m4a"
    // },

    {
        id: 36,
        title: "Yeh Raatein Yeh Mausam",
        artist: "Kishore Kumar, Asha Bhosle",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/47/43/77/4743779d-4a62-1c3a-1230-269b195c4b2b/191773202255.jpg/600x600bb.jpg",
        src: "https://pagalnew.com/128-downloads/738"
    },

    // {
    //     id: 37,
    //     title: "Jane Woh Kaise Log The",
    //     artist: "Hemant Kumar, S. D. Burman",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/bd/96/9a/bd969a8e-a46e-f509-bc00-9bb80f214d33/192562250198.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/68/52/fe/6852fe5b-5132-e6a8-6fd5-f9539a0a49ed/mzaf_4279416889368241692.plus.aac.p.m4a"
    // },

    // {
    //     id: 38,
    //     title: "Kisi Ki Muskurahaton Pe",
    //     artist: "Mukesh",
    //     cover: "https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/b1/44/14/b14414ee-f008-4252-b26c-a92e88ab805a/197187750597.jpg/600x600bb.jpg",
    //     src: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview113/v4/bd/5b/c0/bd5bc0e9-b432-ecd8-92f4-3f9d4fc2d32e/mzaf_16445777826100117022.plus.aac.p.m4a"
    // },

    {
        id: 39,
        title: "Kal Chaudhvin Ki Raat Thi",
        artist: "Jagjit Singh",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music125/v4/57/a5/5b/57a55bf3-d9d9-1dd9-ecd9-6cc3b5669d2d/191773348571.jpg/600x600bb.jpg",
        src: "./assets/041.mp3"
    },

    {
        id: 40,
        title: "Kami",
        artist: "Samar Jafri",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/b0/af/c2/b0afc282-44db-04fe-aaf0-88e6e36aa102/8718521330576.jpg/600x600bb.jpg",
        src: "https://pagalall.com/wp-content/uploads/2026/Kami%20Samar%20Jafri%20(pagalall.com).mp3"
    },

    {
        id: 41,
        title: "Tu Hai Kahan",
        artist: "AUR",
        cover: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/58/44/66/584466db-9e8e-8690-97d1-8289cc7c4342/197877488397.jpg/600x600bb.jpg",
        src: "./assets/040.mp3"
    },
    {
        id: 42,
        title: "Shikayat",
        artist: "AUR",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqd28eAOPm7Pym5cWanL7Y3ZkVyOONcvq6JifHMrwVAw&s",
        src: "https://raag.fm/files/mp3/128/Hindi-Singles/25990/Shikayat%20-%20(Raag.Fm).mp3"
    },
 {
        id: 43,
        title: "Pal Pal Dil ke Pass",
        artist: "Kishore Sir",
        cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf8ndBF32D1TDdPRhjYWcHMO9TflIGCe6Rib8a-CJmKw&s=10",
        src: "https://koshalworld.com/files/download/id/14124"
    },

];

var currentIndex = -1;

var isShuffle = false;
var isRepeat = false;
var autoNext = true;

var favorites = JSON.parse(
    localStorage.getItem("favorites") || "[]"
);

var recentlyPlayed = JSON.parse(
    localStorage.getItem("recentlyPlayed") || "[]"
);

var playlists = JSON.parse(
    localStorage.getItem("playlists") || "[]"
);

var audio = document.getElementById("audio");

var playerTitle = document.getElementById("playerTitle");
var playerArtist = document.getElementById("playerArtist");
var playerCover = document.getElementById("playerCover");

var playBtn = document.getElementById("playBtn");
var previousBtn = document.getElementById("previousBtn");
var nextBtn = document.getElementById("nextBtn");

var progress = document.getElementById("progress");
var currentTime = document.getElementById("currentTime");
var duration = document.getElementById("duration");
var volume = document.getElementById("volume");

var shuffleBtn = document.getElementById("shuffleBtn");
var repeatBtn = document.getElementById("repeatBtn");
var autoNextBtn = document.getElementById("autoNextBtn");

var favoriteBtn = document.getElementById("favoriteBtn");
var searchInput = document.getElementById("searchInput");


function savePlayerState() {

    if (currentIndex === -1) {
        return;
    }

    localStorage.setItem(
        "currentSongId",
        songs[currentIndex].id
    );

    localStorage.setItem(
        "currentSongPosition",
        audio.currentTime
    );

    localStorage.setItem(
        "playerVolume",
        audio.volume
    );

    localStorage.setItem(
        "playerPlaying",
        audio.paused ? "false" : "true"
    );
}


function escapeHTML(text) {

    return String(text)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function renderSongs(list, containerId) {

    var container =
        document.getElementById(containerId);

    if (!container) {
        return;
    }

    container.innerHTML = "";

    list.forEach(function (song) {

        var card =
            document.createElement("div");

        card.className = "song-card";

        var isFavorite =
            favorites.includes(song.id);

        card.innerHTML = `
            <img
                class="song-cover"
                src="${escapeHTML(song.cover)}"
                alt="${escapeHTML(song.title)}"
            >

            <h3>${escapeHTML(song.title)}</h3>

            <p>${escapeHTML(song.artist)}</p>

            <div class="card-buttons">

                <button
                    class="card-play"
                    onclick="playSongById(${song.id})"
                >
                    ▶
                </button>

                <button
                    class="card-heart"
                    onclick="toggleFavorite(${song.id})"
                >
                    ${isFavorite ? "♥" : "♡"}
                </button>

                ${song.src && song.src.indexOf("./assets/") !== 0 && song.src.indexOf("/") !== 0 ?
                    `<button class="card-download" data-song-id="${song.id}" title="Download for offline">⤓</button>` : ""
                }

            </div>
        `;

        container.appendChild(card);

    });
}


function renderAll() {

    renderSongs(
        songs,
        "homeSongs"
    );

    renderSongs(
        songs,
        "allSongs"
    );

    var favoriteList =
        songs.filter(function (song) {

            return favorites.includes(song.id);

        });

    renderSongs(
        favoriteList,
        "favoriteSongs"
    );

    var recentList =
        recentlyPlayed
            .map(function (id) {

                return songs.find(function (song) {

                    return song.id === id;

                });

            })
            .filter(function (song) {

                return song;

            });

    renderSongs(
        recentList,
        "recentSongs"
    );

    var songCount =
        document.getElementById("songCount");

    if (songCount) {
        songCount.textContent =
            songs.length + " songs";
    }

    var allSongCount =
        document.getElementById("allSongCount");

    if (allSongCount) {
        allSongCount.textContent =
            songs.length + " songs";
    }

    renderPlaylists();

    renderDownloads();
}


function playSong(index) {

    if (
        index < 0 ||
        index >= songs.length
    ) {
        return;
    }

    currentIndex = index;

    var song =
        songs[currentIndex];

    localStorage.setItem(
        "currentSongId",
        song.id
    );

    localStorage.setItem(
        "currentSongPosition",
        "0"
    );

    playerTitle.textContent =
        song.title;

    playerArtist.textContent =
        song.artist;

    playerCover.src =
        song.cover;

    updateFavoriteButton();

    function startPlayback(src) {
        audio.src = src;
        audio.load();
        audio.play()
            .then(function () {

                playBtn.textContent =
                    "❚❚";

                localStorage.setItem(
                    "playerPlaying",
                    "true"
                );

            })
            .catch(function () {

                playBtn.textContent =
                    "▶";

                localStorage.setItem(
                    "playerPlaying",
                    "false"
                );

            });

        addRecentlyPlayed(
            song.id
        );
    }

    if (typeof DownloadManager !== "undefined") {
        DownloadManager.resolveSongSrc(song)
            .then(startPlayback)
            .catch(function () {
                startPlayback(song.src);
            });
    } else {
        startPlayback(song.src);
    }
}


function playSongById(id) {

    var index =
        songs.findIndex(function (song) {

            return song.id === id;

        });

    if (index !== -1) {
        playSong(index);
    }
}


playBtn.addEventListener(
    "click",
    function () {

        if (currentIndex === -1) {

            if (songs.length > 0) {
                playSong(0);
            }

            return;
        }

        if (audio.paused) {

            audio.play()
                .then(function () {

                    playBtn.textContent =
                        "❚❚";

                    localStorage.setItem(
                        "playerPlaying",
                        "true"
                    );

                });

        } else {

            audio.pause();

            playBtn.textContent =
                "▶";

            savePlayerState();

        }

    }
);


function nextSong() {

    if (songs.length === 0) {
        return;
    }

    if (isShuffle) {

        var randomIndex;

        do {

            randomIndex =
                Math.floor(
                    Math.random() *
                    songs.length
                );

        } while (
            songs.length > 1 &&
            randomIndex === currentIndex
        );

        playSong(randomIndex);

        return;
    }

    var nextIndex =
        currentIndex + 1;

    if (nextIndex >= songs.length) {

        if (isRepeat) {

            nextIndex = 0;

        } else {

            audio.pause();

            playBtn.textContent =
                "▶";

            savePlayerState();

            return;
        }
    }

    playSong(nextIndex);
}


nextBtn.addEventListener(
    "click",
    function () {

        nextSong();

    }
);


previousBtn.addEventListener(
    "click",
    function () {

        if (songs.length === 0) {
            return;
        }

        var previousIndex =
            currentIndex - 1;

        if (previousIndex < 0) {

            previousIndex =
                songs.length - 1;

        }

        playSong(previousIndex);

    }
);


audio.addEventListener(
    "ended",
    function () {

        if (isRepeat) {

            audio.currentTime = 0;

            audio.play();

            return;

        }

        if (autoNext) {

            nextSong();

        } else {

            playBtn.textContent =
                "▶";

            localStorage.setItem(
                "playerPlaying",
                "false"
            );

        }

    }
);


shuffleBtn.addEventListener(
    "click",
    function () {

        isShuffle =
            !isShuffle;

        shuffleBtn.style.opacity =
            isShuffle ? "1" : "0.5";

    }
);


repeatBtn.addEventListener(
    "click",
    function () {

        isRepeat =
            !isRepeat;

        repeatBtn.style.opacity =
            isRepeat ? "1" : "0.5";

    }
);


autoNextBtn.addEventListener(
    "click",
    function () {

        autoNext =
            !autoNext;

        autoNextBtn.classList.toggle(
            "active",
            autoNext
        );

    }
);


audio.addEventListener(
    "loadedmetadata",
    function () {

        progress.max =
            audio.duration;

        duration.textContent =
            formatTime(
                audio.duration
            );

    }
);


audio.addEventListener(
    "timeupdate",
    function () {

        progress.value =
            audio.currentTime;

        currentTime.textContent =
            formatTime(
                audio.currentTime
            );

        if (currentIndex !== -1) {

            localStorage.setItem(
                "currentSongPosition",
                audio.currentTime
            );

        }

    }
);


progress.addEventListener(
    "input",
    function () {

        audio.currentTime =
            Number(progress.value);

        localStorage.setItem(
            "currentSongPosition",
            audio.currentTime
        );

    }
);


volume.addEventListener(
    "input",
    function () {

        audio.volume =
            Number(volume.value);

        localStorage.setItem(
            "playerVolume",
            audio.volume
        );

    }
);


function formatTime(seconds) {

    if (
        isNaN(seconds) ||
        !isFinite(seconds)
    ) {
        return "0:00";
    }

    var minutes =
        Math.floor(
            seconds / 60
        );

    var secondsLeft =
        Math.floor(
            seconds % 60
        );

    if (secondsLeft < 10) {

        secondsLeft =
            "0" + secondsLeft;

    }

    return (
        minutes +
        ":" +
        secondsLeft
    );
}


function toggleFavorite(id) {

    var index =
        favorites.indexOf(id);

    if (index === -1) {

        favorites.push(id);

    } else {

        favorites.splice(
            index,
            1
        );

    }

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

    renderAll();

    updateFavoriteButton();
}


function updateFavoriteButton() {

    if (currentIndex === -1) {

        favoriteBtn.textContent =
            "♡";

        return;
    }

    var id =
        songs[currentIndex].id;

    favoriteBtn.textContent =
        favorites.includes(id)
            ? "♥"
            : "♡";
}


favoriteBtn.addEventListener(
    "click",
    function () {

        if (currentIndex !== -1) {

            toggleFavorite(
                songs[currentIndex].id
            );

        }

    }
);


function addRecentlyPlayed(id) {

    recentlyPlayed =
        recentlyPlayed.filter(
            function (item) {

                return item !== id;

            }
        );

    recentlyPlayed.unshift(id);

    recentlyPlayed =
        recentlyPlayed.slice(
            0,
            20
        );

    localStorage.setItem(
        "recentlyPlayed",
        JSON.stringify(
            recentlyPlayed
        )
    );

    renderAll();
}


searchInput.addEventListener(
    "input",
    function () {

        var searchText =
            searchInput.value
                .toLowerCase()
                .trim();

        var filteredSongs =
            songs.filter(
                function (song) {

                    return (
                        song.title
                            .toLowerCase()
                            .includes(searchText)
                        ||
                        song.artist
                            .toLowerCase()
                            .includes(searchText)
                    );

                }
            );

        renderSongs(
            filteredSongs,
            "homeSongs"
        );

    }
);


var navButtons =
    document.querySelectorAll(
        ".nav-btn"
    );


navButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                navButtons.forEach(
                    function (btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );

                button.classList.add(
                    "active"
                );

                var section =
                    button.dataset.section;

                document
                    .querySelectorAll(
                        ".section"
                    )
                    .forEach(
                        function (sec) {

                            sec.classList.remove(
                                "active"
                            );

                        }
                    );

                var target =
                    document.getElementById(
                        section +
                        "Section"
                    );

                if (target) {

                    target.classList.add(
                        "active"
                    );

                }

                var sidebar =
                    document.querySelector(
                        ".sidebar"
                    );

                if (
                    sidebar &&
                    sidebar.classList.contains(
                        "open"
                    )
                ) {

                    sidebar.classList.remove(
                        "open"
                    );

                    var backdrop =
                        document.querySelector(
                            ".sidebar-backdrop"
                        );

                    if (backdrop) {
                        backdrop.remove();
                    }

                }

            }
        );

    }
);


document
    .getElementById("playAllBtn")
    .addEventListener(
        "click",
        function () {

            if (songs.length > 0) {
                playSong(0);
            }

        }
    );


var playlistModal =
    document.getElementById(
        "playlistModal"
    );


document
    .getElementById("addPlaylistBtn")
    .addEventListener(
        "click",
        function () {

            playlistModal.classList.add(
                "show"
            );

        }
    );


document
    .getElementById("closeModal")
    .addEventListener(
        "click",
        function () {

            playlistModal.classList.remove(
                "show"
            );

        }
    );


document
    .getElementById("createPlaylist")
    .addEventListener(
        "click",
        function () {

            var name =
                document
                    .getElementById(
                        "playlistName"
                    )
                    .value
                    .trim();

            if (name === "") {
                return;
            }

            playlists.push({

                id: Date.now(),

                name: name,

                songs: []

            });

            localStorage.setItem(
                "playlists",
                JSON.stringify(
                    playlists
                )
            );

            document
                .getElementById(
                    "playlistName"
                )
                .value = "";

            playlistModal.classList.remove(
                "show"
            );

            renderPlaylists();

        }
    );


function renderPlaylists() {

    var list =
        document.getElementById(
            "playlistList"
        );

    if (!list) {
        return;
    }

    list.innerHTML = "";

    playlists.forEach(
        function (playlist) {

            var item =
                document.createElement(
                    "div"
                );

            item.className =
                "playlist-item";

            item.textContent =
                "♫ " +
                playlist.name;

            list.appendChild(item);

        }
    );
}


function renderDownloads() {

    var countEl = document.getElementById("downloadCount");
    var sizeEl = document.getElementById("downloadedTotalSize");
    var container = document.getElementById("downloadedSongs");

    if (typeof OfflineStorage === "undefined") {
        if (countEl) countEl.textContent = "Offline storage not available";
        return;
    }

    OfflineStorage.getDownloadedSongs().then(function (downloaded) {
        if (countEl) {
            countEl.textContent = downloaded.length + " song" + (downloaded.length !== 1 ? "s" : "") + " downloaded";
        }

        OfflineStorage.getTotalSize().then(function (total) {
            if (sizeEl) {
                var mb = (total / (1024 * 1024)).toFixed(1);
                sizeEl.textContent = mb + " MB used";
            }
        }).catch(function () {});

        if (!container) return;

        container.innerHTML = "";

        if (downloaded.length === 0) {
            container.innerHTML = '<div class="empty-state"><p>No downloaded songs yet. Click the download button on any song card to save it for offline playback.</p></div>';
            return;
        }

        downloaded.forEach(function (item) {
            var song = songs.find(function (s) { return s.id === item.id; });
            if (!song) return;

            var card = document.createElement("div");
            card.className = "song-card";

            var sizeStr = "";
            if (item.size) {
                var mb = (item.size / (1024 * 1024)).toFixed(1);
                sizeStr = mb + " MB";
            }

            card.innerHTML = `
                <img
                    class="song-cover"
                    src="${escapeHTML(song.cover)}"
                    alt="${escapeHTML(song.title)}"
                >
                <h3>${escapeHTML(song.title)}</h3>
                <p>${escapeHTML(song.artist)}</p>
                <div class="card-buttons">
                    <button class="card-play" onclick="playSongById(${song.id})">▶</button>
                    <button class="card-remove-download" data-song-id="${song.id}" title="Remove download">✕</button>
                </div>
                <span class="download-badge">⤓ Offline${sizeStr ? " \u00B7 " + sizeStr : ""}</span>
            `;

            container.appendChild(card);
        });

    }).catch(function () {
        if (countEl) countEl.textContent = "Error loading downloads";
    });
}


document.addEventListener("click", function (e) {
    var btn = e.target.closest(".card-remove-download");
    if (!btn) return;

    var songId = Number(btn.getAttribute("data-song-id"));
    if (!songId || typeof OfflineStorage === "undefined") return;

    OfflineStorage.removeSong(songId).then(function () {
        renderDownloads();
    }).catch(function () {});
});


audio.addEventListener("error", function () {
    if (currentIndex === -1) return;
    var song = songs[currentIndex];
    if (!song) return;

    var isLocal = song.src && (song.src.indexOf("./assets/") === 0 || song.src.indexOf("/") === 0);
    if (!isLocal && typeof OfflineStorage !== "undefined") {
        OfflineStorage.isDownloaded(song.id).then(function (downloaded) {
            if (!downloaded) {
                playerArtist.textContent = "Offline \u2014 this song hasn't been downloaded yet.";
            }
        }).catch(function () {});
    }
});


document
    .getElementById("mobileMenu")
    .addEventListener(
        "click",
        function () {

            var sidebar =
                document.querySelector(
                    ".sidebar"
                );

            var isOpen =
                sidebar.classList.contains(
                    "open"
                );

            if (isOpen) {

                sidebar.classList.remove(
                    "open"
                );

                var backdrop =
                    document.querySelector(
                        ".sidebar-backdrop"
                    );

                if (backdrop) {
                    backdrop.remove();
                }

            } else {

                sidebar.classList.add(
                    "open"
                );

                var backdrop =
                    document.createElement(
                        "div"
                    );

                backdrop.className =
                    "sidebar-backdrop";

                backdrop.addEventListener(
                    "click",
                    function () {

                        sidebar.classList.remove(
                            "open"
                        );

                        backdrop.remove();

                    }
                );

                document.body.appendChild(
                    backdrop
                );

            }

        }
    );


document.addEventListener(
    "keydown",
    function (e) {

        if (
            e.target.tagName === "INPUT"
        ) {
            return;
        }

        if (e.code === "Space") {

            e.preventDefault();

            playBtn.click();

        }

        if (
            e.ctrlKey &&
            (e.code === "KeyK" || e.key === "k")
        ) {

            e.preventDefault();

            searchInput.focus();

        }

        if (
            e.code === "ArrowRight"
        ) {

            nextSong();

        }

        if (
            e.code === "ArrowLeft"
        ) {

            previousBtn.click();

        }

    }
);


window.addEventListener(
    "beforeunload",
    function () {

        savePlayerState();

    }
);


document.addEventListener(
    "visibilitychange",
    function () {

        if (
            document.visibilityState ===
            "hidden"
        ) {

            savePlayerState();

        }

    }
);


renderAll();


var lastSongId =
    localStorage.getItem(
        "currentSongId"
    );

var lastPosition =
    Number(
        localStorage.getItem(
            "currentSongPosition"
        )
    );

var lastVolume =
    localStorage.getItem(
        "playerVolume"
    );

var lastPlaying =
    localStorage.getItem(
        "playerPlaying"
    );


if (lastVolume !== null) {

    audio.volume =
        Number(lastVolume);

    volume.value =
        Number(lastVolume);

}


if (lastSongId !== null) {

    var restoreIndex =
        songs.findIndex(
            function (song) {

                return (
                    song.id ===
                    Number(lastSongId)
                );

            }
        );


    if (restoreIndex !== -1) {

        currentIndex =
            restoreIndex;

        var restoreSong =
            songs[restoreIndex];

        audio.src =
            restoreSong.src;

        playerTitle.textContent =
            restoreSong.title;

        playerArtist.textContent =
            restoreSong.artist;

        playerCover.src =
            restoreSong.cover;

        updateFavoriteButton();


        audio.addEventListener(
            "loadedmetadata",
            function () {

                if (
                    !isNaN(lastPosition) &&
                    lastPosition >= 0 &&
                    lastPosition < audio.duration
                ) {

                    audio.currentTime =
                        lastPosition;

                }

                progress.max =
                    audio.duration;

                duration.textContent =
                    formatTime(
                        audio.duration
                    );

                currentTime.textContent =
                    formatTime(
                        audio.currentTime
                    );

                if (
                    lastPlaying === "true"
                ) {

                    audio.play()
                        .then(
                            function () {

                                playBtn.textContent =
                                    "❚❚";

                            }
                        )
                        .catch(
                            function () {

                                playBtn.textContent =
                                    "▶";

                            }
                        );

                } else {

                    playBtn.textContent =
                        "▶";

                }

            },
            {
                once: true
            }
        );

        audio.load();

    } }
