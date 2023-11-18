document.getElementById('deposit_btn').addEventListener('click', function () {
   const deposit_field = document.getElementById('deposit_field');
   const deposit_string = deposit_field.value;
   const deposit_amount = parseFloat(deposit_string);

   if (isNaN(deposit_amount)) {
      alert('please fill the field');
      return;
   }
   deposit_field.value = '';
})