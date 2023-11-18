document.getElementById('deposit_btn').addEventListener('click', function () {
   const deposit_field = document.getElementById('deposit_field');
   const deposit_string = deposit_field.value;
   const deposit_amount = parseFloat(deposit_string);
   deposit_field.value = '';

   if (isNaN(deposit_amount)) {
      alert('boro vai  tumi ki boka?');
      return;
   }


   // deposit_number
   const deposit_number = document.getElementById('deposit_number');
   const deposit_number_string = deposit_number.innerText;
   const deposit_number_string_float = parseFloat(deposit_number_string);

   const new_deposit_number = deposit_number_string_float + deposit_amount;
   deposit_number.innerText = new_deposit_number;


   // blance_number
   const blance_number = document.getElementById('blance_number');
   const blance_number_string = blance_number.innerText;
   const blance_number_string_float = parseFloat(blance_number_string);

   const total_blance = blance_number_string_float + deposit_amount;
   blance_number.innerText = total_blance;

})