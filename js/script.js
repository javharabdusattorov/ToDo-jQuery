$("form, .enter").on("submit", function (e) {
  e.preventDefault();
  const titleValue = $(".form__input1").val();
  const nameValue = $(".form__input2").val();
  const descriptionValue = $(".form__input3").val();

  $(".result-heading")
    .text(`${nameValue}ning bugungi kun rejalari:`)
    .addClass("result-heading");

  const title = $(`
    <li class="result-item">
      ${titleValue}
      <i class="far fa-trash-alt result-icon"></i>
    </li>
  `)

  $('.result-container').append(`
    <div class="result-box">
      <div class="result-box-body"> ${descriptionValue} </div>            
    </div>
  `);

  $('.result-container .result-box:last').prepend(title);

  $(".result-box-body").hide();
  title.on("click", (evt) => {
    const element = $(evt.target);
    element.parent().find('.result-box-body').slideToggle(300); 
  });

  $(".result-icon").on("click", (evt) => {
    const element = $(evt.target);
    element.parent().remove();
    element.parent().find(".result-box-body").remove();
  });

  $(".form__input1").val("");
  $(".form__input3").val("");
});
