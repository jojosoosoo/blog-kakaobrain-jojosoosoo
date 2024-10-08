// html 활용
window.addEventListener("load", function () {
  // 슬라이드를 보관
  let cardSlide = null;
  // 슬라이드 만드는 함수
  function makeCardSlide() {
    const wWidth = window.innerWidth;
    if (wWidth > 1024) {
      // swiper 제거
      if (cardSlide !== null) {
        // swiper 제거하는 코드
        cardSlide.destroy();
        cardSlide = null;
      }
    } else {
      // swiper 생성
      // swiper 작동시키기(모바일에서만 작동해야 함)
      if (cardSlide === null) {
        cardSlide = new Swiper(".cardslide", {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 20,
        });
      }
    }
  }

  const dataUrl = "./apis/cards.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      // 할 일 진행
      // 내용을 출력할 DOM 선택
      const cardsWhere = document.querySelector(".cardslide .swiper-wrapper");
      // 출력해줄 html 글자를 모을 일반 변수:  let으로 작성
      let cardsTags = "";
      // 배열의 반복문 중 forEach를 사용해서 태그 글자를 만듦
      result.forEach((item) => {
        // console.log(item); 아이템은 {} 형태이므로 .으로 접근
        const tag = ` 
        <div class="swiper-slide">
            <a href=${item.link} class="card-link br-20" style="background: url('./images/${item.imgpath}') no-repeat center;background-size: cover;" >
                <div class="card-txt">
                    <h3 class="card-title">${item.cardname}</h3>
                    <span class="card-count">${item.cardno}</span>
                </div>
            </a>
        </div> `;
        // console.log(tag);
        cardsTags = cardsTags + tag;
        // cardsTags += tag;
      });
      //   console.log(cardsTags);
      cardsWhere.innerHTML = cardsTags;
      makeCardSlide();
    })
    .catch((error) => {
      console.log(error);
    });

  // 화면의 너비를 체크
  // 내용이 로딩이 되면 화면의 너비를 체크하고, 
  // 사이즈에 따라서 슬라이드 생성 할지 말지를 작성

  window.addEventListener("resize", function () {
    makeCardSlide();
  });
});
