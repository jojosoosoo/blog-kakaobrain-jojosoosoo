import "../css/footer.css";

const Footer = () => {
  return (
    <footer class="footer">
      {/* <!-- 하단 사이트 정보 및 사이트 맵 --> */}
      <div class="footer-top">
        <div class="inner">
          {/* <!-- 회사소개 --> */}
          <div class="footer-top-info">
            <a href="#" class="footer-logo">
              <img src="./images/etc/logo-kakao-footer.png" alt="카카오브레인" />
            </a>
            <p class="footer-top-info-desc">
              카카오브레인의 혁신은 모든 크루의 물음에서 시작합니다. <br />
              AI 없이는 상상할 수 없는 세상을 만들기 위해선 생각하지 못한 많은 물음이 필요합니다.
              <br />
              세상을 변화시킬 수 있는 새로운 물음을 던질 크루를 기다립니다.
            </p>
            <a href="#" class="bt-more bt-orange">
              지원하러 가기
            </a>
          </div>
          {/* <!-- 사이트맵 --> */}
          <div class="footer-top-sitemap">
            <dl>
              <dt>정보</dt>
              <dd>
                <a href="#">
                  영입페이지 <i class="xi-arrow-up rot-45"></i>
                </a>
              </dd>
              <dd>
                <a href="#">이메일무단수집거부</a>
              </dd>
              <dd>
                <a href="#">개인정보처리방침</a>
              </dd>
              <dd>
                <a href="#">오시는 길</a>
              </dd>
            </dl>

            <dl>
              <dt>문의</dt>
              <dd>
                <a href="#">영입</a>
              </dd>
              <dd>
                <a href="#">PR</a>
              </dd>
              <dd>
                <a href="#">마케팅∙사업제휴</a>
              </dd>
            </dl>
          </div>
        </div>
      </div>
      {/* <!-- 하단 카피라이터 및 SNS 링크 --> */}
      <div class="footer-bottom">
        <div class="inner">
          {/* <!-- 카피라이터 --> */}
          <div class="footer-bottom-copyright">
            <span class="copy">Kakao Brain Corp. @ All rights reserved.</span>
          </div>
          {/* <!-- SNS 목록 --> */}
          <div class="footer-bottom-sns">
            <ul class="sns-list">
              <li>
                <a href="#">
                  <i class="xi-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="xi-youtube-play"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="xi-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="xi-facebook"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
