$(document).ready(function () {
  // Project Img Modal
  const project_modal1 = $("#blackpink_content img");
  project_modal1.click(function (e) {
    e.preventDefault();
    let project_modal1 =
      '<div class="project__modalwrap"><div class="project__modal"><img src="./images/blackpinkdetail.jpg" alt="블랙핑크 웹사이트 상세페이지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(project_modal1);
    $(".project__modalwrap .fa-xmark").click(function () {
      $(".project__modalwrap").fadeOut();
      return false;
    });
  });
  const project_modal2 = $("#krispydonut_content img");
  project_modal2.click(function (e) {
    e.preventDefault();
    let project_modal2 =
      '<div class="project__modalwrap"><div class="project__modal"><img src="./images/krispydetail.jpg" alt="크리스피크림도넛 웹사이트 상세페이지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(project_modal2);
    $(".project__modalwrap .fa-xmark").click(function () {
      $(".project__modalwrap").fadeOut();
      return false;
    });
  });
  const project_modal3 = $("#sangol_content img");
  project_modal3.click(function (e) {
    e.preventDefault();
    let project_modal3 =
      '<div class="project__modalwrap"><div class="project__modal"><img src="./images/sangolchogadetail.jpg" alt="산골초가펜션 웹사이트 상세페이지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(project_modal3);
    $(".project__modalwrap .fa-xmark").click(function () {
      $(".project__modalwrap").fadeOut();
      return false;
    });
  });
  const project_modal4 = $("#healing_content img");
  project_modal4.click(function (e) {
    e.preventDefault();
    let project_modal4 =
      '<div class="project__modalwrap"><div class="project__modal"><img src="./images/healingdetail.jpg" alt="힐링횡성 웹사이트 상세페이지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(project_modal4);
    $(".project__modalwrap .fa-xmark").click(function () {
      $(".project__modalwrap").fadeOut();
      return false;
    });
  });

  // Design Img Modal
  const design_modal1 = $(".designs li:first-child");
  design_modal1.click(function (e) {
    e.preventDefault();
    let design_modal1 =
      '<div class="design__modalwrap"><div class="design__modal"><img src="./images/banner1.jpg" alt="개인 디자인 이미지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(design_modal1);
    $(".design__modalwrap .fa-xmark").click(function () {
      $(".design__modalwrap").fadeOut();
      return false;
    });
  });
  const design_modal2 = $(".designs li:nth-child(2)");
  design_modal2.click(function (e) {
    e.preventDefault();
    let design_modal2 =
      '<div class="design__modalwrap"><div class="design__modal"><img src="./images/banner2.jpg" alt="개인 디자인 이미지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(design_modal2);
    $(".design__modalwrap .fa-xmark").click(function () {
      $(".design__modalwrap").fadeOut();
      return false;
    });
  });
  const design_modal3 = $(".designs li:nth-child(3)");
  design_modal3.click(function (e) {
    e.preventDefault();
    let design_modal3 =
      '<div class="design__modalwrap"><div class="design__modal"><img src="./images/banner3.jpg" alt="개인 디자인 이미지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(design_modal3);
    $(".design__modalwrap .fa-xmark").click(function () {
      $(".design__modalwrap").fadeOut();
      return false;
    });
  });
  const design_modal4 = $(".designs li:nth-child(4)");
  design_modal4.click(function (e) {
    e.preventDefault();
    let design_modal4 =
      '<div class="design__modalwrap"><div class="design__modal"><img src="./images/banner4.jpg" alt="개인 디자인 이미지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(design_modal4);
    $(".design__modalwrap .fa-xmark").click(function () {
      $(".design__modalwrap").fadeOut();
      return false;
    });
  });
  const design_modal5 = $(".designs li:nth-child(5)");
  design_modal5.click(function (e) {
    e.preventDefault();
    let design_modal5 =
      '<div class="design__modalwrap"><div class="design__modal"><img src="./images/banner5.jpg" alt="개인 디자인 이미지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(design_modal5);
    $(".design__modalwrap .fa-xmark").click(function () {
      $(".design__modalwrap").fadeOut();
      return false;
    });
  });
  const design_modal6 = $(".designs li:nth-child(6)");
  design_modal6.click(function (e) {
    e.preventDefault();
    let design_modal6 =
      '<div class="design__modalwrap"><div class="design__modal"><img src="./images/banner6.jpg" alt="개인 디자인 이미지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(design_modal6);
    $(".design__modalwrap .fa-xmark").click(function () {
      $(".design__modalwrap").fadeOut();
      return false;
    });
  });
  const design_modal7 = $(".designs li:nth-child(7)");
  design_modal7.click(function (e) {
    e.preventDefault();
    let design_modal7 =
      '<div class="design__modalwrap"><div class="design__modal"><img src="./images/banner7.jpg" alt="개인 디자인 이미지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(design_modal7);
    $(".design__modalwrap .fa-xmark").click(function () {
      $(".design__modalwrap").fadeOut();
      return false;
    });
  });
  const design_modal8 = $(".designs li:last-child");
  design_modal8.click(function (e) {
    e.preventDefault();
    let design_modal8 =
      '<div class="design__modalwrap"><div class="design__modal"><img src="./images/logodesign.jpg" alt="개인 디자인 이미지"></div><a href="#" title="닫기"><i class="fa-solid fa-xmark"></i></a></div>';
    $("body").append(design_modal8);
    $(".design__modalwrap .fa-xmark").click(function () {
      $(".design__modalwrap").fadeOut();
      return false;
    });
  });
});
