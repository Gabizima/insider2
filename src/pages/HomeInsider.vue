<template>
  <ion-page>
          <!-- transition -->
      <div class="white-overlay" ref="whiteOverlay"></div>

      <div class="overlay" ref="overlay">
        <div class="rideau-left-white" ref="rideauLeftWhite"></div>
        <div class="rideau-right-white" ref="rideauRightWhite"></div>
        <div class="rideau-left-bleu" ref="rideauLeftBleu"></div>
        <div class="rideau-right-bleu" ref="rideauRightBleu"></div>
        <div class="rideau-left-bleufonce" ref="rideauLeftBleufonce"></div>
        <div class="rideau-right-bleufonce" ref="rideauRightBleufonce"></div>
      </div>
    <ion-content>

<div id="background">
      <div id="home-insider">
      <div class="menu-daikin">
        <img src="/src/img/daikin.png" alt="logo-daikin" class="daikin-logo" />
        <h1>Insider</h1>
        <ul class="dropdown-menu-daikin">
          <li class="menu-item">
            <a href="#" @click.prevent="showProductMenu = !showProductMenu"
              >Product
              <img
                src="/src/img/chevron_bas.png"
                alt="chevron-bas"
                class="chevron-bas"
            /></a>
            <ul class="submenu" v-show="showProductMenu">
              <li><a href="#">Product 1</a></li>
              <li><a href="#">Product 2</a></li>
              <li><a href="#">Product 3</a></li>
            </ul>
          </li>
          <li class="menu-item">
            <a href="#" @click.prevent="showResourceMenu = !showResourceMenu"
              >Ressource
              <img
                src="/src/img/chevron_bas.png"
                alt="chevron-bas"
                class="chevron-bas"
            /></a>
            <ul class="submenu" v-show="showResourceMenu">
              <li><a href="#">Ressource 1</a></li>
              <li><a href="#">Ressource 2</a></li>
              <li><a href="#">Ressource 3</a></li>
            </ul>
          </li>
          <li class="menu-item"><a href="#">Support</a></li>
        </ul>
        <!-- login logo -->
        <img src="/src/img/login.svg" alt="login-logo" class="login-logo" />
      </div>
      <div class="brand-way-overlay">
        <h2>Experience our products in a brand new way</h2>
      </div>

      <!-- ion row avec 3 colonnes produit -->
      <ion-row class="row-product">
        <ion-col size="4">
            <ion-card class="col-product" @click="blockE1500" >
              <ion-card-header>
                <ion-img
                  src="/src/img/EXIGO-01.svg"
                  class="logo-product exigologo"
                ></ion-img>
              </ion-card-header>
              <ion-card-content>
                <ion-img
                  src="/src/img/Exigo_E1500.png"
                  class="img-product"
                ></ion-img>
              </ion-card-content>
            </ion-card>
        </ion-col>
        <ion-col size="4">
          <ion-card class="col-product">
            <ion-card-header>
              <ion-img
                src="/src/img/UNO-01.svg"
                alt="UNO-logo"
                class="logo-product"
              ></ion-img>
            </ion-card-header>
            <ion-card-content>
              <ion-img
                src="/src/img/U1000_3-4 lato dx_HD_20.png"
                class="img-product little-img"
              ></ion-img>
            </ion-card-content>
          </ion-card>
        </ion-col>
        <ion-col size="4">
          <ion-card class="col-product">
            <ion-card-header>
              <ion-img
                src="/src/img/SFZ-01.svg"
                alt="SFZ-logo"
                class="logo-product"
              ></ion-img>
            </ion-card-header>
            <ion-card-content>
            <ion-img
              src="/src/img/SFZ248_LATO DX_HD_20.png"
              class="img-product little-img"
            ></ion-img>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
</div>

<div id="e1500" >
            <a href="/insider" id="back-button">Home</a>
        <video id="videoComponent"  muted autoplay>
        <source src="" type="video/mp4">
    </video>
    <div id="overlay">
        <button id="button-overlay">Check the component</button>
        <div class="rectangle-text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in praesentium soluta dolore temporibus sint est omnis nemo rem saepe nulla minima quod asperiores eos tempore illum reiciendis, laborum aspernatur!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus hic voluptas tenetur nesciunt, facilis laborum enim ratione aspernatur ea non exercitationem aut reprehenderit aliquam, dicta quasi rerum accusamus quo.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam numquam debitis nesciunt eum consequuntur quia laudantium magni explicabo corporis, impedit magnam voluptatibus. Accusantium beatae esse deleniti commodi totam magnam.</p>
        </div>
    </div>

    <!-- Button Component : grande div qui compose de 4 div (engine, compressor, airflow et controller) ainsi que leur description-->
    <div id="button-component">
        <div class="card-componenents">
            <button class="button-rectangle-title" id="button-engine">Engine and Generator</button>
            <div class="button-rectangle-text" id="text-engine">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in praesentium soluta dolore temporibus sint est omnis nemo rem saepe nulla minima quod asperiores eos tempore illum reiciendis, laborum aspernatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus hic voluptas tenetur nesciunt, facilis laborum enim ratione aspernatur ea non exercitationem aut reprehenderit aliquam, dicta quasi rerum accusamus quo.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam numquam debitis nesciunt eum consequuntur quia laudantium magni explicabo corporis, impedit magnam voluptatibus. Accusantium beatae esse deleniti commodi totam magnam.
              </p>
            </div>
        </div>
        <!-- div espace -->
        <div class="space"></div>
            <div  class="card-componenents">
                <button class="button-rectangle-title" id="button-compressor">Compressor</button>
                <div class="button-rectangle-text" id="text-compressor">
                  <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in praesentium soluta dolore temporibus sint est omnis nemo rem saepe nulla minima quod asperiores eos tempore illum reiciendis, laborum aspernatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus hic voluptas tenetur nesciunt, facilis laborum enim ratione aspernatur ea non exercitationem aut reprehenderit aliquam, dicta quasi rerum accusamus quo.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam numquam debitis nesciunt eum consequuntur quia laudantium magni explicabo corporis, impedit magnam voluptatibus. Accusantium beatae esse deleniti commodi totam magnam.
              </p>
                </div>
            </div>
        <!-- div espace -->
        <div class="space"></div>
            <div  class="card-componenents">
                <button class="button-rectangle-title" id="button-airflow">Airflow and Variable</button>
                <div class="button-rectangle-text" id="text-airflow">
                  <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in praesentium soluta dolore temporibus sint est omnis nemo rem saepe nulla minima quod asperiores eos tempore illum reiciendis, laborum aspernatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus hic voluptas tenetur nesciunt, facilis laborum enim ratione aspernatur ea non exercitationem aut reprehenderit aliquam, dicta quasi rerum accusamus quo.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam numquam debitis nesciunt eum consequuntur quia laudantium magni explicabo corporis, impedit magnam voluptatibus. Accusantium beatae esse deleniti commodi totam magnam.
              </p>
                </div>
            </div>
                    <!-- div espace -->
        <div class="space"></div>
            <div class="card-componenents">
                <button class="button-rectangle-title" id="button-controller" >controller</button>
                <div class="button-rectangle-text" id="text-controller">
                  <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis in praesentium soluta dolore temporibus sint est omnis nemo rem saepe nulla minima quod asperiores eos tempore illum reiciendis, laborum aspernatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel repellendus hic voluptas tenetur nesciunt, facilis laborum enim ratione aspernatur ea non exercitationem aut reprehenderit aliquam, dicta quasi rerum accusamus quo.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam numquam debitis nesciunt eum consequuntur quia laudantium magni explicabo corporis, impedit magnam voluptatibus. Accusantium beatae esse deleniti commodi totam magnam.
              </p>
                </div>
            </div>


        </div>

        
</div>
</div>

    </ion-content>

  </ion-page>
</template>

<script>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCol,
  IonRow,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
} from "@ionic/vue";
import { gsap } from "gsap";
export default {
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCol,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
  },
  data() {
    return {
      showProductMenu: false,
      showResourceMenu: false,
      show: false,
    };
  },
  methods: {
  blockE1500(){
    // mettre home insider en display none
    const homeInsider = document.querySelector('#home-insider');
          // faire l'animaiton de l'overlay
    const overlay = this.$refs.overlay;
    const whiteOverlay = this.$refs.whiteOverlay;
    const rideauLeftWhite = this.$refs.rideauLeftWhite;
    const rideauRightWhite = this.$refs.rideauRightWhite;
    const rideauLeftBleu = this.$refs.rideauLeftBleu;
    const rideauRightBleu = this.$refs.rideauRightBleu;
    const rideauLeftBleufonce = this.$refs.rideauLeftBleufonce;
    const rideauRightBleufonce = this.$refs.rideauRightBleufonce;

     gsap.to(whiteOverlay, { duration: 0.5, opacity: 1,onComplete: () => {
      homeInsider.style.display = 'none';
      gsap.to('.white-overlay', { duration: 1, opacity: 0});
      overlay.style.display = 'block';
      const e1500 = document.querySelector('#e1500');
            e1500.style.display = 'block';
            this.loadScriptE1500();
          gsap.to(rideauLeftWhite, { duration: 1, x: "-100%", ease: "power1.inOut", delay: 0.2});
          gsap.to(rideauRightWhite, { duration: 1, x: "100%", ease: "power1.inOut", delay: 0.2 });
          gsap.to(rideauLeftBleu, { duration: 1, x: "-100%", ease: "power1.inOut", delay: 0.4 });
          gsap.to(rideauRightBleu, { duration: 1, x: "100%", ease: "power1.inOut", delay: 0.4 });
          gsap.to(rideauLeftBleufonce, { duration: 1, x: "-100%", ease: "power1.inOut", delay: 0.6 });
     gsap.to(rideauRightBleufonce, { duration: 1, x: "100%", ease: "power1.inOut", delay: 0.6, onComplete: () => {
    // une fois l'animation terminée, afficher la vidéo



    }});

    }});




  },
  loadScriptE1500() {
           // accooréon boutton
var acc = document.getElementsByClassName("button-rectangle-title");
for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panels = document.getElementsByClassName("button-rectangle-text");
    for (var j = 0; j < panels.length; j++) {
      // gsap height 100%
      gsap.to(panels[j], { duration: 1, maxHeight: "0px", onComplete: () =>{
        panels[j].style.display = "none";
      } });
      
    }

    var buttons = document.getElementsByClassName("button-rectangle-title");
    for (var k = 0; k < buttons.length; k++) {
      buttons[k].classList.remove("active");
    }

    this.classList.add("active");
    var panel = this.nextElementSibling;

    // Ajouter un délai d'une seconde avant d'afficher la description
    setTimeout(function() {
      panel.style.display = "block";
      // gsap height 100%
      gsap.to(panel, { duration: 1, maxHeight: "300px" });
    }, 1000);
  });
}
var BASE_URL = window.location.origin + "/";
console.log("BASE_URL : " + BASE_URL);
// tableau contenant les vidéos
var videoSRC = [
  // video src
  // intro
  "src/img/video-daikin-4K/001_02_Intro_Fast_4K.mp4",
  // check the components
  "src/img/video-daikin-4K/002_03_Explosion_FlyOut_4K.mp4",
  // turn videos 
  "src/img/video-daikin-4K/003_01_ZoomedOut_Engine_TO_Compressor_4K.mp4",
  "src/img/video-daikin-4K/003_02_ZoomedOut_Compressor_TO_Airflow_4K.mp4",
  "src/img/video-daikin-4K/003_03_ZoomedOut_Airflow_TO_Controller_4K.mp4",
  "src/img/video-daikin-4K/003_04_ZoomedOut_Controller_TO_Engine_4K.mp4",
  // zoom videos
  "src/img/video-daikin-4K/004_01_Engine_ZoomIN_4K.mp4",
  "src/img/video-daikin-4K/005_01_Compressor_ZoomIN_4K.mp4",
  "src/img/video-daikin-4K/006_01_Airflow_ZoomIN_4K.mp4",
  "src/img/video-daikin-4K/007_01_Controller_ZoomIN_4K.mp4",
  // reversed videos
  "src/img/video-daikin-4K/004_02_Engine_ZoomOUT_4K.mp4",
  "src/img/video-daikin-4K/005_02_Compressor_ZoomOUT_4K.mp4",
  "src/img/video-daikin-4K/006_02_Airflow_ZoomOUT_4K.mp4",
  "src/img/video-daikin-4K/007_02_Controller_ZoomOUT_4K.mp4"
];
// tableau avec les vignettes des vidéos
var thumbnails = [
  // intro
  'url("/src/img/vignette/vignette1.png")',
  // check the components
  'url("/src/img/vignette/vignette2.png")',
  // turn videos
  'url("/src/img/vignette/vignette4.png")',
  'url("/src/img/vignette/vignette5.png")',
  'url("/src/img/vignette/vignette6.png")',
  'url("/src/img/vignette/vignette7.png")',

  // zoom videos
  'url("/src/img/vignette/vignette8.png")',
  'url("/src/img/vignette/vignette10.png")',
  'url("/src/img/vignette/vignette12.png")',
  'url("/src/img/vignette/vignette14.png")',
  // reversed videos
  'url("/src/img/vignette/vignette9.png")',
  'url("/src/img/vignette/vignette11.png")',
  'url("/src/img/vignette/vignette13.png")',
  'url("/src/img/vignette/vignette15.png")'
];

var overlay = document.getElementById('overlay');
var videoComponent = document.getElementById('videoComponent');

  var videoButtons = [
    document.getElementById('button-engine'),
    document.getElementById('button-compressor'),
    document.getElementById('button-airflow'),
    document.getElementById('button-controller')
  ];
    // Votre code ici qui utilise videoButtons
    console.log(videoButtons);
// Variables pour détecter le bouton cliqué précédemment et actuellement
var clickedBefore = 0;
var clickedNow = 0;
var clickedOne = null;
var clickedTwo = null;
var containerArray = videoButtons;
function detectClickedNumber(clickedDiv) {
  // cette fonction va nous peremttre de savoir quel bouton a été cliqué précédemment et actuellement
  clickedBefore = clickedNow;
  clickedNow = containerArray.indexOf(clickedDiv);
  console.log('Numéro cliqué précédemment :', clickedBefore);
  console.log('Numéro cliqué maintenant :', clickedNow);

  if (clickedNow === clickedBefore) {
    clickedOne = null;
    clickedTwo = null;
  }

  var diff = Math.abs(clickedNow - clickedBefore);

  if (clickedNow > clickedBefore) {
    if (diff === 3) {
      clickedOne = containerArray[Math.min(clickedBefore, clickedNow) + 1];
      clickedTwo = containerArray[Math.max(clickedBefore, clickedNow) - 1];
    } else if (diff === 2) {
      clickedOne = containerArray[Math.min(clickedBefore, clickedNow) + 1];
      clickedTwo = null;
    } else {
      clickedOne = null;
      clickedTwo = null;
    }
  }

  if (clickedBefore > clickedNow) {
    if (diff === 3) {
      clickedOne = containerArray[Math.max(clickedBefore, clickedNow) + 1];
      clickedTwo = containerArray[Math.min(clickedBefore, clickedNow) - 1];
      if (clickedOne === undefined) {
        clickedOne = containerArray[0];
        clickedTwo = null;
      }
    } else if (diff === 2) {
      clickedOne = containerArray[Math.max(clickedBefore, clickedNow) + 1];
      if (clickedOne === undefined) {
        clickedOne = containerArray[0];
      }
      clickedTwo = null;
    } else if (diff === 1) {
      clickedOne = containerArray[Math.max(clickedBefore, clickedNow) + 1];
      clickedTwo = containerArray[Math.min(clickedBefore, clickedNow) - 1];
    } else {
      clickedOne = null;
      clickedTwo = null;
    }
  }
  console.log('clickedOne :', clickedOne ? containerArray.indexOf(clickedOne) : null);
  console.log('clickedTwo :', clickedTwo ? containerArray.indexOf(clickedTwo) : null);
}
 /// SENARIO DE L'APPLICATION INSIDER ///

 /////// INTRO /////////

  // changer le background-image
  changeBackgroundImage(0);
  // changer la source de la vidéo
  changeVideo(0);
  // lancer la vidéo
  playVideo(0);

  
  // vérifier que la source de la vidéo est bien la vidéo 0
  if(videoComponent.src == BASE_URL + videoSRC[0]){
    // afficher l'overlay
    videoComponent.onended = function() {
      console.log("video 0 terminée");
      displayOverlay();
    };
  }else{
    console.log("Erreur : la vidéo 1 ne s'est pas lancée");
    console.log("videoComponent la source : " + videoComponent.src);
    console.log("videoSRC[0] : " + BASE_URL + videoSRC[0]);
  }


/////// CHECK THE COMPONENTS /////////
document.getElementById('button-overlay').addEventListener('click', function() {
  // disparaitre l'overlay
  hideOverlay();
  playVideoAll(1);

  videoComponent.onended = function() {
    if (videoComponent.src == BASE_URL + videoSRC[1]) {
    // afficher button-component
    document.getElementById('button-component').style.display = 'block';
    // button engine focus
    document.getElementById('button-engine').focus();
    // button engine cliqué
    document.getElementById('button-engine').click();

  playVideoAll(6);

  };
}
});
///
///  SENARIO TURN VIDEOS EN FONCTION DU BOUTON CLIQUÉ
///
for (let i = 0; i < videoButtons.length; i++) {
  videoButtons[i].addEventListener('click', function(){
    detectClickedNumber(videoButtons[i]);
    if (i == 0){
      if (clickedNow == 0 && clickedOne !== null) {
      if (clickedBefore == 2 && containerArray.indexOf(clickedOne) == 3) {
        // reversed variable airflow
        playVideoAll(12);
        videoComponent.onended = function() {
          // airflow to controller
          if (videoComponent.src == BASE_URL + videoSRC[12]) {
            playVideoAll(4);
          }
          videoComponent.onended = function() {
          if (clickedNow == 0) {
            if (videoComponent.src == BASE_URL + videoSRC[4]) {
                // controller to engine
                playVideoAll(5);
            }
        }
          videoComponent.onended = function() {
            // engine ZOOM
            if (clickedNow == 0) {
              if (videoComponent.src == BASE_URL + videoSRC[5]) {
                playVideoAll(6);
              }
          }
          };
        };

        };
    } else if (clickedBefore == 1 && containerArray.indexOf(clickedOne) == 2) {
      // reversed compressor
      playVideoAll(11);
      videoComponent.onended = function() {
        // compressor to airflow
        if (videoComponent.src == BASE_URL + videoSRC[11]) {
          playVideoAll(3);
        }
  
      videoComponent.onended = function() {
        //  airflow to controller
        if (clickedNow == 0) {
          if (videoComponent.src == BASE_URL + videoSRC[3]) {
            playVideoAll(4);
          }
      }
        videoComponent.onended = function() {
          if (clickedNow == 0) {
            if (videoComponent.src == BASE_URL + videoSRC[4]) {
                // controller to engine
                playVideoAll(5);
            }
        }
        videoComponent.onended = function() {
          if (clickedNow == 0) {
            if (videoComponent.src == BASE_URL + videoSRC[5]) {
              // engine ZOOM
              playVideoAll(6);
            }
          }
        };
      };
    }
        
      };


    } else if(clickedBefore == 3 && clickedNow== 0 && containerArray.indexOf(clickedTwo) == null){
      // reversed controller
      playVideoAll(13);

      videoComponent.onended = function() {
        if (videoComponent.src == BASE_URL + videoSRC[13]) {
          // controller to engine
          playVideoAll(5);
        }
        // engine ZOOM
        videoComponent.onended = function() {
          if (videoComponent.src == BASE_URL + videoSRC[5]) {
            playVideoAll(6);
          }
        };
      };
    }  else if (containerArray.indexOf(clickedOne) == 0 && clickedNow == 0 && clickedBefore == 3 ){
      // reversed controller
      playVideoAll(13);
      videoComponent.onended = function() {
        if (videoComponent.src == BASE_URL + videoSRC[13]) {
          // controller to engine
          playVideoAll(5);
        }
        // engine ZOOM
        videoComponent.onended = function() {
          if (videoComponent.src == BASE_URL + videoSRC[5]) {
            playVideoAll(6);
          }
        };
      };
    }
    else{
      playVideoAll(5);
      videoComponent.onended = function() {
        if (videoComponent.src == BASE_URL + videoSRC[5]) {
          playVideoAll(6);
        }
      };
    };
  }   
  else{
    playVideoAll(5);
    videoComponent.onended = function() {
      if (videoComponent.src == BASE_URL + videoSRC[5]) {
        playVideoAll(6);
      }
    };
  }; 

    }
    else if (i==1){
      if (clickedNow == 1 && clickedOne !== null) {
    if (clickedBefore == 3 && containerArray.indexOf(clickedOne) == 0) {
      // resersed controller
      playVideoAll(13);
      videoComponent.onended = function() {
        if (videoComponent.src == BASE_URL + videoSRC[13]) {
          // controller to engine
          playVideoAll(5);

        }
      videoComponent.onended = function() {
        if (clickedNow == 1) {
          if (videoComponent.src == BASE_URL + videoSRC[5]) {
          // engine to compressor
          playVideoAll(2);
          }
      }
        videoComponent.onended = function() {
          // compressor ZOOM
          if (clickedNow == 1) {
            if (videoComponent.src == BASE_URL + videoSRC[2]) {
              playVideoAll(7);
            }
        }
        };
      };

      };
  } else if (clickedBefore == 2 && containerArray.indexOf(clickedTwo) == 0) {
    // reversed variable airflow
    playVideoAll(12);
    videoComponent.onended = function() {
      if (videoComponent.src == BASE_URL + videoSRC[12]) {
        // airflow to controller
        playVideoAll(4);
      }
    videoComponent.onended = function() {
      //  controller to engine
      if (clickedNow == 1) {
        if (videoComponent.src == BASE_URL + videoSRC[4]) {
          playVideoAll(5);
        }
    }
      videoComponent.onended = function() {
        if (clickedNow == 1) {
          if (videoComponent.src == BASE_URL + videoSRC[5]) {
            // engine to compressor
            playVideoAll(2);
          }
      }
      videoComponent.onended = function() {
        if (clickedNow == 1) {
          if (videoComponent.src == BASE_URL + videoSRC[2]) {
            // compressor ZOOM
            playVideoAll(7);
          }
        }
      };
    };

    };

  }
  }
  else {
    playVideoAll(2);
    videoComponent.onended = function() {
      if (videoComponent.src == BASE_URL + videoSRC[2]) {
        playVideoAll(7);
      }
    };
  };
} else if(clickedBefore == 0 && clickedNow== 1 && clickedOne == null){
  // reversed engine
  playVideoAll(10);
  videoComponent.onended = function() {
    if (videoComponent.src == BASE_URL + videoSRC[10]) {
      // engine to compressor
      playVideoAll(2);
    }
    videoComponent.onended = function() {
      // compressor ZOOM
      if (clickedNow == 1) {
        if (videoComponent.src == BASE_URL + videoSRC[2]) {
          playVideoAll(7);
        }
      };
    };
  };
}
else{
  playVideoAll(2);
  videoComponent.onended = function() {
    if (videoComponent.src == BASE_URL + videoSRC[2]) {
      playVideoAll(7);
    }
  };
};


    }
    else if (i==2){
      if (clickedNow == 2 && clickedOne !== null) {
  if (clickedBefore == 0 && containerArray.indexOf(clickedOne) == 1) {
    // reversed engine
    playVideoAll(10);
    videoComponent.onended = function() {
      if (videoComponent.src == BASE_URL + videoSRC[10]) {
        // engine to compressor
        playVideoAll(2);
      }
      videoComponent.onended = function() {
        if (clickedNow == 2) {
          if (videoComponent.src == BASE_URL + videoSRC[2]) {
            // compressor to variable airflow
            playVideoAll(3);
          }
      }
        videoComponent.onended = function() {
          // airflow ZOOM
          if (clickedNow == 2) {
            if (videoComponent.src == BASE_URL + videoSRC[3]) {
              playVideoAll(8);
            }
        }
        };
      };
    };
} else if (clickedBefore == 3 && containerArray.indexOf(clickedTwo) == 1) {

  // reversed controller
  playVideoAll(13);
  videoComponent.onended = function() {
  // controller to engine
  if (videoComponent.src == BASE_URL + videoSRC[13]) {
    playVideoAll(5);
  }
  videoComponent.onended = function() {
    if (clickedNow == 2) {
      if (videoComponent.src == BASE_URL + videoSRC[5]) {
        playVideoAll(2);
      }
  }
  // engine to compressor
    videoComponent.onended = function() {
      if (clickedNow == 2) {
        if (videoComponent.src == BASE_URL + videoSRC[2]) {
          playVideoAll(3);
        }
    }

    // compressor ZOOM
    videoComponent.onended = function() {
      if (clickedNow == 2) {
        if (videoComponent.src == BASE_URL + videoSRC[3]) {
          playVideoAll(8);
        }
      }
    };
  };
}

  };
}
else {
  playVideoAll(3);
  videoComponent.onended = function() {
    if (videoComponent.src == BASE_URL + videoSRC[3]) {
      playVideoAll(8);
    }
  };
};
}
else if (clickedNow == 2 && clickedBefore == 1 && clickedOne == null){
// reversed compressor
playVideoAll(11);
videoComponent.onended = function() {
  // compressor to variable airflow
  if (videoComponent.src == BASE_URL + videoSRC[11]) {
    playVideoAll(3);
  }
  videoComponent.onended = function() {
    // airflow ZOOM
    if (clickedNow == 2) {
      if (videoComponent.src == BASE_URL + videoSRC[3]) {
        playVideoAll(8);
      }
    };
  };
};

}
else{
  playVideoAll(3);
videoComponent.onended = function() {
  if (videoComponent.src == BASE_URL + videoSRC[3]) {
    playVideoAll(8);
  }
};
};

    } 
    else if (i==3){
      if (clickedNow == 3 && clickedOne !== null) {
  if (clickedBefore == 1 && containerArray.indexOf(clickedOne) == 2) {
    // reverse compressor 
    playVideoAll(11);
    videoComponent.onended = function() {
      if (clickedNow == 3) {
        if (videoComponent.src == BASE_URL + videoSRC[11]) {
            // compressor to airflow
          playVideoAll(3);
        }
      }
    videoComponent.onended = function() {
      if (clickedNow == 3) {
        if (videoComponent.src == BASE_URL + videoSRC[3]) {
          // airflow to controller
          playVideoAll(4);
        }
    }
      videoComponent.onended = function() {
        // controller ZOOM
        if (clickedNow == 3) {
          if (videoComponent.src == BASE_URL + videoSRC[4]) {
            playVideoAll(9);
          }
      }
      };
    };
    };
} else if (clickedBefore == 0 && containerArray.indexOf(clickedOne) == 1 && containerArray.indexOf(clickedTwo) == 2) {
  // reverse engine
  playVideoAll(10);
  videoComponent.onended = function() {
     // engine to compressor
     if (videoComponent.src == BASE_URL + videoSRC[10]) {
      playVideoAll(2);
     }
  videoComponent.onended = function() {
    //  compressor to airflow
    if (clickedNow == 3) {
      if (videoComponent.src == BASE_URL + videoSRC[2]) {
        playVideoAll(3);
      }
  }
  videoComponent.onended = function() {
    if (clickedNow == 3) {
      if (videoComponent.src == BASE_URL + videoSRC[3]) {
        // airflow to controller
        playVideoAll(4);
      }
  }
  videoComponent.onended = function() {
    if (clickedNow == 3) {
      if (videoComponent.src == BASE_URL + videoSRC[4]) {
        // controller ZOOM
        playVideoAll(9);
      }
    }
  };
};
  };
}
}

}  
else if(clickedBefore == 2 && clickedNow== 3 && clickedOne == null){
// reverse variable airflow
playVideoAll(12);

videoComponent.onended = function() {
  // airflow to controller
  if (videoComponent.src == BASE_URL + videoSRC[12]) {
    playVideoAll(4);
  }
  // controller ZOOM
  videoComponent.onended = function() {
    if(videoComponent.src == BASE_URL + videoSRC[4]){
      playVideoAll(9);
    }
  };
};
}
else{
playVideoAll(4);
videoComponent.onended = function() {
  if (videoComponent.src == BASE_URL + videoSRC[4]) {
    playVideoAll(9);
  }
 
};
};


    }
    else{
      console.log("Erreur : le bouton n'est pas reconnu");
    }
  })

  
};

 function changeBackgroundImage(image) {
  // Convertir l'élément DOM en objet jQuery
  var background = document.getElementById('background');
// Change le background-image
background.style.backgroundImage = thumbnails[image];
console.log("background-image  : " + background.style.backgroundImage)

};

function changeVideo(video) {
  // Convertir l'élément DOM en objet jQuery
    videoComponent.setAttribute('src', videoSRC[video]);
    console.log("videoComponent la source : " + videoComponent.src);
}
  
function playVideo(video){
  // Lance la vidéo
  // set the video to the beginning
  videoComponent.currentTime = 0;
  videoComponent.play();
  console.log("video : " + video + " en lecture");
};

function playVideoAll(video){
  // changer le background-image
  changeBackgroundImage(video);
  setTimeout(function() {
    // verifier que le background-image est bien le bon
    if(background.style.backgroundImage == thumbnails[video]){
            // changer la source de la vidéo
            changeVideo(video);
  // lancer la vidéo
  playVideo(video);

    }else{
      console.log("Erreur : le background-image n'est pas le bon");
      console.log("background-image : " + background.style.backgroundImage);
      console.log("thumbnails[video] : " + thumbnails[video]);
    }

  }, 190);
}
function displayOverlay(){
  // vérifier si la video est video[0]
  if (videoComponent.src == BASE_URL + videoSRC[0]) {
    overlay.style.display = 'block';
    gsap.to(overlay, { duration: 0.5, opacity: 1});

  };
};
// fonction qui au click du button va faire disparaitre l'overlay qui va changer le background-image et lancer la vidéo suivante en changeant la source de la vidéo 0 par la vidéo 1
function hideOverlay() {
  // faire disparaitre l'overlay
  gsap.to(overlay, { duration: 0.5, opacity: 0, onComplete: () => {
    overlay.style.display = 'none';
  }});
};

    
  },

},
};
</script>

<style>
@font-face {
  font-family: "Myriad Pro Regular";
  src: url("/src/fonts/Myriad Pro Regular.ttf");
}
@font-face {
  font-family: "Myriad Pro Light";
  src: url("/src/fonts/Myriad Pro Light.otf");
}
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  font-family: "Myriad Pro Regular";
}
ion-content {
  position: relative;
}
.menu-daikin {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 6.125vh;
  position: relative;
  z-index: 1;
  margin-top: 30px;
  margin-bottom: 30px;
}
.daikin-logo {
  width: 10rem;
  margin-right: 2rem;
}
.dropdown-menu-daikin {
  display: flex;
  margin-left: 6.25%;
}
.menu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-right: 15%;
  font-size: 1.25em;
}
.chevron-bas {
  width: 1rem;
  height: 10px;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
}
.submenu {
  position: absolute;
  top: 100%;
  left: 0;
  flex-direction: column;
  background-color: #f9f9f9;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 120px;
}

.submenu a {
  display: block;
  color: #000000;
}
.brand-way-overlay {
  background-color: #0cadd5;
  padding: 1rem;
  align-items: center;
}
.brand-way-overlay h2 {
  color: #fff;
  font-size: 1.5rem;
  font-weight: 500;
  text-align: center;
}
.login-logo {
  margin-left: auto;
}

.row-product {
  margin: 0 50px;
}
ion-col {
  padding: 25px;
}
.logo-product {
  width: 50%;
  margin-right: 50%;
}
.exigologo{
  margin-left: 20px;
}
.col-product {
  height: 500px;
}
.img-product {
  width: 250px;
  margin: 0 auto;
}
.little-img{
  margin-top: 100px;
}
/* TRANSITION */
.forme {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
}

.forme1,
.forme4 {
  background-color: white;
}

.forme2,
.forme5 {
  background-color: blue;
}

.forme3,
.forme6 {
  background-color: darkblue;
}
.white-overlay {
  pointer-events: none;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 2;
}
.overlay {
  display: none;
}
.rideau-right-white {
  position: absolute;
  right: 0;
  width: 900px;
  height: 100%;
  background: white;
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 5;
}

.rideau-left-white {
  position: absolute;
  left: 0;
  width: 900px;
  height: 100%;
  background: white;
  clip-path: polygon(0 0, 95% 0, 60% 100%, 0% 100%);
  z-index: 5;
}
.rideau-left-bleu {
  position: absolute;
  left: 0;
  width: 900px;
  height: 100%;
  background: #4dcef7;
  clip-path: polygon(0 0, 95% 0, 60% 100%, 0% 100%);
  z-index: 4;
}
.rideau-right-bleu {
  position: absolute;
  right: 0;
  width: 900px;
  height: 100%;
  background: #4dcef7;
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 4;
}
.rideau-left-bleufonce {
  position: absolute;
  left: 0;
  width: 900px;
  height: 100%;
  background: #2e8bc0;
  clip-path: polygon(0 0, 95% 0, 60% 100%, 0% 100%);
  z-index: 3;
}
.rideau-right-bleufonce {
  position: absolute;
  right: 0;
  width: 900px;
  height: 100%;
  background: #2e8bc0;
  clip-path: polygon(33% 0, 100% 0, 100% 100%, 0% 100%);
  z-index: 3;
}
#home-insider {
  display: block;
}
#e1500 {
  display: none;
  z-index: 3;
}

/*  E1500 PAGE */
#back-button {
        position: absolute;
        top: 10px;
        left: 10px;
        color: white;
        font-size: 20px;
        text-decoration: none;
        cursor: pointer;
        z-index: 3;
        background-color: #616061de;
        margin-top: 30px;
        padding: 30px;
        border-radius: 10px;
    }

.check-button{
    margin-top: 200px;
    width: 350px;
    height: 50px;
    background-color: #00A0E4;
    color: #FFFFFF;
    border: none;
    border-radius: 10px;
}
p{
    font-size: 15px;
}

/* overlay */
video{
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
      /* On applique la transformation pour zoomer et déplacer la vidéo */
      transform: scale(1.4) translateX(6%);
    /* Le point autour duquel la transformation est appliquée est le centre de la vidéo */
    transform-origin: center center;

}
/* Overlay : l'overlay doit avoir un bloc rectangle affiché en bas à gauche de l'écran, le texte doit être centrée et le bouton doit être en bas du texte */
#overlay {
  position: absolute;
  width: 450px;
  height: 350px;
  bottom: 35%;
  right: 5%;
  z-index: 2;
  display: none;
  /* transition opacity fade in */
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
#overlay > button{
  background-color: #5FCAF3;
  color: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  border-radius: 10px;
  text-align: center;
  width: 100%;
  border: none;
  font-size: 25px ;

}

.rectangle-text{
  margin-top: 7%;
  background-color: #ffffffd8;
  color: #000000;
  padding: 7%;
  border-radius: 10px;
}




.zoom-button{
    position: absolute;
    bottom: 200px;
    left: 200px;
    width: 400px;
    height: 500px;

}

  video::-webkit-media-controls {
    display: none !important;
  }
  
  video::-webkit-media-controls-enclosure {
    display: none !important;
  }
  
  video::-webkit-media-controls-panel {
    display: none !important;
  }

/* BACKGROUND IMAGE */
#background {
    width: 100%;
    height: 100%;
    background-size: 140%; /* Augmente la taille de l'image de 40% */
    background-position: 29% center; /* Déplace l'image de 6% vers la droite */
    background-image: "";
    background-repeat: no-repeat;
    
}

/* button components */
#button-component{
    position: absolute;
    bottom: 30%;
    right: 5%;
    width: 500px;
    height: 500px;
    display: none;
}

.button-rectangle-title{
  position: relative;
  z-index:2;
  overflow: hidden;
    background-color: #2ECAEF;
    color: white;
    width: 100%;
    height: 3.5em;
    text-align: center;
    border-radius: 10px;
    align-items: center;
    border: none;
    font-size: 1.4em;
    cursor: pointer;

}
.button-rectangle-title:active, .button-rectangle-title:focus, .button-rectangle-title:hover{
    background-color: white;
    color: black;
    /* shadow bottom */
    box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.75);
}



.button-rectangle-text{
    background-color: #f8f8fccf;
    display: none; /* Masquer initialement la description */
    overflow: hidden; /* Cacher le contenu qui dépasse la hauteur maximale */
    border-radius: 10px;
    max-height: 0;
}
.button-rectangle-text p{
  margin: 30px 40px;
}
.space{
  margin-bottom: 20px;
}


.clicked {
    background-color: white;
    color: black;
}
</style>
