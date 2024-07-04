
  
  function validateForm() {
    const nama = document.forms[ 'massage-form' ][ 'name-input' ].value
    const angka = 8

    if (nama == '') {
        document.getElementById ("error").innerHTML = "Wajib diisi"
        
        return false
    }

    setName (nama)

    return false;
   }