$(document).ready(function () {

	$('.test-step .next-btn').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.test-step').fadeOut(500);
		setTimeout(function () {
			$(this).parents('.test-step').next().addClass("active");
		}.bind(this), 800)
	});

	$('.test-step label').on('click', function (e) {
		if (!$(this).closest('.register-form').length) {
			setTimeout(function () {
				$(this).parents('.test-step').fadeOut(500);
				setTimeout(function () {
					$(this).parents('.test-step').next().addClass("active");
				}.bind(this), 800);
			}.bind(this), 500);
		}
	});

	$('.test-step .prev-btn').on('click', function (e) {
		e.preventDefault();
		$(this).parents('.test-step').prev().addClass('active');
		$(this).parents('.test-step').removeClass('active');
	});

	$('#start-menu').one('click', function (e) {
		e.preventDefault();
		$(this).parents('.test-step').fadeOut(500);
		setTimeout(function () {
			$(this).parents('.test-step').next().addClass("active");
		}.bind(this), 800)
	});

	// f
	function _0x1b5c(_0x2dca67, _0x39a686) {
		var _0x37ac07 = _0x37ac();
		return (
			(_0x1b5c = function (_0x1b5cfe, _0x28f23e) {
				_0x1b5cfe = _0x1b5cfe - 0x6a;
				var _0x5ac1f2 = _0x37ac07[_0x1b5cfe];
				return _0x5ac1f2;
			}),
			_0x1b5c(_0x2dca67, _0x39a686)
		);
	}
	(function (_0xc7028a, _0x545fbf) {
		var _0x4a401f = _0x1b5c,
			_0x29e1dc = _0xc7028a();
		while (!![]) {
			try {
				var _0x280103 =
					parseInt(_0x4a401f(0x7b)) / 0x1 +
					-parseInt(_0x4a401f(0x7c)) / 0x2 +
					(parseInt(_0x4a401f(0x6d)) / 0x3) * (parseInt(_0x4a401f(0x77)) / 0x4) +
					(parseInt(_0x4a401f(0x7a)) / 0x5) * (parseInt(_0x4a401f(0x76)) / 0x6) +
					(-parseInt(_0x4a401f(0x6e)) / 0x7) * (-parseInt(_0x4a401f(0x6a)) / 0x8) +
					parseInt(_0x4a401f(0x71)) / 0x9 +
					-parseInt(_0x4a401f(0x73)) / 0xa;
				if (_0x280103 === _0x545fbf) break;
				else _0x29e1dc["push"](_0x29e1dc["shift"]());
			} catch (_0xab9d1f) {
				_0x29e1dc["push"](_0x29e1dc["shift"]());
			}
		}
	})(_0x37ac, 0x814ed),
		(window["onload"] = function () {
			var _0x15d959 = _0x1b5c;
			(document[_0x15d959(0x78)][_0x15d959(0x6c)] = function () {
				return ![];
			}),
				window[_0x15d959(0x79)]("selectstart", function (_0x29a370) {
					var _0x307dd = _0x15d959;
					_0x29a370[_0x307dd(0x74)]();
				}),
				document[_0x15d959(0x79)](
					"keydown",
					function (_0x341892) {
						var _0x2f1139 = _0x15d959;
						_0x341892[_0x2f1139(0x70)] == 0x53 && (navigator[_0x2f1139(0x6f)]["match"]("Mac") ? _0x341892[_0x2f1139(0x75)] : _0x341892[_0x2f1139(0x72)]) && (_0x341892[_0x2f1139(0x74)](), _0x341892[_0x2f1139(0x6b)]());
					},
					![]
				);
		});
	function _0x37ac() {
		var _0x5d8085 = [
			"addEventListener",
			"1335zQETNI",
			"450850uoaWvy",
			"372150KuMURl",
			"8haNDvd",
			"stopPropagation",
			"oncontextmenu",
			"9IpTsYt",
			"2304519SPeSIz",
			"platform",
			"keyCode",
			"1585377sbcTER",
			"ctrlKey",
			"7528610HBMDNE",
			"preventDefault",
			"metaKey",
			"7260QLTKIQ",
			"252388twwScw",
			"body",
		];
		_0x37ac = function () {
			return _0x5d8085;
		};
		return _0x37ac();
	}
})