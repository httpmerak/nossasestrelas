$(document).ready(function () {
	if (typeof avisoConfig == 'undefined' || avisoConfig == 'false') {
		$(window).on('load', function () {
			$('#aviso-config').modal('show');
		});
		$('body').append('<div id="aviso-config" class="modal hide fade"><div class="modal-header"><a class="close" data-dismiss="modal">&times;</a><h3>Quase l&aacute;!</h3></div><div class="modal-body"><p>Voc&ecirc; j&aacute; fez a instala&ccedil;&atilde;o do seu tema, mas ainda falta mais uma etapa!</p><p>Para que seu tema funcione corretamente e esse pop up suma de vez, &eacute; necess&aacute;rio instalar o <strong><a href="https://groomb.com.br/docs/revolution-store-plus-loja-integrada/configuracao-inicial/" target="_blank" rel="noopener">arquivo de configura&ccedil;&atilde;o inicial</a></strong> da loja.</p><p><strong><a href="https://groomb.com.br/docs/revolution-store-plus-loja-integrada/configuracao-inicial/" target="_blank" rel="noopener">Clique aqui</a></strong>&nbsp;e depois selecione o seu tema para acessar o passo-a-passo de como instalar, &eacute; muito simples!</p><p>-----------------------------------------------</p><p><strong>Para que serve o <a href="https://groomb.com.br/docs/revolution-store-plus-loja-integrada/configuracao-inicial/" target="_blank" rel="noopener">arquivo de configura&ccedil;&atilde;o inicial</a>?</strong></p><p>A loja integrada n&atilde;o possui uma forma de se fazer modifica&ccedil;&otilde;es simples ou mais complexas, para isso criamos esse aquivo JS, onde voc&ecirc; consegue ativar/modificar diversas fun&ccedil;&otilde;es da sua loja sem precisar saber nada de c&oacute;digo, de forma f&aacute;cil e intuitiva com ajuda da <strong><a href="https://groomb.com.br/docs/revolution-store-plus-loja-integrada/" target="_blank" rel="noopener">documenta&ccedil;&atilde;o completa do tema</a></strong>.</p><p>-----------------------------------------------</p><p><strong>O que &eacute; a <a href="https://groomb.com.br/docs/revolution-store-plus-loja-integrada/" target="_blank" rel="noopener">documenta&ccedil;&atilde;o do tema</a>?</strong></p><p>&Eacute; o guia completo de todo o seu tema. L&aacute; voc&ecirc; encontrar&aacute; v&aacute;rias imagens e tudo bem explicado sobre como ativar/modificar diversas fun&ccedil;&otilde;es do seu tema.&nbsp;</p><p>-----------------------------------------------</p><p>Apesar de tudo ser muito intuitivo, caso voc&ecirc; ainda tenha alguma dificuldade ou alguma d&uacute;vida relativa ao tema, entre em contato com nosso suporte. Possuimos o melhor suporte da loja de temas e estmos prontos para lhe auxiliar!</p><p><span style="color: #008000;"><strong>Whatsapp: (11) 97345-2327</strong></span><br/> <span style="color: #333399;"><strong>E-mail: suporte@groomb.com.br</strong></span></p></div></div>');
	}
});
$(document).ready(function () {
	$('head').prepend('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">');
	var corBranco = '#fff';
	// Obter cor principal
	if ($('.cor-principal').length) {
		var corPrimaria1 = $(".cor-principal")[0];
		var corPrimaria2 = document.defaultView.getComputedStyle(corPrimaria1, null);
		var corPrimaria = corPrimaria2["color"];
	}
	// Obter cor secundaria
	if ($('.cor-secundaria').length) {
		var corSecundaria1 = $(".cor-secundaria")[0];
		var corSecundaria2 = document.defaultView.getComputedStyle(corSecundaria1, null);
		var corSecundaria = corSecundaria2["color"];
	}
	// Obter cor botoes
	if ($('.botao.principal.botao-comprar, .botao.principal.grande, .acoes-produto-responsiva .tag-comprar').length) {
		var corBotoesBg1 = $(".botao.principal.botao-comprar, .botao.principal.grande, .acoes-produto-responsiva .tag-comprar")[0];
		var corBotoesBg2 = document.defaultView.getComputedStyle(corBotoesBg1, null);
		var corBotoesBg = corBotoesBg2["background-color"];
	}
	$('.botao.principal').css('background-color', '' + corBotoesBg + '');
	$('.botao.fundo-secundario').removeClass('fundo-secundario');
	$(".botao.principal").each(function () {
		if (!$(this).hasClass('pequeno')) {
			$(this).addClass('grande');
		}
	});
	$('.menu.superior .categoria-paginas .titulo').text('' + tituloPaginas + '');
	jQuery.expr[':'].contains = function (a, i, m) {
		return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
	};
	if (descricaoCurta === true) {
		if (posicaoDescricao === "posicao1") {
			$('.info-principal-produto').after($('.descricao-short'));
		}
		else if (posicaoDescricao === "posicao2") {
			$('.pagina-produto .principal .atributos').after($('.descricao-short'));
			$(".descricao-short").css('margin-bottom', '15px');
		}
		$('#descricao').after($('.informacoes-importantes'));
	}
	else {
		$('.descricao-short').remove();
	}
	$('.row-fluid').find('#descricao').closest('.row-fluid').addClass('descricao-new');
	$(".descricao-new").wrapInner("<div class='box-descricao'></div>");
	$('.descricao-new').prepend('<div class="descricao-titulo padrao-desc"><i class="' + iconeDescricao + '"></i><strong>' + tituloDescricao + '</strong></div>');
	$('.row-fluid').find('.aproveite-tambem').closest('.row-fluid').addClass('aproveite-new');
	$('.aproveite-tambem>.titulo').addClass('padrao-desc');
	$('.aproveite-tambem>.titulo').text('' + tituloAproveite + '');
	if (ativaIconeAproveite === true) {
		$('.aproveite-tambem h4').prepend('<i class="' + iconeAproveite + '"></i>');
	}
	if (cupomNewsletter === true) {
		$('.newsletter-confirmacao>span').remove();
		$('.newsletter-confirmacao').append('<span class="cupom-newsletter">Obrigado! Seu cupom: <span class="codigo-cupom">' + codigoCupom + '</span></span');
	}
	// Tabela de Medidas/////////////
	$('body').prepend('<div class="modal fade" id="tabela-medidas" tabindex="-1" role="dialog" aria-labelledby="nome-tabela"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4 class="modal-title" id="nome-tabela"></h4></div><div class="modal-body"></div></div></div></div>');
	if (tabelaMedidas1 === true) {
		if ($('.info-principal-produto .nome-produto:contains("' + palavraChaveTabela1 + '")').length > 0) {
			$("#tabela-medidas .modal-body").append('<img src="' + imgTabela1 + '">');
			$(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas"><use xlink:href="#fita-medidas"></use></svg> ' + textoBotao1 + '</button>');
			$('#tabela-medidas .modal-title').text('' + textoBotao1 + '');
		}
	}
	if (tabelaMedidas2 === true) {
		if ($('.info-principal-produto .nome-produto:contains("' + palavraChaveTabela2 + '")').length > 0) {
			$("#tabela-medidas .modal-body").append('<img src="' + imgTabela2 + '">');
			$(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas"><use xlink:href="#fita-medidas"></use></svg> ' + textoBotao2 + '</button>');
			$('#tabela-medidas .modal-title').text('' + textoBotao2 + '');
		}
	}
	if (tabelaMedidas3 === true) {
		if ($('.info-principal-produto .nome-produto:contains("' + palavraChaveTabela3 + '")').length > 0) {
			$("#tabela-medidas .modal-body").append('<img src="' + imgTabela3 + '">');
			$(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas"><use xlink:href="#fita-medidas"></use></svg> ' + textoBotao3 + '</button>');
			$('#tabela-medidas .modal-title').text('' + textoBotao3 + '');
		}
	}
	if (tabelaMedidas4 === true) {
		if ($('.info-principal-produto .nome-produto:contains("' + palavraChaveTabela4 + '")').length > 0) {
			$("#tabela-medidas .modal-body").append('<img src="' + imgTabela4 + '">');
			$(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas"><use xlink:href="#fita-medidas"></use></svg> ' + textoBotao4 + '</button>');
			$('#tabela-medidas .modal-title').text('' + textoBotao4 + '');
		}
	}
	if (tabelaMedidas5 === true) {
		if ($('.info-principal-produto .nome-produto:contains("' + palavraChaveTabela5 + '")').length > 0) {
			$("#tabela-medidas .modal-body").append('<img src="' + imgTabela5 + '">');
			$(".pagina-produto .atributos").append('<button type="button" class="btn botao-medidas" data-toggle="modal" data-target="#tabela-medidas"><svg class="icon-fita-medidas"><use xlink:href="#fita-medidas"></use></svg> ' + textoBotao5 + '</button>');
			$('#tabela-medidas .modal-title').text('' + textoBotao5 + '');
		}
	}

	function updateText() {
		var $bandeirapromo = $('.listagem-linha .listagem-item .bandeiras-produto>.bandeira-promocao');
		var $avista = $('.desconto-a-vista');
		if ($bandeirapromo.length) {
			$.each($bandeirapromo, function () {
				$(this).html($(this).html().replace(' Desconto', ' ' + descontoDepois + ''));
			});
		}
		if ($avista.length) {
			$.each($avista, function () {
				$(this).html($(this).html().replace('ou', ''));
				$(this).html($(this).html().replace('via Pagamento na entrega', '' + textoEntrega + ''));
				$(this).html($(this).html().replace('via Boleto Bancáriorio', '' + textoBoleto + ''));
				$(this).html($(this).html().replace('via Depósito', '' + textoDeposito + ''));
			});
		}
	}
	updateText();
	$(document).ajaxComplete(function () {
		updateText();
	});

	function qtdAdicionar() {
		$(document).on("change keyup focusout", ".qtde-adicionar-carrinho .qtde-carrinho", function () {
			var d = $(this).val();
			var c = $(this).parent().siblings(".botao-comprar");
			c.attr("href", c.attr("href").replace(/adicionar.*/g, "adicionar/" + d))
		})
		$('.listagem-item').find('.botao-comprar-ajax').closest('.acoes-produto').prepend('<div class="qtde-adicionar-carrinho"><input type="number" min="1" value="1" class="qtde-carrinho" name="qtde-carrinho"></div>');
		$('.botao-comprar-ajax').html('<i class="fas fa-shopping-cart"></i> Adicionar');
		$(".botao-comprar-ajax").attr("data-loading-text", "<i class='icon-refresh icon-animate'></i>Adicionando");
		jQuery('<div class="quantity-nav"><div class="quantity-button quantity-up"><i class="fas fa-caret-up"></i></div><div class="quantity-button quantity-down"><i class="fas fa-caret-down"></i></div></div>').insertAfter('.qtde-carrinho');
		jQuery('.qtde-adicionar-carrinho').each(function () {
			var spinner = jQuery(this)
				, input = spinner.find('input[type="number"]')
				, btnUp = spinner.find('.quantity-up')
				, btnDown = spinner.find('.quantity-down')
				, min = input.attr('min')
				, max = input.attr('max');
			btnUp.click(function () {
				var oldValue = parseFloat(input.val());
				if (oldValue >= max) {
					var newVal = oldValue;
				}
				else {
					var newVal = oldValue + 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
			btnDown.click(function () {
				var oldValue = parseFloat(input.val());
				if (oldValue <= min) {
					var newVal = oldValue;
				}
				else {
					var newVal = oldValue - 1;
				}
				spinner.find("input").val(newVal);
				spinner.find("input").trigger("change");
			});
		});
	}
	qtdAdicionar();
	if (feedInstagram === true) {
		$('.pagina-inicial #barraNewsletter').before('<div id="feedinstagram" class="feed-insta hidden-phone"><div class="conteiner"><div class="row-fluid"><i class="fab fa-instagram"></i><div class="titulo-categoria"><strong>' + tituloInstagram + '</strong><a href="https://www.instagram.com/' + seuInstagram + '" target="blank">' + subtituloInstagram + ' <span>@' + seuInstagram + '</span></a></div><div id="img-instagram"><ul></ul></div></div></div></div>');
		(function (a) {
			function b(a) {
				return a.replace(/[&<>"'`=\/]/g, function (a) {
					return e[a]
				})
			}
			var c = {
				host: "https://www.instagram.com/"
				, username: ""
				, tag: ""
				, container: ""
				, display_profile: !0
				, display_biography: !0
				, display_gallery: !0
				, display_igtv: !1
				, get_data: !1
				, callback: null
				, styling: !0
				, items: 8
				, items_per_row: 4
				, margin: .5
				, image_size: 640
			}
				, d = {
					150: 0
					, 240: 1
					, 320: 2
					, 480: 3
					, 640: 4
				}
				, e = {
					"&": "&amp;"
					, "<": "&lt;"
					, ">": "&gt;"
					, '"': "&quot;"
					, "'": "&#39;"
					, "/": "&#x2F;"
					, "`": "&#x60;"
					, "=": "&#x3D;"
				};
			a.instagramFeed = function (e) {
				var f = a.fn.extend(
					{}, c, e);
				if ("" == f.username && "" == f.tag) return console.error("Instagram Feed: Error, no username or tag found."), !1;
				if ("undefined" != typeof f.get_raw_json && (console.warn("Instagram Feed: get_raw_json is deprecated. See use get_data instead"), f.get_data = f.get_raw_json), !f.get_data && "" == f.container) return console.error("Instagram Feed: Error, no container found."), !1;
				if (f.get_data && null == f.callback) return console.error("Instagram Feed: Error, no callback defined to get the raw json"), !1;
				var g = "" == f.username
					, h = g ? f.host + "explore/tags/" + f.tag + "/" : f.host + f.username + "/";
				return a.get(h, function (c) {
					try {
						c = c.split("window._sharedData = ")[1].split("</script>")[0]
					}
					catch (a) {
						return void console.error("Instagram Feed: It looks like the profile you are trying to fetch is age restricted. See https://github.com/jsanahuja/InstagramFeed/issues/26")
					}
					if (c = JSON.parse(c.substr(0, c.length - 1)), c = c.entry_data.ProfilePage || c.entry_data.TagPage, "undefined" == typeof c) return void console.error("Instagram Feed: It looks like YOUR network has been temporary banned because of too many requests. See https://github.com/jsanahuja/jquery.instagramFeed/issues/25");
					if (c = c[0].graphql.user || c[0].graphql.hashtag, f.get_data) return void f.callback(c);
					var e = {
						profile_container: ""
						, profile_image: ""
						, profile_name: ""
						, profile_biography: ""
						, gallery_image: ""
					};
					if (f.styling) {
						e.profile_container = " style='text-align:center;'", e.profile_image = " style='border-radius:10em;width:15%;max-width:125px;min-width:50px;'", e.profile_name = " style='font-size:1.2em;'", e.profile_biography = " style='font-size:1em;'";
						var h = (100 - 2 * f.margin * f.items_per_row) / f.items_per_row;
						e.gallery_image = " style='margin:" + f.margin + "% " + f.margin + "%;width:" + h + "%;float:left;'"
					}
					var j = "";
					f.display_profile && (j += "<div class='instagram_profile'" + e.profile_container + ">", j += "<img class='instagram_profile_image' src='" + c.profile_pic_url + "' alt='" + (g ? c.name + " tag pic" : c.username + " profile pic") + "'" + e.profile_image + " />", j += g ? "<p class='instagram_tag'" + e.profile_name + "><a href='https://www.instagram.com/explore/tags/" + f.tag + "' rel='noopener' target='_blank'>#" + f.tag + "</a></p>" : "<p class='instagram_username'" + e.profile_name + ">@" + c.full_name + " (<a href='https://www.instagram.com/" + f.username + "' rel='noopener' target='_blank'>@" + f.username + "</a>)</p>", !g && f.display_biography && (j += "<p class='instagram_biography'" + e.profile_biography + ">" + c.biography + "</p>"), j += "</div>");
					var k = "undefined" == typeof d[f.image_size] ? d[640] : d[f.image_size];
					if (f.display_gallery)
						if ("undefined" != typeof c.is_private && !0 === c.is_private) j += "<p class='instagram_private'><strong>This profile is private</strong></p>";
						else {
							var l = (c.edge_owner_to_timeline_media || c.edge_hashtag_to_media).edges;
							s = l.length > f.items ? f.items : l.length, j += "<div class='instagram_gallery'>";
							for (var m = 0; m < s; m++) {
								var n, o, p, q = "https://www.instagram.com/p/" + l[m].node.shortcode;
								switch (l[m].node.__typename) {
									case "GraphSidecar":
										o = "sidecar", n = l[m].node.thumbnail_resources[k].src;
										break;
									case "GraphVideo":
										o = "video", n = l[m].node.thumbnail_src;
										break;
									default:
										o = "image", n = l[m].node.thumbnail_resources[k].src;
								}
								p = "undefined" != typeof l[m].node.edge_media_to_caption.edges[0] && "undefined" != typeof l[m].node.edge_media_to_caption.edges[0].node && "undefined" != typeof l[m].node.edge_media_to_caption.edges[0].node.text && null !== l[m].node.edge_media_to_caption.edges[0].node.text ? l[m].node.edge_media_to_caption.edges[0].node.text : "undefined" != typeof l[m].node.accessibility_caption && null !== l[m].node.accessibility_caption ? l[m].node.accessibility_caption : (g ? c.name : c.username) + " image " + m, j += "<a href='" + q + "' class='instagram-" + o + "' rel='noopener' target='_blank'>", j += "<img src='" + n + "' alt='" + b(p) + "'" + e.gallery_image + " />", j += "</a>"
							}
							j += "</div>"
						} if (f.display_igtv && "undefined" != typeof c.edge_felix_video_timeline) {
							var r = c.edge_felix_video_timeline.edges
								, s = r.length > f.items ? f.items : r.length;
							if (0 < r.length) {
								j += "<div class='instagram_igtv'>";
								for (var m = 0; m < s; m++) j += "<a href='https://www.instagram.com/p/" + r[m].node.shortcode + "' rel='noopener' target='_blank'>", j += "<img src='" + r[m].node.thumbnail_src + "' alt='" + f.username + " instagram image " + m + "'" + e.gallery_image + " />", j += "</a>";
								j += "</div>"
							}
						}
					a(f.container).html(j)
				}).fail(function (a) {
					console.error("Instagram Feed: Unable to fetch the given user/tag. Instagram responded with the status code: ", a.status)
				}), !0
			}
		})(jQuery);
		$(window).on('load', function () {
			$.instagramFeed(
				{
					'username': seuInstagram
					, 'container': "#img-instagram ul"
					, 'display_profile': false
					, 'display_biography': false
					, 'display_gallery': true
					, 'callback': null
					, 'styling': false
					, 'items': 6
					, 'items_per_row': 6
					, 'margin': 1
				});
		});
	}
	$('head').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="novouser" x="0px" y="0px" viewBox="0 0 49.654 49.654" xml:space="preserve"><path d="M24.827,0C11.138,0,0.001,11.138,0.001,24.827c0,13.689,11.137,24.827,24.826,24.827    c13.688,0,24.826-11.138,24.826-24.827C49.653,11.138,38.517,0,24.827,0z M39.142,38.51c0-0.574,0-0.979,0-0.979    c0-3.386-3.912-4.621-6.006-5.517c-0.758-0.323-2.187-1.011-3.653-1.728c-0.495-0.242-0.941-0.887-0.997-1.438l-0.162-1.604    c1.122-1.045,2.133-2.5,2.304-4.122h0.253c0.398,0,0.773-0.298,0.832-0.663l0.397-2.453c0.053-0.524-0.442-0.842-0.843-0.842    c0.011-0.052,0.02-0.105,0.025-0.149c0.051-0.295,0.082-0.58,0.102-0.857c0.025-0.223,0.045-0.454,0.056-0.693    c0.042-1.158-0.154-2.171-0.479-2.738c-0.33-0.793-0.83-1.563-1.526-2.223c-1.939-1.836-4.188-2.551-6.106-1.075    c-1.306-0.226-2.858,0.371-3.979,1.684c-0.612,0.717-0.993,1.537-1.156,2.344c-0.146,0.503-0.243,1.112-0.267,1.771    c-0.026,0.733,0.046,1.404,0.181,1.947c-0.382,0.024-0.764,0.338-0.764,0.833l0.396,2.453c0.059,0.365,0.434,0.663,0.832,0.663    h0.227c0.36,1.754,1.292,3.194,2.323,4.198l-0.156,1.551c-0.056,0.55-0.502,1.193-0.998,1.438    c-1.418,0.692-2.815,1.358-3.651,1.703c-1.97,0.812-6.006,2.131-6.006,5.517v0.766c-3.288-3.541-5.316-8.266-5.316-13.467    c0-10.932,8.894-19.826,19.826-19.826c10.933,0,19.826,8.894,19.826,19.826C44.653,30.133,42.548,34.946,39.142,38.51z"/></svg>');
	$('head').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="novocart" x="0px" y="0px" viewBox="0 0 495.401 495.401"  xml:space="preserve"><path d="M185.049,381.529c-22.852,0-41.379,18.517-41.379,41.36c0,22.861,18.527,41.379,41.379,41.379    c22.843,0,41.37-18.518,41.37-41.379C226.419,400.048,207.892,381.529,185.049,381.529z"/><path d="M365.622,381.529c-22.861,0-41.379,18.517-41.379,41.36c0,22.861,18.518,41.379,41.379,41.379    c22.844,0,41.38-18.518,41.38-41.379C407.002,400.048,388.466,381.529,365.622,381.529z"/><path d="M469.558,154.735l-229.192-0.019c-11.46,0-20.75,9.29-20.75,20.75s9.29,20.75,20.75,20.75    l202.778-0.01l-12.864,43.533l-206.164,0.044c-10.631,0-19.25,8.619-19.25,19.25c0,10.632,8.619,19.25,19.25,19.25l194.768,0.076    l-12.093,40.715H174.455L159.04,196.188L144.321,76.471c-1.198-9.473-8.066-17.251-17.319-19.611l-98-25    C16.56,28.684,3.901,36.199,0.727,48.641s4.339,25.102,16.781,28.275l82.667,21.089l32.192,241.591c0,0,1.095,28.183,26.69,28.183    h256.81c21.518,0,25.678-22.438,25.678-22.438l50.896-151.159C492.441,194.162,507.532,154.735,469.558,154.735z"/></svg>');
	$('head').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="novonews" x="0px" y="0px" viewBox="0 0 452.84 452.84" ><path d="m449.483,190.4l.001-.001-57.824-38.335v-128.134c0-4.142-3.358-7.5-7.5-7.5h-315.49c-4.142,0-7.5,3.358-7.5,7.5v128.143l-57.814,38.326 .001,.002c-2.022,1.343-3.357,3.639-3.357,6.249v232.26c0,4.142 3.358,7.5 7.5,7.5h437.84c4.142,0 7.5-3.358 7.5-7.5v-232.26c0-2.61-1.335-4.906-3.357-6.25zm-388.313,26.229l-23.525-12.479h23.525v12.479zm-46.17-7.511l172.475,91.49-172.475,114.327v-205.817zm211.417,83.671l194.037,128.621h-388.073l194.036-128.621zm38.945,7.82l172.477-91.491v205.821l-172.477-114.33zm126.298-96.459h23.536l-23.536,12.484v-12.484zm28.794-15h-28.794v-19.09l28.794,19.09zm-43.794-157.72v193.161l-125.527,66.586-20.573-13.637c-2.511-1.665-5.776-1.665-8.287,0l-20.57,13.635-125.533-66.589v-193.156h300.49zm-315.49,157.72h-28.782l28.782-19.08v19.08z"/><path d="m226.415,213.671h59.754c4.142,0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-59.754c-28.813,0-52.254-23.441-52.254-52.254v-2.213c0-28.813 23.441-52.254 52.254-52.254s52.254,23.441 52.254,52.254v5.533c0,6.237-5.074,11.312-11.312,11.312s-11.312-5.074-11.312-11.312v-10.512c0-17.864-14.533-32.398-32.397-32.398s-32.397,14.533-32.397,32.398c0,17.864 14.533,32.397 32.397,32.397 8.169,0 15.636-3.045 21.34-8.052 4.644,7.483 12.932,12.478 22.369,12.478 14.508,0 26.312-11.803 26.312-26.312v-5.533c0-37.084-30.17-67.254-67.254-67.254s-67.254,30.17-67.254,67.254v2.213c5.68434e-14,37.085 30.17,67.255 67.254,67.255zm-2.767-57.049c-9.593,0-17.397-7.804-17.397-17.397s7.805-17.398 17.397-17.398 17.397,7.805 17.397,17.398-7.804,17.397-17.397,17.397z"/></svg>');
	$('head').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="novoshield" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><polygon points="234.53,285.912 169.76,224.259 142.172,253.242 236.775,343.294 380.923,182.799 351.154,156.061    "/><path d="M420.499,65.192c-48.502-8.692-93.168-35.18-115.476-50.195C290.447,5.186,273.496,0,256.001,0     s-34.447,5.186-49.022,14.996C184.671,30.011,140.005,56.5,91.503,65.192c-28.726,5.148-49.576,30.002-49.576,59.097v120.71     c0,39.877,11.157,78.749,33.159,115.539c17.214,28.781,41.064,56.288,70.888,81.757c50.147,42.825,99.804,65.156,101.892,66.086     L256,512l8.134-3.619c2.089-0.929,51.745-23.261,101.892-66.086c29.823-25.469,53.675-52.976,70.888-81.757     c22.004-36.789,33.159-75.662,33.159-115.539V124.29C470.075,95.194,449.225,70.34,420.499,65.192z M430.061,245     c0,59.45-30.033,115.375-89.267,166.224c-34.432,29.558-69.39,48.824-84.791,56.643C220.601,449.879,81.941,371.328,81.941,245     V124.29c0-9.695,6.99-17.985,16.621-19.711c55.718-9.985,105.843-39.616,130.761-56.388c7.947-5.35,17.172-8.178,26.678-8.178     c9.506,0,18.732,2.828,26.678,8.177c24.919,16.773,75.043,46.402,130.761,56.387c9.63,1.726,16.621,10.016,16.621,19.711V245z" /></svg>');
	$('head').append('<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="chat-flutuante" x="0px" y="0px" viewBox="0 0 576 576" xml:space="preserve"><path d="M240,32L240,32c132.549,0,240,86.957,240,194.224S372.549,420.448,240,420.448c-12.729,0-25.223-0.81-37.417-2.355   C151.03,469.44,91.497,478.647,32,480v-12.567c32.126-15.677,58-44.231,58-76.866c0-4.553-0.356-9.023-1.015-13.396   C34.706,341.562,0,287.175,0,226.224C0,118.957,107.452,32,240,32z M498,467.343c0,27.973,18.156,52.449,46,65.886V544   c-51.562-1.159-98.893-9.051-143.57-53.062c-10.57,1.324-21.396,2.021-32.43,2.021c-47.734,0-91.704-12.879-126.807-34.521   c72.336-0.254,140.629-23.428,192.417-65.336c26.105-21.127,46.697-45.914,61.207-73.675C510.199,289.994,518,258.636,518,226.224   c0-5.224-0.225-10.418-0.629-15.584C553.656,240.607,576,281.451,576,326.479c0,52.244-30.078,98.86-77.119,129.383   C498.309,459.608,498,463.44,498,467.343z"/></svg>');
	$('head').append('<svg version="1.1" id="fita-medidas" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><path d="M193.65,156.647c-36.028,0-62.835,14.829-65.191,36.061c-0.109,0.986-0.165,1.984-0.165,2.964c0,21.366,24.679,37.366,60.019,38.91c1.787,0.078,3.583,0.117,5.337,0.117c37.87,0,65.357-16.413,65.357-39.026C259.007,173.06,231.52,156.647,193.65,156.647z M193.65,203.354c-1.302,0-2.638-0.029-3.971-0.088c-15.277-0.668-24.739-4.874-28.581-7.608c4.389-3.133,15.725-7.663,32.552-7.663c16.856,0,28.204,4.547,32.577,7.68C221.854,198.808,210.506,203.354,193.65,203.354z"/><path d="M387.3,263.657v-67.982c0-28.763-21.711-54.808-61.135-73.338c-35.657-16.761-82.719-25.992-132.515-25.992c-48.057,0-93.907,8.675-129.104,24.428c-38.388,17.179-61.189,41.593-64.202,68.744C0.116,191.572,0,193.644,0,195.674v120.651c0,27.153,19.619,52.17,55.243,70.442c31.905,16.365,74.893,26.488,121.046,28.505c5.824,0.254,11.666,0.383,17.361,0.383H512V263.657H387.3z M31.499,192.974c3.498-31.527,69.49-65.282,162.15-65.282c95.648,0,162.303,35.828,162.303,67.983c0,32.155-66.655,67.982-162.303,67.982c-5.245,0-10.626-0.119-15.993-0.354c-2.283-0.099-4.559-0.224-6.825-0.367c-0.119-0.007-0.239-0.014-0.359-0.022c-35.193-2.259-68.219-9.711-93.66-21.2c-0.883-0.399-1.754-0.801-2.615-1.208c-0.087-0.042-0.173-0.084-0.26-0.124c-0.735-0.348-1.46-0.699-2.178-1.051c-0.415-0.205-0.824-0.412-1.235-0.619c-0.394-0.199-0.79-0.396-1.179-0.596c-0.583-0.3-1.16-0.603-1.73-0.906c-0.13-0.069-0.259-0.137-0.388-0.205c-21.341-11.434-34.124-25.26-35.711-38.541c-0.016-0.135-0.025-0.27-0.039-0.404c-0.033-0.322-0.066-0.644-0.086-0.964c-0.028-0.474-0.045-0.948-0.045-1.421C31.347,194.794,31.398,193.885,31.499,192.974z M355.953,251.057v12.6H336.69C343.833,259.722,350.257,255.508,355.953,251.057z M480.653,384.308h-32.889v-41.32h-31.347v41.32h-38.861v-66.746h-31.347v66.746h-38.113v-41.32H276.75v41.32h-38.862v-66.746h-31.347v66.746H193.65c-5.241,0-10.621-0.119-15.993-0.353c-3.096-0.135-6.172-0.315-9.229-0.527v-40.441h-31.347v36.803c-13.785-2.275-26.847-5.377-38.861-9.236v-66.401H66.873v53.31c-22.619-12.202-35.527-27.096-35.527-41.139v-65.242c4.296,3.351,9.026,6.561,14.15,9.626c0.057,0.034,0.113,0.07,0.17,0.104c0.646,0.386,1.306,0.765,1.964,1.145c0.645,0.373,1.295,0.745,1.951,1.114c0.517,0.289,1.035,0.578,1.559,0.863c0.995,0.543,2.004,1.081,3.025,1.614c0.254,0.132,0.502,0.266,0.758,0.398c0.108,0.055,0.21,0.112,0.318,0.167c1.247,0.639,2.517,1.266,3.797,1.887c0.187,0.091,0.377,0.181,0.565,0.271c1.348,0.648,2.713,1.286,4.096,1.913c0.071,0.032,0.138,0.066,0.21,0.098c0.026,0.011,0.053,0.023,0.08,0.034c1.691,0.763,3.412,1.507,5.153,2.237c0.338,0.141,0.674,0.283,1.013,0.423c1.522,0.629,3.062,1.248,4.621,1.852c0.712,0.277,1.43,0.548,2.149,0.819c0.793,0.299,1.593,0.592,2.396,0.885c22.229,8.131,47.548,13.707,74.746,16.464c0.41,0.042,0.818,0.085,1.228,0.125c1.18,0.116,2.36,0.23,3.547,0.335c1.728,0.155,3.463,0.297,5.203,0.428c0.678,0.051,1.358,0.099,2.039,0.146c2.088,0.146,4.182,0.28,6.285,0.393c0.086,0.004,0.17,0.011,0.256,0.016l1.028,0.561h306.999V384.308z"/></svg>');
	var tam = $(window).width();
	if (tam >= 769) {
		$('#rodape .span12.visible-phone').find('.titulo').closest('.span12.visible-phone').addClass('contato-rodape');
		$('#cabecalho .conteiner .row-fluid').find('.logo').closest('.span3').removeClass('span3').addClass('abriga-logo span3');
		$('.span8.busca-mobile').removeClass('span8').addClass('span5');
		$('.conteudo-topo .superior').find('.bem-vindo').closest('.span8').removeClass('span8').addClass('login-inside');
		$('.conteudo-topo .superior').find('.btn-group').closest('.span8').removeClass('span8').addClass('login-inside');
		$('.secao-banners').find('.banner.cheio').closest('.conteiner').addClass('c-b');
		$('.lista-redes').find('.icon-facebook').closest('li').addClass('face-prov');
		$('#rodape .institucional .conteiner .row-fluid .span3').find('.redes-sociais').closest('.span3').addClass('old-facebook');
		$('.row-fluid').find('.nav.nav-tabs').closest('.row-fluid').addClass('caracteristicas-new');
		$('.row-fluid').find('.icon-zoom-in').closest('.row-fluid').addClass('produto-new');
		$('.produto').find('.conteiner-imagem').closest('.span6').addClass('box-imagem');
		$('.produto').find('.info-principal-produto').closest('.span6').addClass('box-preco');
		$('.produto').find('.conteiner-imagem').closest('.span7').addClass('box-imagem');
		$('.produto').find('.info-principal-produto').closest('.span5').addClass('box-preco');
		$('.conteudo-topo .inferior').append('<div class="abriga-painel span6 offset1"><ul><li class="abriga-atendimento"><span><i class="far fa-comment-alt"></i><span class="ri-cd"><small>Precisa de ajuda?</small><strong>Atendimento<i class="fas fa-caret-down"></i></strong></span></span><div class="central-drop atendimento-mc"><div class="contato-mc"></div><div class="rastreio"><span><i class="fas fa-map-marker-alt"></i> Rastrear Pedido</span><input type="hidden" name="P_TIPO" value="001"><input type="text" placeholder="Digite seu código" id="input-rastreio"><button type="submit" class="botao"><i class="fas fa-angle-right"></i></button></div></div></li><li class="abriga-conta"></li><li class="abriga-carrinho"></li></ul></div>');
		$(".rastreio .botao").click(function () {
			var codigorastreio = document.getElementById('input-rastreio').value;
			window.open('https://www.vaichegar.com.br/?id=' + codigorastreio, '_blank');
		});
		$('.abriga-painel .abriga-carrinho').append($('#cabecalho .carrinho'));
		$('.abriga-painel .abriga-conta').append($('#cabecalho .login-inside'));
		$('#cabecalho .carrinho>a').append('<span class="texto-cart-cheio"> <strong>item(s)</strong></span>');
		$('.texto-cart-cheio').prepend($('#cabecalho .qtd-carrinho.titulo'));
		$('#cabecalho .carrinho>a').prepend('<svg class="icon-novocart"><use xlink:href="#novocart"></use></svg>');
		$("#cabecalho .carrinho>a i").remove();
		$("#cabecalho .carrinho .vazio-text").text("Nenhum item Adicionado");
		$(".contato-rodape ul").clone().appendTo(".atendimento-mc .contato-mc");
		$('.contato-mc').find('.fa-envelope').closest('li').addClass('mail-mc');
		$('.contato-mc').find('.icon-phone').closest('li').addClass('phone-mc');
		$(".contato-mc .fa.fa-whatsapp").remove();
		$(".contato-mc .icon-phone").remove();
		$(".contato-mc .fa.fa-envelope").remove();
		$(".contato-mc .fa.fa-skype").remove();
		$(".contato-mc .tel-whatsapp:contains('Whatsapp:')").html(function (_, html) {
			return html.replace(/(Whatsapp:)/g, '<span class="whatsapp-n"><i class="fab fa-whatsapp"></i> Whatsapp:</span></br>')
		});
		$(".contato-mc .phone-mc:contains('Telefone:')").html(function (_, html) {
			return html.replace(/(Telefone:)/g, '<span class="telefone-n"><i class="fas fa-phone"></i></i> Telefone:</span></br>')
		});
		$(".contato-mc .mail-mc:contains('E-mail:')").html(function (_, html) {
			return html.replace(/(E-mail:)/g, '<span class="email-n"><i class="fas fa-envelope"></i> E-mail:</span></br>')
		});
		$(".contato-mc .tel-skype:contains('Skype:')").html(function (_, html) {
			return html.replace(/(Skype:)/g, '<span class="skype-n"><i class="fab fa-skype"></i> Skype:</span></br>')
		});
		if ($('#cabecalho .qtd-carrinho.titulo:contains("0")').length > 0) {
			$("#cabecalho .carrinho>a strong").remove();
			$(".icon-novocart").css("margin-bottom", "13px");
		}
		var $bemvindo = $('#cabecalho .bem-vindo');
		if ($bemvindo.length) {
			$bemvindo.html($bemvindo.html().replace('Bem-vindo,', ''));
			$bemvindo.html($bemvindo.html().replace('identifique-se', ''));
			$bemvindo.html($bemvindo.html().replace('para', ''));
			$bemvindo.html($bemvindo.html().replace('fazer pedidos', 'Minha<br>Conta'));
		}
		$('.bem-vindo').prepend(' <svg class="icon-novouser"><use xlink:href="#novouser"></use></svg>');
		$('#cabecalho .conteiner').after('<div class="abriga-menu"><div class="conteiner"><div class="row-fluid"></div></div></div>');
		$('.abriga-menu .conteiner .row-fluid').prepend($('#cabecalho .menu.superior'));
		$(".conteudo-topo .inferior .span4").remove();
		$(".conteudo-topo .superior").remove();
		$('.abriga-conta').append('<div class="central-drop conta-mc"><ul><li class="cadastrar-mc"><a href="/conta/login"><i class="fas fa-user-edit"></i>Cadastrar</a></li><li class="entrar-mc"><a href="/conta/login"><i class="fas fa-sign-in-alt"></i>Entrar</a></li><li class="pedidos-mc"><a href="/conta/login?next=/conta/pedido/listar"><i class="fas fa-list-alt"></i></i>Meus Pedidos</a></li><li class="desejos-mc"><a href="/conta/favorito/listar"><i class="fas fa-heart"></i>Meus Favoritos</a></li></ul></div>');
		$(".abriga-conta .btn-group .dropdown-menu").remove();
		if ($('.abriga-conta .btn-group').length !== 0) {
			$('.abriga-conta .central-drop ul').prepend('<li class="minhaconta-mc"><a href="/conta/index"><i class="fas fa-user"></i></i>Minha Conta</a></li>');
			$('.abriga-conta .central-drop ul').append('<li class="botao-sair"><a href="/conta/logout"><i class="far fa-times-circle"></i>Sair</a></li>');
			$(".abriga-conta .cadastrar-mc").remove();
			$(".abriga-conta .entrar-mc").remove();
		}
		$('.secao-banners').prepend('<div class="novo-full"></div>');
		$('.novo-full').append($('.conteiner.c-b'));
		if ($('.marcas').length) {
			$('.secao-banners').append('<div class="nova-marcas"><div class="conteiner"></div></div>');
			$('.nova-marcas .conteiner').append($('.marcas'));
		}
		if ($('.banner.tarja').length) {
			$('.span12.banner.tarja').removeClass('span12');
			$('.secao-banners').append('<div class="nova-tarja"><div class="conteiner"></div></div>');
			$('.nova-tarja .conteiner').append($('.tarja'));
		}
		if (miniBanners === 2) {
			$(".modulo.span4:nth-child(3)").remove();
			$('.modulo.span4').removeClass('span4').addClass('span6');
		}
		else { }
		$('.mini-banner .modulo:nth-child(1) img, .mini-banner .modulo:nth-child(2) img, .mini-banner .modulo:nth-child(3) img').each(function () {
			$(this).attr('src', $(this).attr('src').replace('/400x400', ''));
		})
		$('.listagem .listagem-linha .span3').addClass('linha4');
		$('.listagem-item .preco-produto .titulo:contains("Preço sob consulta")').parent().addClass("nova-consulta");
		$("#barraNewsletter .componente .interno .titulo i").remove();
		$('#barraNewsletter .texto-newsletter.newsletter-cadastro').prepend($('#barraNewsletter .componente .interno .titulo'));
		$('#barraNewsletter .componente .interno-conteudo').prepend('<div class="news-icon"><svg class="icon-novonews"><use xlink:href="#novonews"></use></svg></div>');
		$('.institucional .conteiner .row-fluid .span9').removeClass('span9').addClass('novo-rodape span12');
		$(".links-rodape-categorias").remove();
		$('.span4.links-rodape-paginas').removeClass('span4').addClass('span12');
		$('.span4.sobre-loja-rodape').removeClass('span4').addClass('span12');
		$('.institucional .conteiner .row-fluid .novo-rodape').append('<div class="atendimento-rodape span3"><span class="titulo">' + tituloAtendimento + '</span></div><div class="meio-rodape span6"></div><div class="social-rodape span3"></div>');
		$(".atendimento-mc .contato-mc").clone().appendTo(".atendimento-rodape");
		$('.meio-rodape').append($('.sobre-loja-rodape'));
		$('.meio-rodape').append($('.links-rodape-paginas'));
		var facelink = $('.face-prov a').attr('href');
		$('.social-rodape').append($('<div class="fb-page" data-href="' + facelink + '" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><blockquote cite="' + facelink + '" class="fb-xfbml-parse-ignore"></div>'));
		$('.social-rodape').append($('.old-facebook .lista-redes'));
		$(".old-facebook").remove();
		$(".barra-inicial").remove();
		$('.sobre-loja-rodape .titulo').text('' + tituloSobre + '');
		$('.links-rodape-paginas .titulo').text('' + tituloInstitucional + '');
		$('#rodape .pagamento .titulo').text('' + tituloPagamento + '');
		$('.selos .titulo').text('' + tituloSeguranca + '');
		$('.span9.selos').removeClass('span9').addClass('span4');
		$('.span9.pagamento').removeClass('span9').addClass('span4');
		$('#rodape .pagamento-selos .conteiner .row-fluid').append('<div class="span4 desenvolvimento"><ul><li class="logo-groomb"><a href="https://groomb.com.br" target="_blank"><img src="https://cdn.awsli.com.br/1022/1022650/arquivos/logotemas.png"></a></li><li class="logo-li"></li></ul></div>');
		$('#rodape > div:last-child .row-fluid > div:last-child a').addClass('li-a');
		$('.logo-li').append($('.li-a'));
		$('#rodape > div:last-child .row-fluid > div p').addClass('li-d');
		$('.sobre-loja-rodape').append($('.li-d'));
		$("#rodape > div:last-child").remove();
		$('.menu.superior .nivel-um>li').each(function (index) {
			var $this = $(this);
			var $textoCat = $($this).find('a strong.titulo').clone();
			$this.find('.nivel-dois').prepend($('<span class="titulo-cat"></span>'));
			$this.find('.nivel-dois .titulo-cat').prepend($textoCat);
		});
		if (menuTopo === true) {
			if ($('.pagina-carrinho').length === 0) {
				if ($('.menu.superior').length) {
					$("body").css("padding-top", "163px");
					$('#cabecalho').css(
						{
							"position": "fixed"
							, "z-index": "201"
						});
				}
				var num = 0;
				$(window).bind('scroll', function () {
					if ($(window).scrollTop() > num) {
						$('#cabecalho').addClass('fixed');
						$('#cabecalho .carrinho>a strong').css('background-color', '' + corSecundaria + '');
					}
					else {
						$('#cabecalho').removeClass('fixed');
						$('#cabecalho .carrinho>a strong').css('background-color', 'inherit');
					}
				});
			}
		}
		if ($('.produtos-carrossel').length === 0) {
			$('#listagemProdutos').addClass('listagem-comum');
		}
		$(".produto-new").wrapInner("<div class='box-produto'></div>");
		$('.comprar .disponibilidade-produto').before($('.produto-compartilhar .lista-favoritos'));
		$('.box-produto .codigo-produto>span:nth-child(1)').addClass('codigo-mc');
		$('.box-produto .codigo-produto>span:nth-child(2)').removeClass('pull-right').addClass('marca-mc');
		$('.box-produto .marca-mc').after($('.box-produto .codigo-mc'));
		$('.box-produto .codigo-produto').before($('.box-produto .trustvox-stars'));
		if ($('.box-produto #produto-consulta-preco').length !== 0) {
			$(".produto-compartilhar .lista-favoritos").remove();
		}
		if (ativaIconeDescricao === false) {
			$(".descricao-titulo i").remove();
		}
		if (horarioAtendimento === true) {
			$('.atendimento-rodape .contato-mc').append('<ul class="moldehorario"><li class="horarioatendimento"><i class="far fa-clock"></i> Horário de Atendimento</li><li class="linhahorario">' + horarioAtendimentoLinha1 + '</li><li class="linhahorario">' + horarioAtendimentoLinha2 + '</li><li class="linhahorario">' + horarioAtendimentoLinha3 + '</li><li class="linhahorario">' + horarioAtendimentoLinha4 + '</li></ul>');
		}
		if (rastreioRapido === false) {
			$(".rastreio").remove();
		}
		var megaMenu = true;
		if (megaMenu === true) {
			$(".menu.superior .nivel-dois ").wrapInner("<div class='mega-categorias span6'></div>");
			$('.menu.superior .nivel-dois').append('<div class="mega-recebe span6"></div>');
			$('.menu.superior .nivel-um>li .mega-recebe').append('<div class="mega-recebe-prod"><div id="listagemProdutos" class="listagem"><ul><li class="listagem-linha"><ul></ul></li></ul></div></div>');
			$('.menu.superior .nivel-um>li').each(function (index) {
				var $this = $(this);
				var linkCat = $($this).find('a').clone().attr('href');
				$this.find('.mega-recebe-prod .listagem ul li ul').load('' + linkCat + ' .listagem .listagem-linha:first-child ul li:first-child', function () { });
			});
			$('.menu.superior .nivel-um li a strong').css('color', '' + corMenuCategorias + '');
			$('.menu.superior li.com-filho>a i').css('color', '' + corMenuCategorias + '');
		}
		$(".menu.superior .nivel-um li > a[title=ofertasfora]").closest('li').addClass("ofertas-especiais");
		$(".menu.lateral .nivel-um li > a[title=ofertasfora]").closest('li').addClass("ofertas-especiais");
		$(".menu.lateral .ofertas-especiais").remove();
		$('.links-rodape-categorias ul li a:contains("ofertasfora")').closest('li').addClass("ofertas-especiais");
		$(".links-rodape-categorias ul .ofertas-especiais").remove();
		if (ofertas === true) {
			$('.menu.superior>ul').append($('.ofertas-especiais'));
			$(".ofertas-especiais a strong").text('' + tituloOfertas + '');
			$('.ofertas-especiais a strong').prepend('<i class="' + iconeOfertas + '"></i>');
			$('.ofertas-especiais a strong').append('<i class="fas fa-caret-down"></i>');
			$(".ofertas-especiais>a>strong").css('background', '' + corOfertas + '');
			$('.ofertas-especiais .mega-recebe-prod .listagem ul li').prepend('<ul><li class="oferta2 span3"></li></ul>');
			$('.ofertas-especiais .mega-recebe-prod .listagem ul li').prepend('<ul><li class="oferta3 span3"></li></ul>');
			$('.menu.superior .nivel-um .ofertas-especiais').each(function (index) {
				var $this = $(this);
				var linkCat = $($this).find('a').clone().attr('href');
				$this.find('.mega-recebe-prod .listagem ul li ul .oferta2').load('' + linkCat + ' .listagem .listagem-linha:first-child ul li:nth-child(2)');
				$this.find('.mega-recebe-prod .listagem ul li ul .oferta3').load('' + linkCat + ' .listagem .listagem-linha:first-child ul li:nth-child(3)');
			});
			if (timerOfertas === true) {
				$('.ofertas-especiais .mega-recebe').append('<div class="banner-ofertas"><div class="box-texto"><h1>' + textoOfertas1 + '</h1><h2>' + textoOfertas2 + '</h2></div><div class="countdown-ofertas"><ul><li class="countdown-dias"><span id="days"></span>dias</li><li class="countdown-horas"><span id="hours"></span>horas</li><li class="countdown-minutos"><span id="minutes"></span>min</li><li class="countdown-segundos"><span id="seconds"></span>seg</li></ul></div></div>');
				const second = 1000
					, minute = second * 60
					, hour = minute * 60
					, day = hour * 24;
				let countDown = new Date('' + timerTempo + '').getTime()
					, x = setInterval(function () {
						let now = new Date().getTime()
							, distance = countDown - now;
						document.getElementById('days').innerText = Math.floor(distance / (day)), document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)), document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)), document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
						if (distance < 0) {
							$(".banner-ofertas").remove();
						}
					}, second)
			}
			if (exibicaoOfertas === 3) { }
			else if (exibicaoOfertas === 2) {
				$('.ofertas-especiais .nivel-dois').addClass('duas-ofertas');
				$('.mega-recebe .listagem ul li ul .oferta3').parent().remove();
			}
			else if (exibicaoOfertas === 1) {
				$('.ofertas-especiais .nivel-dois').addClass('uma-oferta');
				$('.ofertas-especiais .mega-recebe .listagem ul li ul .oferta3').parent().remove();
				$('.ofertas-especiais .mega-recebe .listagem ul li ul .oferta2').parent().remove();
			}
			$(".ofertas-especiais>a").removeAttr("href");
			$('.ofertas-especiais>a').attr('title', '' + tituloOfertas + '');
		}
		else {
			$(".ofertas-especiais").remove();
		}
		if (departamentos === true) {
			$('.menu.superior>ul').append('<li class="todos-departamentos"><a href="#" title="' + tituloDepartamentos + '"><i class="fas fa-bars"></i>' + tituloDepartamentos + '<i class="fas fa-caret-down"></i></a><ul class="nivel-dois borda-alpha"></ul></li>');
			$(".menu.superior>ul>li.borda-principal").clone().appendTo(".todos-departamentos>ul");
		}
		$(".todos-departamentos .nivel-dois .ofertas-especiais").remove();
		$(".todos-departamentos .nivel-dois .categoria-paginas").remove();
		$(".todos-departamentos .nivel-dois .categoria-marcas").remove();
		if (departamentos === false && ofertas === false) {
			$('.menu.superior>ul').css(
				{
					"display": "table"
					, "margin": "auto"
				});
		}
		// Ativa os icones no menu superior
		if (iconesMenu === true) {
			// Checa se os icones possuem imagens e adiciona icones ao menu superior
			if (icone1Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(1)>a').prepend('<span class="icone-menu-1 icone-menu"><img src="' + icone1Menusuperior + '"></span>');
			};
			if (icone2Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(2)>a').prepend('<span class="icone-menu-2 icone-menu"><img src="' + icone2Menusuperior + '"></span>');
			};
			if (icone3Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(3)>a').prepend('<span class="icone-menu-3 icone-menu"><img src="' + icone3Menusuperior + '"></span>');
			};
			if (icone4Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(4)>a').prepend('<span class="icone-menu-4 icone-menu"><img src="' + icone4Menusuperior + '"></span>');
			};
			if (icone5Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(5)>a').prepend('<span class="icone-menu-5 icone-menu"><img src="' + icone5Menusuperior + '"></span>');
			};
			if (icone6Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(6)>a').prepend('<span class="icone-menu-6 icone-menu"><img src="' + icone6Menusuperior + '"></span>');
			};
			if (icone7Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(7)>a').prepend('<span class="icone-menu-7 icone-menu"><img src="' + icone7Menusuperior + '"></span>');
			};
			if (icone8Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(8)>a').prepend('<span class="icone-menu-8 icone-menu"><img src="' + icone8Menusuperior + '"></span>');
			};
			if (icone9Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(9)>a').prepend('<span class="icone-menu-9 icone-menu"><img src="' + icone9Menusuperior + '"></span>');
			};
			if (icone10Menusuperior.length > 10) {
				$('.menu.superior .nivel-um>li:nth-child(10)>a').prepend('<span class="icone-menu-10 icone-menu"><img src="' + icone10Menusuperior + '"></span>');
			};
			$(".menu.superior .nivel-um>li.categoria-paginas>a .icone-menu").remove();
			$(".menu.superior .nivel-um>li.categoria-marcas>a .icone-menu").remove();
			if (iconePaginas.length > 10) {
				$('.menu.superior .nivel-um>li.categoria-paginas>a').prepend('<span class="icone-menu-paginas icone-menu"><img src="' + iconePaginas + '"></span>');
			};
			if (iconeMarcas.length > 10) {
				$('.menu.superior .nivel-um>li.categoria-marcas>a').prepend('<span class="icone-menu-marcas icone-menu"><img src="' + iconeMarcas + '"></span>');
			};
			$(".todos-departamentos>a .icone-menu").remove();
			$(".ofertas-especiais>a .icone-menu").remove();
		}
		$("#barraTopo").addClass('hidden-desktop hidden-tablet');
		$('.listagem .vitrine-lancamento').prepend('<span>' + tituloLancamentos + '</span>');
		$('.listagem .vitrine-mas-vendido').prepend('<span>' + tituloVendidos + '</span>');
		$('.listagem .vitrine-destaque').prepend('<span>' + tituloDestaques + '</span>');
		if (substituirPorcentagem === true) {
			$('.listagem-item .bandeira-promocao').text('' + descontoNovo + '');
		}
		var categoriasoma = categoriasMenu + 1;
		$('.menu.superior .nivel-um>li.borda-principal:nth-of-type(1n+' + categoriasoma + ')').css("display", "none");
		// adiciona classe para manipulacao e remove de departamentos e oferta especial
		$('.menu.superior .nivel-um>li').addClass('manipula');
		$('.ofertas-especiais.manipula').removeClass('manipula');
		$('.todos-departamentos.manipula').removeClass('manipula');
		if (resumoFlutuante === false) {
			$('.acoes-flutuante').remove();
		}
		if (resumoFlutuantePosicao === "inferior") {
			$(".produto .acoes-flutuante").addClass('flutuante-inferior');
			jQuery(".produto .acoes-flutuante .close_float").click(function (event) {
				jQuery(event.target).closest(".produto .acoes-flutuante").css(
					{
						"bottom": "-400px"
						, "right": "1495 !important"
					});
				e
			});
			$('.produto .acoes-flutuante .close_float').before($('.produto .acoes-flutuante .acoes-produto'));
			$(".produto .acoes-flutuante").wrapInner("<div class='conteiner'></div>");
		}
		else if (resumoFlutuantePosicao === "lateral") {
			$(".produto .acoes-flutuante").addClass('flutuante-lateral');
		}
		$(".cep .btn").text('' + textoBotaoCep + '');
		$('.conteudo.span9 h1').after($('.coluna > .componente'));
		if (favoritoListagem === true) {
			$('<a class="favorito-icon" href="#"></a>').prependTo(".listagem-item"), $(".listagem-item").each(function () {
				var i = $(this).find(".info-produto .hide.trustvox-stars").attr("data-trustvox-product-code");
				$(this).find(".favorito-icon").attr("href", "/conta/favorito/" + i + "/adicionar")
			})
		}
		if (suporteFlutuante === true) {
			var floatwhatsapp = $('.tel-whatsapp a').attr('href');
			if (typeof facelink !== 'undefined') {
				var floatmessenger = facelink.replace("https://facebook.com/", "");
			}
			var skypelimpar = $('.tel-skype a').attr('href');
			if (typeof skypelimpar !== 'undefined') {
				var floatskype = skypelimpar.replace("skype:", "");
			}
			var flutuantedk = $('<div class="floating-container"><div class="floating-button"><svg class="icon-chat-flutuante"><use xlink:href="#chat-flutuante"></use></svg></div><div class="element-container"><a href="#modalContato" data-toggle="modal" data-target="#modalContato" target="blank" class="float-faleconosco" tittle="E-mail"><span class="float-element tooltip-left"><i class="fas fa-envelope"></i></span></a><a href="callto://' + floatskype + '" target="blank" class="float-skype" tittle="Skype"><span class="float-element tooltip-left"><i class="fab fa-skype"></i>/span></a><a href="https://m.me/' + floatmessenger + '" target="blank" class="float-messenger" tittle="Messenger"><span class="float-element tooltip-left"><i class="fab fa-facebook-messenger"></i></span></a><a href="' + floatwhatsapp + '" target="blank" class="float-whatsapp" tittle="Whatsapp"><span class="float-element tooltip-left"><i class="fab fa-whatsapp"></i></span></a></div></div>');
			$("body").prepend(flutuantedk);
			$(".floating-button").css('background', '' + corSuporteFlutuante + '');
			$(".floating-container").css('bottom', '' + suporteAltura + '');
			if (suporteFlutuantePosicao === "left") {
				$(".floating-container").css('left', '0');
			}
			if ($('.tel-whatsapp').length == 0) {
				$(".float-whatsapp").remove();
			}
			if (typeof floatmessenger === 'undefined') {
				$(".float-messenger").remove();
			}
			if ($('.tel-skype').length == 0) {
				$(".float-skype").remove();
			}
		}
		if (voltaraoTopo === true) {
			$('body').prepend('<a href="javascript:" id="return-to-top"><i class="icon-chevron-up"></i></a>');
			$(window).scroll(function () {
				if ($(this).scrollTop() >= 50) {
					$('#return-to-top').fadeIn(200);
				}
				else {
					$('#return-to-top').fadeOut(200);
				}
			});
			$('#return-to-top').click(function () {
				$('body,html').animate(
					{
						scrollTop: 0
					}, 500);
			});
		}
	}
	var tam2 = $(window).width();
	if (tam2 <= 768) {
		$('.menu.superior .nivel-um li a strong').css('color', '' + corPrimaria + '');
		$('.menu.superior li.com-filho>a i').css('color', '' + corPrimaria + '');
		$('.links-rodape-categorias ul li a:contains("ofertasfora")').closest('li').addClass("ofertas-especiais");
		$(".links-rodape-categorias ul .ofertas-especiais").remove();
		$('.lista-redes').find('.icon-facebook').closest('li').addClass('face-prov');
		var facelink = $('.face-prov a').attr('href');
		if (suporteFlutuante === true) {
			var floatwhatsapp = $('.tel-whatsapp a').attr('href');
			if (typeof facelink !== 'undefined') {
				var floatmessenger = facelink.replace("https://facebook.com/", "");
			}
			var skypelimpar = $('.tel-skype a').attr('href');
			if (typeof skypelimpar !== 'undefined') {
				var floatskype = skypelimpar.replace("skype:", "");
			}
			var flutuantedk = $('<div class="floating-container"><div class="floating-button"><svg class="icon-chat-flutuante"><use xlink:href="#chat-flutuante"></use></svg></div><div class="element-container"><a href="#modalContato" data-toggle="modal" data-target="#modalContato" target="blank" class="float-faleconosco" tittle="E-mail"><span class="float-element tooltip-left"><i class="fas fa-envelope"></i></span></a><a href="callto://' + floatskype + '" target="blank" class="float-skype" tittle="Skype"><span class="float-element tooltip-left"><i class="fab fa-skype"></i>/span></a><a href="https://m.me/' + floatmessenger + '" target="blank" class="float-messenger" tittle="Messenger"><span class="float-element tooltip-left"><i class="fab fa-facebook-messenger"></i></span></a><a href="' + floatwhatsapp + '" target="blank" class="float-whatsapp" tittle="Whatsapp"><span class="float-element tooltip-left"><i class="fab fa-whatsapp"></i></span></a></div></div>');
			$("body").prepend(flutuantedk);
			$(".floating-button").css('background', '' + corSuporteFlutuante + '');
			$(".floating-container").css('bottom', '' + suporteAltura + '');
			if (suporteFlutuantePosicao === "left") {
				$(".floating-container").css('left', '0');
			}
			if ($('.tel-whatsapp').length == 0) {
				$(".float-whatsapp").remove();
			}
			if (typeof floatmessenger === 'undefined') {
				$(".float-messenger").remove();
			}
			if ($('.tel-skype').length == 0) {
				$(".float-skype").remove();
			}
		}
		$('.atalhos-mobile').find('.icon-signout').closest('li').addClass('sair-mobile');
		$('.atalhos-mobile').find('.icon-user').closest('li').addClass('conta-mobile');
		$('.atalhos-mobile').find('.icon-shopping-cart').closest('li').removeClass('fundo-principal').addClass('carrinho-mobile');
		$('.atalhos-mobile').find('.icon-home').closest('li').addClass('home-mobile');
		$('.atalhos-mobile .carrinho-mobile a').append('<svg class="icart-mobile"><use xlink:href="#novocart"></use></svg>');
		$('.atalhos-mobile .conta-mobile a').append('<svg class="iconta-mobile"><use xlink:href="#novouser"></use></svg>');
		$(".home-mobile").remove();
		$(".todos-departamentos .nivel-dois .ofertas-especiais").remove();
		$(".todos-departamentos .nivel-dois .categoria-paginas").remove();
		$(".todos-departamentos .nivel-dois .categoria-marcas").remove();
		$('.atalhos-mobile ul').prepend('<li class="contato-mobile"><a href="#contato-rodape-mobile"><i class="far fa-comment-alt"></i></a></li>');
		$(".menu.superior .nivel-um li > a[title=ofertasfora]").closest('li').addClass("ofertas-especiais");
		$(".menu.lateral .nivel-um li > a[title=ofertasfora]").closest('li').addClass("ofertas-especiais");
		$(".menu.lateral .ofertas-especiais").remove();
		$(".menu.superior .ofertas-especiais").remove();
		$('.sobre-loja-rodape .titulo').text('' + tituloSobre + '');
		$('.links-rodape-paginas .titulo').text('' + tituloInstitucional + '');
		$('#rodape .pagamento .titulo').text('' + tituloPagamento + '');
		$('.selos .titulo').text('' + tituloSeguranca + '');
		$('#rodape .pagamento-selos .conteiner .row-fluid').append('<div class="span4 desenvolvimento"><ul><li class="logo-groomb"><a href="https://groomb.com.br" target="_blank"><img src="https://cdn.awsli.com.br/531/531444/arquivos/logo-rodape.png"></a></li><li class="logo-li"></li></ul></div>');
		$('#rodape > div:last-child .row-fluid > div:last-child a').addClass('li-a');
		$('.logo-li').append($('.li-a'));
		$('#rodape > div:last-child .row-fluid > div p').addClass('li-d');
		$('.sobre-loja-rodape').append($('.li-d'));
		$("#rodape > div:last-child").remove();
		$('#rodape > div:last-child .row-fluid > div p').addClass('li-d');
		$('#rodape .span12.visible-phone').attr('id', 'contato-rodape-mobile');
		$('.tabela-carrinho .formas-envio').parent().parent().removeClass('hidden-phone');
	}
	// Cores do tema
	$('.contato-mc ul li span').css('color', '' + corPrimaria + '');
	$('.rastreio span').css('color', '' + corPrimaria + '');
	$('.rastreio .botao i').css('color', '' + corPrimaria + '');
	$('.conta-mc ul li i').css('color', '' + corPrimaria + '');
	$('.busca .botao-busca').css('color', '' + corPrimaria + '');
	$('.abriga-menu').css('background-color', '' + corMenu + '');
	$('.menu.superior .nivel-dois .titulo-cat .titulo').css('color', '' + corPrimaria + ' !important');
	$('.todos-departamentos .nivel-dois .titulo').css('color', '' + corPrimaria + ' !important');
	$('.todos-departamentos>a').css('background-color', '' + corDepartamentos + '');
	$('.ofertas-especiais .box-texto h1').css('color', '' + corPrimaria + '');
	$('.ofertas-especiais .countdown-ofertas ul li').css('color', '' + corSecundaria + '');
	$('#cabecalho .carrino-total strong').css('color', '' + corPrimaria + '');
	$('.preco-produto strong.titulo').css('color', '' + corPrimaria + '');
	$('.bandeira-promocao').css('background-color', '' + corBandeiraPromocao + '');
	$('.bandeira-carrinho').css('background-color', '' + corPrimaria + '');
	$('.desconto-a-vista').css('color', '' + corAvista + '');
	$('.desconto-a-vista').css('border-color', '' + corAvista + '');
	$('.desconto-a-vista strong').css('color', '' + corAvista + '');
	$('.titulo-categoria').css('color', '' + corPrimaria + '');
	$('.listagem .produtos-carrossel .listagem-linha.flexslider .flex-direction-nav .flex-prev').css('color', '' + corPrimaria + '');
	$('.listagem .produtos-carrossel .listagem-linha.flexslider .flex-direction-nav .flex-next').css('color', '' + corPrimaria + '');
	$('.menu.lateral .com-filho .titulo').css('color', '' + corPrimaria + '');
	$('.menu.lateral.outras li .titulo').css('color', '' + corPrimaria + '');
	$('.conteudo h1').css('color', '' + corPrimaria + '');
	$('.filtro h4').css('color', '' + corPrimaria + '');
	$('#feedinstagram i').css('color', '' + corPrimaria + '');
	$('.newsletter-cadastro .botao').css('background-color', '' + corSecundaria + '');
	$('.news-icon').css('background-color', '' + corSecundaria + '');
	$('#barraNewsletter, #barraNewsletter .show-hide, #barraNewsletter .componente, #barraNewsletter.posicao-rodape .conteiner').css('background-color', '' + corPrimaria + '');
	$('#rodape .titulo').css('color', '' + corPrimaria + '');
	$('.atendimento-rodape .contato-mc i').css('color', '' + corPrimaria + ' !important');
	$('#rodape .lista-redes i').css('color', '' + corPrimaria + '');
	$('.links-rodape ul li a').hover(function () {
		$(this).css('background-color', '' + corPrimaria + '');
	}, function () {
		$(this).css('background-color', '#efefef');
	});
	$('#return-to-top i').css('color', '' + corPrimaria + '');
	$('.padrao-desc').css('color', '' + corPrimaria + '');
	$('.componente.newsletter').css('background-color', '' + corPrimaria + '');
	$('.atributo-comum a span').css('border-color', '' + corPrimaria + '');
	$('.cabecalho-interno h1').css('color', '' + corPrimaria + '');
	$('.carrinho-checkout .atendimento *').css('color', '' + corPrimaria + '');
	$('#modalContato .modal-header').css('background-color', '' + corPrimaria + '');
	$('.campos-pedido legend').css('color', '' + corPrimaria + '');
	$('.campos-pedido legend *').css('color', '' + corPrimaria + '');
	$('.caixa-dados h3').css('color', '' + corPrimaria + '');
	$('.caixa-dados legend').css('color', '' + corPrimaria + '');
	$('.conta-menu .menu-simples li i').css('color', '' + corPrimaria + '');
	$('.abas-conta li.active a').css('color', '' + corPrimaria + '');
	$('#modalNewsletter .componente .interno').css('background-color', '' + corPrimaria + '');
	$('#modalNewsletter .newsletter .botao').css('background-color', '' + corSecundaria + '');
	$('.conteudo-topo .busca-mobile .atalho-menu').css('background-color', '' + corSecundaria + '');
	$('.atalhos-mobile').css('background-color', '' + corPrimaria + '');
	// Inverte as cores da loja
	if (inverteCores === true) {
		$('.abriga-atendimento').css('color', '' + corBranco + '');
		$('#cabecalho .carrinho>a span b').css('color', '' + corBranco + '');
		$('#cabecalho').css('background-color', '' + corPrimaria + '');
		$('.abriga-atendimento').css('color', '' + corBranco + '');
		$('.bem-vindo').css('color', '' + corBranco + '');
		$('#cabecalho .carrinho>a span b').css('color', '' + corBranco + '');
		$('.texto-cart-cheio').css('color', '' + corBranco + '');
		$('#cabecalho .carrinho>a strong').css('color', '' + corBranco + '');
		$('.icon-novocart').css('fill', '' + corBranco + '');
		$('.icon-novouser').css('fill', '' + corBranco + '');
		$('.carrinho-checkout .atendimento *').css('color', '' + corBranco + '');
		$('.abriga-conta .btn-group a').css('color', '' + corBranco + '');
		$('#cabecalho .carrinho>a>span').css('color', '' + corBranco + '');
		$('.atalhos-mobile').css('background-color', '' + corBranco + '');
		$('.atalhos-mobile').css('background-color', '' + corPrimaria + '');
		$('.busca').css('border', 'none');
		$('.busca').css('box-shadow', 'none');
		$('#cabecalho .conteiner .row-fluid .span3').css('border', 'none');
	}
});