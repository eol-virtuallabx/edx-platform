$(document).ready(function() {
	var labx_reg_prov = {'01':[{'cod':'011','name':'Iquique'},{'cod':'014','name':'Tamarugal'}],'02':[{'cod':'021','name':'Antofagasta'},{'cod':'022','name':'El Loa'},{'cod':'023','name':'Tocopilla'}],'03':[{'cod':'031','name':'Copiapó'},{'cod':'032','name':'Chañaral'},{'cod':'033','name':'Huasco'}],'04':[{'cod':'041','name':'Elqui'},{'cod':'042','name':'Choapa'},{'cod':'043','name':'Limarí'}],'05':[{'cod':'051','name':'Valparaíso'},{'cod':'052','name':'Isla de Pascua'},{'cod':'053','name':'Los Andes'},{'cod':'054','name':'Petorca'},{'cod':'055','name':'Quillota'},{'cod':'056','name':'San Antonio'},{'cod':'057','name':'San Felipe de Aconcagua'},{'cod':'058','name':'Marga Marga'}],'06':[{'cod':'061','name':'Cachapoal'},{'cod':'062','name':'Cardenal Caro'},{'cod':'063','name':'Colchagua'}],'07':[{'cod':'071','name':'Talca'},{'cod':'072','name':'Cauquenes'},{'cod':'073','name':'Curicó'},{'cod':'074','name':'Linares'}],'08':[{'cod':'081','name':'Concepción'},{'cod':'082','name':'Arauco'},{'cod':'083','name':'Biobío'}],'09':[{'cod':'091','name':'Cautín'},{'cod':'092','name':'Malleco'}],'10':[{'cod':'101','name':'Llanquihue'},{'cod':'102','name':'Chiloé'},{'cod':'103','name':'Osorno'},{'cod':'104','name':'Palena'}],'11':[{'cod':'111','name':'Coihaique'},{'cod':'112','name':'Aisén'},{'cod':'113','name':'Capitán Prat'},{'cod':'114','name':'General Carrera'}],'12':[{'cod':'121','name':'Magallanes'},{'cod':'122','name':'Antártica Chilena'},{'cod':'123','name':'Tierra del Fuego'},{'cod':'124','name':'Última Esperanza'}],'13':[{'cod':'131','name':'Santiago'},{'cod':'132','name':'Cordillera'},{'cod':'133','name':'Chacabuco'},{'cod':'134','name':'Maipo'},{'cod':'135','name':'Melipilla'},{'cod':'136','name':'Talagante'}],'14':[{'cod':'141','name':'Valdivia'},{'cod':'142','name':'Ranco'}],'15':[{'cod':'151','name':'Arica'},{'cod':'152','name':'Parinacota'}],'16':[{'cod':'161','name':'Diguillín'},{'cod':'162','name':'Itata'},{'cod':'163','name':'Punilla'}]};
	var labx_prov_com = {'011':[{'cod':'01101','name':'Iquique'},{'cod':'01107','name':'Alto Hospicio'}],'014':[{'cod':'01401','name':'Pozo Almonte'},{'cod':'01402','name':'Camiña'},{'cod':'01403','name':'Colchane'},{'cod':'01404','name':'Huara'},{'cod':'01405','name':'Pica'}],'021':[{'cod':'02101','name':'Antofagasta'},{'cod':'02102','name':'Mejillones'},{'cod':'02103','name':'Sierra Gorda'},{'cod':'02104','name':'Taltal'}],'022':[{'cod':'02201','name':'Calama'},{'cod':'02202','name':'Ollagüe'},{'cod':'02203','name':'San Pedro de Atacama'}],'023':[{'cod':'02301','name':'Tocopilla'},{'cod':'02302','name':'María Elena'}],'031':[{'cod':'03101','name':'Copiapó'},{'cod':'03102','name':'Caldera'},{'cod':'03103','name':'Tierra Amarilla'}],'032':[{'cod':'03201','name':'Chañaral'},{'cod':'03202','name':'Diego de Almagro'}],'033':[{'cod':'03301','name':'Vallenar'},{'cod':'03302','name':'Alto del Carmen'},{'cod':'03303','name':'Freirina'},{'cod':'03304','name':'Huasco'}],'041':[{'cod':'04101','name':'La Serena'},{'cod':'04102','name':'Coquimbo'},{'cod':'04103','name':'Andacollo'},{'cod':'04104','name':'La Higuera'},{'cod':'04105','name':'Paiguano'},{'cod':'04106','name':'Vicuña'}],'042':[{'cod':'04201','name':'Illapel'},{'cod':'04202','name':'Canela'},{'cod':'04203','name':'Los Vilos'},{'cod':'04204','name':'Salamanca'}],'043':[{'cod':'04301','name':'Ovalle'},{'cod':'04302','name':'Combarbalá'},{'cod':'04303','name':'Monte Patria'},{'cod':'04304','name':'Punitaqui'},{'cod':'04305','name':'Río Hurtado'}],'051':[{'cod':'05101','name':'Valparaíso'},{'cod':'05102','name':'Casablanca'},{'cod':'05103','name':'Concón'},{'cod':'05104','name':'Juan Fernández'},{'cod':'05105','name':'Puchuncaví'},{'cod':'05107','name':'Quintero'},{'cod':'05109','name':'Viña del Mar'}],'052':[{'cod':'05201','name':'Isla de Pascua'}],'053':[{'cod':'05301','name':'Los Andes'},{'cod':'05302','name':'Calle Larga'},{'cod':'05303','name':'Rinconada'},{'cod':'05304','name':'San Esteban'}],'054':[{'cod':'05401','name':'La Ligua'},{'cod':'05402','name':'Cabildo'},{'cod':'05403','name':'Papudo'},{'cod':'05404','name':'Petorca'},{'cod':'05405','name':'Zapallar'}],'055':[{'cod':'05501','name':'Quillota'},{'cod':'05502','name':'Calera'},{'cod':'05503','name':'Hijuelas'},{'cod':'05504','name':'La Cruz'},{'cod':'05506','name':'Nogales'}],'056':[{'cod':'05601','name':'San Antonio'},{'cod':'05602','name':'Algarrobo'},{'cod':'05603','name':'Cartagena'},{'cod':'05604','name':'El Quisco'},{'cod':'05605','name':'El Tabo'},{'cod':'05606','name':'Santo Domingo'}],'057':[{'cod':'05701','name':'San Felipe'},{'cod':'05702','name':'Catemu'},{'cod':'05703','name':'Llaillay'},{'cod':'05704','name':'Panquehue'},{'cod':'05705','name':'Putaendo'},{'cod':'05706','name':'Santa María'}],'058':[{'cod':'05801','name':'Quilpué'},{'cod':'05802','name':'Limache'},{'cod':'05803','name':'Olmué'},{'cod':'05804','name':'Villa Alemana'}],'061':[{'cod':'06101','name':'Rancagua'},{'cod':'06102','name':'Codegua'},{'cod':'06103','name':'Coinco'},{'cod':'06104','name':'Coltauco'},{'cod':'06105','name':'Doñihue'},{'cod':'06106','name':'Graneros'},{'cod':'06107','name':'Las Cabras'},{'cod':'06108','name':'Machalí'},{'cod':'06109','name':'Malloa'},{'cod':'06110','name':'Mostazal'},{'cod':'06111','name':'Olivar'},{'cod':'06112','name':'Peumo'},{'cod':'06113','name':'Pichidegua'},{'cod':'06114','name':'Quinta de Tilcoco'},{'cod':'06115','name':'Rengo'},{'cod':'06116','name':'Requínoa'},{'cod':'06117','name':'San Vicente'}],'062':[{'cod':'06201','name':'Pichilemu'},{'cod':'06202','name':'La Estrella'},{'cod':'06203','name':'Litueche'},{'cod':'06204','name':'Marchihue'},{'cod':'06205','name':'Navidad'},{'cod':'06206','name':'Paredones'}],'063':[{'cod':'06301','name':'San Fernando'},{'cod':'06302','name':'Chépica'},{'cod':'06303','name':'Chimbarongo'},{'cod':'06304','name':'Lolol'},{'cod':'06305','name':'Nancagua'},{'cod':'06306','name':'Palmilla'},{'cod':'06307','name':'Peralillo'},{'cod':'06308','name':'Placilla'},{'cod':'06309','name':'Pumanque'},{'cod':'06310','name':'Santa Cruz'}],'071':[{'cod':'07101','name':'Talca'},{'cod':'07102','name':'Constitución'},{'cod':'07103','name':'Curepto'},{'cod':'07104','name':'Empedrado'},{'cod':'07105','name':'Maule'},{'cod':'07106','name':'Pelarco'},{'cod':'07107','name':'Pencahue'},{'cod':'07108','name':'Río Claro'},{'cod':'07109','name':'San Clemente'},{'cod':'07110','name':'San Rafael'}],'072':[{'cod':'07201','name':'Cauquenes'},{'cod':'07202','name':'Chanco'},{'cod':'07203','name':'Pelluhue'}],'073':[{'cod':'07301','name':'Curicó'},{'cod':'07302','name':'Hualañé'},{'cod':'07303','name':'Licantén'},{'cod':'07304','name':'Molina'},{'cod':'07305','name':'Rauco'},{'cod':'07306','name':'Romeral'},{'cod':'07307','name':'Sagrada Familia'},{'cod':'07308','name':'Teno'},{'cod':'07309','name':'Vichuquén'}],'074':[{'cod':'07401','name':'Linares'},{'cod':'07402','name':'Colbún'},{'cod':'07403','name':'Longaví'},{'cod':'07404','name':'Parral'},{'cod':'07405','name':'Retiro'},{'cod':'07406','name':'San Javier'},{'cod':'07407','name':'Villa Alegre'},{'cod':'07408','name':'Yerbas Buenas'}],'081':[{'cod':'08101','name':'Concepción'},{'cod':'08102','name':'Coronel'},{'cod':'08103','name':'Chiguayante'},{'cod':'08104','name':'Florida'},{'cod':'08105','name':'Hualqui'},{'cod':'08106','name':'Lota'},{'cod':'08107','name':'Penco'},{'cod':'08108','name':'San Pedro de la Paz'},{'cod':'08109','name':'Santa Juana'},{'cod':'08110','name':'Talcahuano'},{'cod':'08111','name':'Tomé'},{'cod':'08112','name':'Hualpén'}],'082':[{'cod':'08201','name':'Lebu'},{'cod':'08202','name':'Arauco'},{'cod':'08203','name':'Cañete'},{'cod':'08204','name':'Contulmo'},{'cod':'08205','name':'Curanilahue'},{'cod':'08206','name':'Los Alamos'},{'cod':'08207','name':'Tirúa'}],'083':[{'cod':'08301','name':'Los Angeles'},{'cod':'08302','name':'Antuco'},{'cod':'08303','name':'Cabrero'},{'cod':'08304','name':'Laja'},{'cod':'08305','name':'Mulchén'},{'cod':'08306','name':'Nacimiento'},{'cod':'08307','name':'Negrete'},{'cod':'08308','name':'Quilaco'},{'cod':'08309','name':'Quilleco'},{'cod':'08310','name':'San Rosendo'},{'cod':'08311','name':'Santa Bárbara'},{'cod':'08312','name':'Tucapel'},{'cod':'08313','name':'Yumbel'},{'cod':'08314','name':'Alto Biobío'}],'091':[{'cod':'09101','name':'Temuco'},{'cod':'09102','name':'Carahue'},{'cod':'09103','name':'Cunco'},{'cod':'09104','name':'Curarrehue'},{'cod':'09105','name':'Freire'},{'cod':'09106','name':'Galvarino'},{'cod':'09107','name':'Gorbea'},{'cod':'09108','name':'Lautaro'},{'cod':'09109','name':'Loncoche'},{'cod':'09110','name':'Melipeuco'},{'cod':'09111','name':'Nueva Imperial'},{'cod':'09112','name':'Padre Las Casas'},{'cod':'09113','name':'Perquenco'},{'cod':'09114','name':'Pitrufquén'},{'cod':'09115','name':'Pucón'},{'cod':'09116','name':'Saavedra'},{'cod':'09117','name':'Teodoro Schmidt'},{'cod':'09118','name':'Toltén'},{'cod':'09119','name':'Vilcún'},{'cod':'09120','name':'Villarrica'},{'cod':'09121','name':'Cholchol'}],'092':[{'cod':'09201','name':'Angol'},{'cod':'09202','name':'Collipulli'},{'cod':'09203','name':'Curacautín'},{'cod':'09204','name':'Ercilla'},{'cod':'09205','name':'Lonquimay'},{'cod':'09206','name':'Los Sauces'},{'cod':'09207','name':'Lumaco'},{'cod':'09208','name':'Purén'},{'cod':'09209','name':'Renaico'},{'cod':'09210','name':'Traiguén'},{'cod':'09211','name':'Victoria'}],'101':[{'cod':'10101','name':'Puerto Montt'},{'cod':'10102','name':'Calbuco'},{'cod':'10103','name':'Cochamó'},{'cod':'10104','name':'Fresia'},{'cod':'10105','name':'Frutillar'},{'cod':'10106','name':'Los Muermos'},{'cod':'10107','name':'Llanquihue'},{'cod':'10108','name':'Maullín'},{'cod':'10109','name':'Puerto Varas'}],'102':[{'cod':'10201','name':'Castro'},{'cod':'10202','name':'Ancud'},{'cod':'10203','name':'Chonchi'},{'cod':'10204','name':'Curaco de Vélez'},{'cod':'10205','name':'Dalcahue'},{'cod':'10206','name':'Puqueldón'},{'cod':'10207','name':'Queilén'},{'cod':'10208','name':'Quellón'},{'cod':'10209','name':'Quemchi'},{'cod':'10210','name':'Quinchao'}],'103':[{'cod':'10301','name':'Osorno'},{'cod':'10302','name':'Puerto Octay'},{'cod':'10303','name':'Purranque'},{'cod':'10304','name':'Puyehue'},{'cod':'10305','name':'Río Negro'},{'cod':'10306','name':'San Juan de la Costa'},{'cod':'10307','name':'San Pablo'}],'104':[{'cod':'10401','name':'Chaitén'},{'cod':'10402','name':'Futaleufú'},{'cod':'10403','name':'Hualaihué'},{'cod':'10404','name':'Palena'}],'111':[{'cod':'11101','name':'Coihaique'},{'cod':'11102','name':'Lago Verde'}],'112':[{'cod':'11201','name':'Aisén'},{'cod':'11202','name':'Cisnes'},{'cod':'11203','name':'Guaitecas'}],'113':[{'cod':'11301','name':'Cochrane'},{'cod':'11302','name':'O\'Higgins'},{'cod':'11303','name':'Tortel'}],'114':[{'cod':'11401','name':'Chile Chico'},{'cod':'11402','name':'Río Ibáñez'}],'121':[{'cod':'12101','name':'Punta Arenas'},{'cod':'12102','name':'Laguna Blanca'},{'cod':'12103','name':'Río Verde'},{'cod':'12104','name':'San Gregorio'}],'122':[{'cod':'12201','name':'Cabo de Hornos'},{'cod':'12202','name':'Antártica'}],'123':[{'cod':'12301','name':'Porvenir'},{'cod':'12302','name':'Primavera'},{'cod':'12303','name':'Timaukel'}],'124':[{'cod':'12401','name':'Natales'},{'cod':'12402','name':'Torres del Paine'}],'131':[{'cod':'13101','name':'Santiago'},{'cod':'13102','name':'Cerrillos'},{'cod':'13103','name':'Cerro Navia'},{'cod':'13104','name':'Conchalí'},{'cod':'13105','name':'El Bosque'},{'cod':'13106','name':'Estación Central'},{'cod':'13107','name':'Huechuraba'},{'cod':'13108','name':'Independencia'},{'cod':'13109','name':'La Cisterna'},{'cod':'13110','name':'La Florida'},{'cod':'13111','name':'La Granja'},{'cod':'13112','name':'La Pintana'},{'cod':'13113','name':'La Reina'},{'cod':'13114','name':'Las Condes'},{'cod':'13115','name':'Lo Barnechea'},{'cod':'13116','name':'Lo Espejo'},{'cod':'13117','name':'Lo Prado'},{'cod':'13118','name':'Macul'},{'cod':'13119','name':'Maipú'},{'cod':'13120','name':'Ñuñoa'},{'cod':'13121','name':'Pedro Aguirre Cerda'},{'cod':'13122','name':'Peñalolén'},{'cod':'13123','name':'Providencia'},{'cod':'13124','name':'Pudahuel'},{'cod':'13125','name':'Quilicura'},{'cod':'13126','name':'Quinta Normal'},{'cod':'13127','name':'Recoleta'},{'cod':'13128','name':'Renca'},{'cod':'13129','name':'San Joaquín'},{'cod':'13130','name':'San Miguel'},{'cod':'13131','name':'San Ramón'},{'cod':'13132','name':'Vitacura'}],'132':[{'cod':'13201','name':'Puente Alto'},{'cod':'13202','name':'Pirque'},{'cod':'13203','name':'San José de Maipo'}],'133':[{'cod':'13301','name':'Colina'},{'cod':'13302','name':'Lampa'},{'cod':'13303','name':'Tiltil'}],'134':[{'cod':'13401','name':'San Bernardo'},{'cod':'13402','name':'Buin'},{'cod':'13403','name':'Calera de Tango'},{'cod':'13404','name':'Paine'}],'135':[{'cod':'13501','name':'Melipilla'},{'cod':'13502','name':'Alhué'},{'cod':'13503','name':'Curacaví'},{'cod':'13504','name':'María Pinto'},{'cod':'13505','name':'San Pedro'}],'136':[{'cod':'13601','name':'Talagante'},{'cod':'13602','name':'El Monte'},{'cod':'13603','name':'Isla de Maipo'},{'cod':'13604','name':'Padre Hurtado'},{'cod':'13605','name':'Peñaflor'}],'141':[{'cod':'14101','name':'Valdivia'},{'cod':'14102','name':'Corral'},{'cod':'14103','name':'Lanco'},{'cod':'14104','name':'Los Lagos'},{'cod':'14105','name':'Máfil'},{'cod':'14106','name':'Mariquina'},{'cod':'14107','name':'Paillaco'},{'cod':'14108','name':'Panguipulli'}],'142':[{'cod':'14201','name':'La Unión'},{'cod':'14202','name':'Futrono'},{'cod':'14203','name':'Lago Ranco'},{'cod':'14204','name':'Río Bueno'}],'151':[{'cod':'15101','name':'Arica'},{'cod':'15102','name':'Camarones'}],'152':[{'cod':'15201','name':'Putre'},{'cod':'15202','name':'General Lagos'}],'161':[{'cod':'16101','name':'Chillán'},{'cod':'16102','name':'Bulnes'},{'cod':'16103','name':'Chillán Viejo'},{'cod':'16104','name':'El Carmen'},{'cod':'16105','name':'Pemuco'},{'cod':'16106','name':'Pinto'},{'cod':'16107','name':'Quillón'},{'cod':'16108','name':'San Ignacio'},{'cod':'16109','name':'Yungay'}],'162':[{'cod':'16201','name':'Quirihue'},{'cod':'16202','name':'Cobquecura'},{'cod':'16203','name':'Coelemu'},{'cod':'16204','name':'Ninhue'},{'cod':'16205','name':'Portezuelo'},{'cod':'16206','name':'Ranquil'},{'cod':'16207','name':'Treguaco'}],'163':[{'cod':'16301','name':'San Carlos'},{'cod':'16302','name':'Coihueco'},{'cod':'16303','name':'Ñiquén'},{'cod':'16304','name':'San Fabián'},{'cod':'16305','name':'San Nicolás'}]};
	function labx_update_name(){
		var first_name = $('#register-labx_firstname').val().trim();
		var last_name = $('#register-labx_lastname').val().trim();
		$('#register-name').val(first_name + ' ' + last_name);
	}
	function labx_on_change_labx_rut(event){
                event.stopImmediatePropagation();
             	$('#register-labx_rut').val($('#register-labx_rut').val().trim());
		var rut  = $('#register-labx_rut').val();
		if (rut !== null && typeof rut === 'string' && rut.length > 6 && (/^([\d]{1,2})(\.){0,1}([\d]{3})([.]{0,1})([\d]){3}([-]){0,1}([\dkK]){1}$/gm).test(rut) && validate_rut(format_rut(rut))){
			$('#register-labx_rut-validation-error-msg').text('');
                        $('#register-labx_rut-validation-error-msg').removeClass('error_labx_invalid');
                        $('#register-labx_rut').removeClass('error labx_error');
                	$('.text-labx_rut label').removeClass('error labx_error');
			$('#register-labx_rut').val(format_rut($('#register-labx_rut').val()));
		}
		else{
                        $('#register-labx_rute-validation-error-msg').text('');
                        $('#register-labx_rut-validation-error-msg').addClass('error_labx_invalid');
                        $('#register-labx_rut').addClass('error labx_error');
                        $('.text-labx_rut label').addClass('error labx_error');
		}
        }
	function labx_check_update_birthdate(event){
		event.stopImmediatePropagation();
		$('#register-labx_birth_date').val($('#register-labx_birth_date').val().trim());
		var  new_date = $('#register-labx_birth_date').val();
		if (new_date.trim() === ''){
			$('#register-labx_birth_date').val('');
			$('#register-labx_birth_date-validation-error-msg').text('Por favor ingresa Fecha Nacimiento.');
            $('#register-labx_birth_date').addClass('error labx_error');
            $('.text-labx_birth_date label').addClass('error labx_error');
			$('#register-labx_birth_date-validation-error-msg').removeClass('error_labx_invalid');
			return;
		}
		var r = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;
	  	if (!r.test(new_date)){
			 $('#register-year_of_birth').val('');
			 $('#register-labx_birth_date-validation-error-msg').text('');
			 $('#register-labx_birth_date-validation-error-msg').addClass('error_labx_invalid');
			 $('#register-labx_birth_date').addClass('error labx_error');
			 $('.text-labx_birth_date label').addClass('error labx_error');
	  	}
		else{
	  		var year = new_date.substring(6);
		 	var year_int = parseInt(year,10);
			var current_year = new Date().getFullYear();
			if(year_int >= 1900 && year_int <= current_year){
				$('#register-year_of_birth').val(year);
				$('#register-labx_birth_date-validation-error-msg').text('');
				$('#register-labx_birth_date-validation-error-msg').removeClass('error_labx_invalid');
				$('#register-labx_birth_date').removeClass('error labx_error');
                $('.text-labx_birth_date label').removeClass('error labx_error');
			}
			else{
	 			$('#register-year_of_birth').val('');
				$('#register-labx_birth_date-validation-error-msg').text('');
                $('#register-labx_birth_date-validation-error-msg').addClass('error_labx_invalid');
				$('#register-labx_birth_date').addClass('error labx_error');
				$('.text-labx_birth_date label').addClass('error labx_error');
			}
		}
	}
	function labx_on_change_region_part(){
		var new_region = $('#register-labx_part_region').val();
		if(new_region === ''){
			$('#register-form div.form-field.select-labx_part_provincia').removeClass('labx_show_field');
			$('#register-form div.form-field.select-labx_part_comuna').removeClass('labx_show_field');
			$('#register-labx_part_provincia').val('');
			$('#register-labx_part_comuna').val('');
		}
		else{
			$('#register-form div.form-field.select-labx_part_comuna').removeClass('labx_show_field');
			$('#register-labx_part_comuna').val('');
			$('select#register-labx_part_provincia').children('option:not(:first)').remove();
			$.each(labx_reg_prov[new_region], function(index) {
			 	$('select#register-labx_part_provincia')
			         .append($("<option></option>")
			         .attr("value",labx_reg_prov[new_region][index]['cod'])
			         .text(labx_reg_prov[new_region][index]['name']));
			});
			$('#register-labx_part_provincia').val('');
			$('#register-form div.form-field.select-labx_part_provincia').addClass('labx_show_field');
		}
	}
	function labx_on_change_region_lab(){
		var new_region = $('#register-labx_lab_region').val();
		if(new_region === ''){
			$('#register-form div.form-field.select-labx_lab_provincia').removeClass('labx_show_field');
			$('#register-form div.form-field.select-labx_lab_comuna').removeClass('labx_show_field');
			$('#register-labx_lab_provincia').val('');
			$('#register-labx_lab_comuna').val('');
		}
		else{
			$('#register-form div.form-field.select-labx_lab_comuna').removeClass('labx_show_field');
			$('#register-labx_lab_comuna').val('');
			$('select#register-labx_lab_provincia').children('option:not(:first)').remove();
			$.each(labx_reg_prov[new_region], function(index) {
				$('select#register-labx_lab_provincia')
					.append($("<option></option>")
						.attr("value",labx_reg_prov[new_region][index]['cod'])
						.text(labx_reg_prov[new_region][index]['name']));
			});
			$('#register-labx_lab_provincia').val('');
			$('#register-form div.form-field.select-labx_lab_provincia').addClass('labx_show_field');
		}
	}
	function labx_on_change_provincia_part(){
		var new_provincia = $('#register-labx_part_provincia').val();
		if(new_provincia === ''){
			$('#register-form div.form-field.select-labx_part_comuna').removeClass('labx_show_field');
			$('#register-labx_part_comuna').val('');
		}
		else{
			$('select#register-labx_part_comuna').children('option:not(:first)').remove();
			$.each(labx_prov_com[new_provincia], function(index) {
			 	$('select#register-labx_part_comuna')
			         .append($("<option></option>")
			         .attr("value",labx_prov_com[new_provincia][index]['cod'])
			         .text(labx_prov_com[new_provincia][index]['name']));
			});
			$('#register-labx_part_comuna').val('');
			$('#register-form div.form-field.select-labx_part_comuna').addClass('labx_show_field');
		}
	}
	function labx_on_change_provincia_lab(){
		var new_provincia = $('#register-labx_lab_provincia').val();
		if(new_provincia === ''){
			$('#register-form div.form-field.select-labx_lab_comuna').removeClass('labx_show_field');
			$('#register-labx_lab_comuna').val('');
		}
		else{
			$('select#register-labx_lab_comuna').children('option:not(:first)').remove();
			$.each(labx_prov_com[new_provincia], function(index) {
				$('select#register-labx_lab_comuna')
					.append($("<option></option>")
					.attr("value",labx_prov_com[new_provincia][index]['cod'])
					.text(labx_prov_com[new_provincia][index]['name']));
			});
			$('#register-labx_lab_comuna').val('');
			$('#register-form div.form-field.select-labx_lab_comuna').addClass('labx_show_field');
		}
	}
	function labx_check_caja_los_andes(token){
		$('#register-labx_rut').val($('#register-labx_rut').val().trim());
                var rut  = $('#register-labx_rut').val();
		if (rut !== null && typeof rut === 'string' && rut.length > 6 && (/^([\d]{1,2})(\.){0,1}([\d]{3})([.]{0,1})([\d]){3}([-]){0,1}([\dkK]){1}$/gm).test(rut) && validate_rut(format_rut(rut))){
			rut = clean_rut(rut).toLowerCase();
			$('#register-labx_rut').prop('disabled',true);
			$('#div-btn-check-caja').prop('disabled',true);
			$('#div-caja-spinner').addClass('labx_show_field');
			$('#div-result-check-caja').removeClass('labx_show_alert');
			$('#div-result-check-caja').removeClass('labx_show_field');
			$.ajax({
				headers:{'x-recaptcha-resp':token},
				url: '/labx_api/v1/validate_rut_caja/'+rut,
				type:'GET',
				success: function(resp) {
					$('#div-caja-spinner').removeClass('labx_show_field');
					if(resp.result){
						$('#register-form div.form-field.text-labx_firstname').addClass('labx_show_field');
			                        $('#register-form div.form-field.text-labx_lastname').addClass('labx_show_field');
                        			$('#register-form div.form-field.text-labx_birth_date').addClass('labx_show_field');
                        			$('#register-form div.form-field.select-labx_gender').addClass('labx_show_field');
                        			$('#register-form div.form-field.text-labx_phone').addClass('labx_show_field');
                        			$('#register-form div.form-field.select-labx_country_nac').addClass('labx_show_field');
                        			$('#register-form div.form-field.text-labx_part_address').addClass('labx_show_field');
                        			$('#register-form div.form-field.select-labx_part_region').addClass('labx_show_field');
                        			$('#register-form div.form-field.text-labx_lab_address').addClass('labx_show_field');
                        			$('#register-form div.form-field.select-labx_lab_region').addClass('labx_show_field');
                        			$('#register-form div.form-field.select-labx_work').addClass('labx_show_field');
                        			$('#register-form div.form-field.select-labx_educ_level').addClass('labx_show_field');
                        			$('#register-form div.form-field.text-labx_lab_lugar').addClass('labx_show_field');
                        			$('#register-form div.form-field.select-labx_lab_type').addClass('labx_show_field');
                        			$('#register-form div.form-field.select-labx_lab_rubro').addClass('labx_show_field');
                        			$('#register-form div.form-field.text-labx_lab_cargo').addClass('labx_show_field');
                        			$('.action.action-primary.action-update.js-register.register-button').addClass('labx_show_field');

						$('#div-result-check-caja').html("El RUT ingresado corresponde a un afiliado de la Caja Los Andes, puede continuar el registro en la plataforma.");
						$('#div-result-check-caja').addClass('labx_show_field');
						$('#div-btn-check-caja').removeClass('labx_show_field');
					}
					else{
						$('#register-labx_rut').prop('disabled',false);
						$('#div-btn-check-caja').prop('disabled',false);
						$('#div-result-check-caja').html("El RUT ingresado no corresponde a un afiliado de la Caja Los Andes, no es posible continuar el registro en la plataforma.");
                                                $('#div-result-check-caja').addClass('labx_show_field');
					}
				},
				error: function() {
					$('#register-labx_rut').prop('disabled',false);
					$('#div-btn-check-caja').prop('disabled',false);
					$('#div-caja-spinner').removeClass('labx_show_field');

					$('#div-result-check-caja').html("Ha ocurrido un error en la conexión, por favor intente más tarde");
                                        $('#div-result-check-caja').addClass('labx_show_field');
					$('#div-result-check-caja').addClass('labx_show_alert');
    				}
			});
		}

	}
	function labx_precheck_caja_los_andes(e){
                e.preventDefault();
                $('#register-labx_rut').val($('#register-labx_rut').val().trim());
                var rut  = $('#register-labx_rut').val();
                if (rut !== null && typeof rut === 'string' && rut.length > 6 && (/^([\d]{1,2})(\.){0,1}([\d]{3})([.]{0,1})([\d]){3}([-]){0,1}([\dkK]){1}$/gm).test(rut) && validate_rut(format_rut(rut))){
                       grecaptcha.execute();
                }
        }
	//$('#login-and-registration-container').on('change','#register-labx_firstname',labx_update_name);
	//$('#login-and-registration-container').on('change','#register-labx_lastname',labx_update_name);
	//$('#login-and-registration-container').on('change','#register-labx_birth_date',labx_check_update_birthdate);

	//$('#login-and-registration-container').on('change','#register-labx_part_region',labx_on_change_region_part);
	//$('#login-and-registration-container').on('change','#register-labx_part_provincia',labx_on_change_provincia_part);

	//$('#login-and-registration-container').on('change','#register-labx_lab_region',labx_on_change_region_lab);
	//$('#login-and-registration-container').on('change','#register-labx_lab_provincia',labx_on_change_provincia_lab);
	var waitForEl = function(selector, callback) {
                if ($(selector).length) {
                        callback();
                } else {
                        setTimeout(function() {
                        	waitForEl(selector, callback);
                        }, 100);
                }
        };
	waitForEl('#register-labx_firstname',function(){
                $('#login-and-registration-container').on('change','#register-labx_firstname',labx_update_name);
        });
	waitForEl('#register-labx_lastname',function(){
		$('#login-and-registration-container').on('change','#register-labx_lastname',labx_update_name);
	});
	waitForEl('#register-labx_birth_date',function(){
		$('#login-and-registration-container').on('change','#register-labx_birth_date',labx_check_update_birthdate);
        });
	waitForEl('#register-labx_part_region',function(){
		$('#login-and-registration-container').on('change','#register-labx_part_region',labx_on_change_region_part);
	});
	waitForEl('#register-labx_part_provincia',function(){
		$('#login-and-registration-container').on('change','#register-labx_part_provincia',labx_on_change_provincia_part);
	});
	waitForEl('#register-labx_lab_region',function(){
		$('#login-and-registration-container').on('change','#register-labx_lab_region',labx_on_change_region_lab);
	});
	waitForEl('#register-labx_lab_provincia',function(){
		$('#login-and-registration-container').on('change','#register-labx_lab_provincia',labx_on_change_provincia_lab);
	});
	function clean_rut (rut) {
  		return typeof rut === 'string'? rut.replace(/^0+|[^0-9kK]+/g, '').toUpperCase(): '';
	}

	function validate_rut (rut) {
  		if (typeof rut !== 'string') {
    			return false;
  		}
  		if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rut)) {
    			return false;
  		}

  		rut = clean_rut(rut);

  		var t = parseInt(rut.slice(0, -1), 10);
  		var m = 0;
  		var s = 1;

  		while (t > 0) {
    			s = (s + (t % 10) * (9 - m++ % 6)) % 11;
    			t = Math.floor(t / 10);
  		}

  		var v = s > 0 ? '' + (s - 1) : 'K';
  		return v === rut.slice(-1);
	}

	function format_rut (rut) {
  		rut = clean_rut(rut);
  		var result = rut.slice(-4, -1) + '-' + rut.substr(rut.length - 1);
  		for (var i = 4; i < rut.length; i += 3) {
    			result = rut.slice(-3 - i, -i) + '.' + result;
  		}

  		return result;
	}
        var selector_rut  ='#register-form div.form-field.text-labx_rut';
	var rut_button_html = '<div id="div-btn-check-caja"><button id="btn-check-caja">Verificar</button></div>';
	var mess_caja_html  = '<div id="div-message-caja">Para registrarte en esta plataforma debes ser afiliado a Caja Los Andes, por favor ingresa tu RUT, y luego presiona verificar para continuar.</div>';
	waitForEl('#register-country',function(){
		$('#register-country').val('CL');
	});
	waitForEl(selector_rut,function(){
		$(selector_rut).before(mess_caja_html);
        	$(selector_rut).after(rut_button_html);
		$('#login-and-registration-container').on('change','#register-labx_rut',labx_on_change_labx_rut);
		$('#div-btn-check-caja').addClass('labx_show_field');
		$('#btn-check-caja').click(labx_precheck_caja_los_andes);
		$('#div-btn-check-caja').after('<div id="div-result-check-caja"></div>');
		$('#div-result-check-caja').after('<div id="div-caja-spinner"><img src="/static/images/spinner.gif">Obteniendo información...</div>');
		$('#div-caja-spinner').after('<div id="caja-recaptcha"></div>');
		grecaptcha.render("caja-recaptcha",{"sitekey":"6LcGKsEaAAAAAED-uPQbm9ZQse8Taw291I3k0Nhr","callback":labx_check_caja_los_andes,"size":"invisible"});
	});
});

