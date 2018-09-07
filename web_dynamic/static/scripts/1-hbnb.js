// listen for changes on each INPUT checkbox tag
$( document ).ready(function () {
  let checkedIds = [];
  $('input:checkbox').live('change', (function () {
    if ($(this).is(':checked')) {
      console.log('check one');
      checkedIds.push($(this).attr('data-id'));
    } else {
      checkedIds.pop$(this).attr('data-id');
    };
  });
});
console.log(checkedIds);
