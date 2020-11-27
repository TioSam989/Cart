
		function atualizaImagemCarrinho() {

			var img = document.getElementById("cart");

			var vazio = document.getElementById("lista").innerHTML === "";

			if (vazio === true) {
				img.src = "cart.PNG"
			}

			if (vazio === false) {
				img.src = "cartCheio.PNG";
			}

			var NElementos = document.getElementsByTagName("ul")[0].childElementCount;
			console.log(vazio);

			document.getElementById("numeracao").innerHTML = NElementos;
		}

		function qualquerProduto(nomeDoProduto, valorDoProduto) {
			console.log({ nomeDoProduto, valorDoProduto });

			atualizarTotal(valorDoProduto);
			adicionarALista(nomeDoProduto);
			atualizaImagemCarrinho();
		}

		function atualizarTotal(valor) {
			var total = document.getElementById("total");
			var novoTotal = parseFloat(total.innerHTML) + valor;
			document.getElementById("total").innerHTML = novoTotal.toFixed(2);
		}

		function adicionarALista(nomeDoProduto) {
			
			document.getElementById("lista").innerHTML += "<li>" + nomeDoProduto + "</li>";

			}

		function LimpraLista() {
			document.getElementById("lista").innerHTML = "";
			atualizaImagemCarrinho();

			// document.getElementById("")
			
			document.getElementById("total").innerHTML = 0.0;
		}

		function finalizar() {

			var vazio = document.getElementById("lista").innerHTML === "";
			

			if (vazio === true) {
				alert("carrinho vazio, adicione produtos");
				return false;
			}

			if (vazio === false) {
				alert("voce sera redirecionado");
				return true;
			}
		}