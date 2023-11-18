document.getElementById('withdrow_btn').addEventListener('click', function () {

   // withdrow_field
   const withdrow_field = document.getElementById('withdrow_field');
   const withdrow_field_string = withdrow_field.value
   const withdrow_field_float = parseFloat(withdrow_field_string);

   withdrow_field.value = '';
   if (isNaN(withdrow_field_float)) {
      alert('vai leave some value');
      return;
   }

   // withdrow_number
   const withdrow_number = document.getElementById('withdrow_number');
   const withdrow_number_string = withdrow_number.innerText;
   const withdrow_number_float = parseFloat(withdrow_number_string);

   const add_withdrow_number = withdrow_number_float + withdrow_field_float;
   withdrow_number.innerText = add_withdrow_number;

   

})