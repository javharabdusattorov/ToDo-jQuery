$('.form, .enter').on('submit', function (e) {
  $('h2').text('Write your ToDo...');
  e.preventDefault();
  const type = $('.form').attr('data-type');

  if (!type || type === 'create') { 
    create()
  } else {
    edit()
  }
})

function create() {
  const titleValue = $('.form__input1').val();
  const descriptionValue = $('.form__input2').val();

  const elEditIcon = $(`
    <i class="fal fa-pen edit-icon"></i> 
  `)

  const title = $(`
    <div class="result-item">
        <p class="result-title">${titleValue}</p>
        <div class="result-icons">
          <i class="far fa-trash-alt delete-icon"></i>
        </div>
    </div>
  `)
  title.find(".result-icons").prepend(elEditIcon)

  $('.result-container').append(`
    <div class="result-box">
      <div class="result-box-body"> ${descriptionValue} </div>            
    </div>
  `);

  $('.result-container .result-box:last').prepend(title);

  $('.result-box-body').hide();
  title.on('click', (evt) => {
    const element = $(evt.target);
    element.parent().find('.result-box-body').slideToggle(300); 
  });

  $('.delete-icon').on('click', (evt) => {
    const element = $(evt.target);
    element.parent().parent().parent().remove();
  });

  elEditIcon.on('click', (evt) => {
    const element = $(evt.target);
    const resultBoxId = element.parent().parent().parent();
    $('h2').text('Edit your ToDo')
    $('.form').attr('data-type', 'edit');

    element.parent().parent().parent().parent()
    .parent().parent().attr('data-id', `${$(resultBoxId).index() + 1} `);

    const oldTitleVal = $('.result-title').text();
    const oldDescriptionVal = $('.result-box-body').text();
    $('.form__input1').val(oldTitleVal);
    $('.form__input2').val(oldDescriptionVal);
  })

  $('.form__input1').val('');
  $('.form__input2').val('');
}

function edit() {
  const index = $('.form').attr('data-id');
  const titleValue = $('.form__input1').val();
  const descriptionValue = $('.form__input2').val();

  const box = $(`.result-box:nth-child(${index})`);
  box.find('.result-title').text(titleValue);
  box.find('.result-box-body').text(descriptionValue);

  $('.form').attr('data-type', 'create');
  $('.form').attr('data-id', `null`);
  $('.form__input1').val('');
  $('.form__input2').val('');
}