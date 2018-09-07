// listen for changes on each INPUT checkbox tag
checked = []
$( document ).ready(function () {
  $('input:checkbox').change( function () {
    if ($(this).is(':checked')) {
      console.log('checked');
      checked.push($(this).dataset.id);
    } else {
      console.log('unchecked');
    }
  });
console.log(checked);
});
