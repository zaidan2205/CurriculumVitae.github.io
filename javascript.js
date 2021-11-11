function cekformulir() {
	if (document.formulir.nama.value=="") {
		alert ("Nama harus diisi");
		return false;
	}
	else if (document.formulir.email.value=="") {
		alert ("Email harus diisi");
		return false;
	}
	else if (document.formulir.telp.value=="") {
		alert ("Nomor telphone harus diisi");
		return false;
	}
	else if (document.formulir.password.value=="") {
		alert ("Password harus diisi");
		return false;
	}
	else {
		return true;
	}
}


    function nextfield(ID)
    {
      if (event.keyCode == 13)
      document.getElementById(ID).focus();
    } 
