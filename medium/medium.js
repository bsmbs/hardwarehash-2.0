window.$ = window.jQuery = require('jquery');
const {ipcRenderer} = require('electron')
$(document).ready (() => {
    $('#koszt').html('50');

    var c;
    var p;
    var bp;
    var gl;
    setInterval(() => {
        c = ($('#btc').text()).slice(0, -4);
        c = Number(c)
        p = Number($('#predkosc').html());
        bp = Number($('#predkosc-bonusowa').html());
        c = c+p+bp;
        $('#btc').text(c+' BTC');
    }, 1000);
    setInterval(() => {
        gl = $('#jedzenie').text();
        gl = Number(gl);
        if(gl <= 0) {
            $('body').html('wysiadł prąd bo nie zapłaciłeś rachunku!');
            // kod usuwajacy zapis
        } else {
            $('#jedzenie').text(gl-1);
        }
    }, 1000)
})

$('#lepsza').click( () => {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)

    switch($('#model').html()) {
        case "GTX 750ti":
            if(stan >= 50) {
                $('#btc').text(stan-50+' BTC');
                $('#model').text("GTX 1050ti");
                $('#predkosc').text("5");
                $('#koszt').text("500");
                przekryj();
            }
            break;
        case "GTX 1050ti":
            if(stan >= 500) {
                $('#btc').text(stan-500+' BTC');
                $('#model').text("GTX 1060");
                $('#predkosc').text("10");
                $('#koszt').text("1000");
                przekryj();
            }
            break;
        case "GTX 1060":
            if(stan >= 1000) {
                $('#btc').text(stan-1000+' BTC');
                $('#model').text("RX 480");
                $('#predkosc').text("20");
                $('#koszt').text("5000");
                przekryj();
            }
            break;
        case "RX 480":
            if(stan >= 5000) {
                $('#btc').text(stan-5000+' BTC');
                $('#model').text("R9 390");
                $('#predkosc').text("50");
                $('#koszt').text("100000");
                przekryj();
            }
            break;
        case "R9 390":
            if(stan >= 100000) {
                $('#btc').text(stan-5000+ 'BTC');
                $('#model').text("Titan V");
                $('#predkosc').text("100000");
                $('#lepsza').hide();
                przekryj();
            }
    }
})
$('#procek').click(function () {
    $('#predkosc').text("1");
    $('#samodzielnie').fadeIn();
    $('#procek').fadeOut();
})
$('#samodzielnie').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    $('#btc').text(stan+1+' BTC');
})
$('#op').click(function () {
    const remote = require('electron').remote
    const BrowserWindow = remote.BrowserWindow;
    const url = require('url');
    const path = require('path');
    let iconpath = path.join(__dirname, 'ikona.png')

    var win = new BrowserWindow({ width: 300, height: 174, icon: iconpath });
    win.loadURL(url.format ({
        pathname: path.join(__dirname, 'info.html'),
        protocol: 'file:',
        slashes: true
    }))
    win.setMenu(null)
})
function przekryj() {
    $('#samodzielnie').fadeOut();
    $('#procek').fadeIn();
}

/* $('#hak').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    $('#btc').text(stan+1000+' BTC');
}) */

// bonuski
// redmi note 4 
$('#b-rn4').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var pb = $('#predkosc-bonusowa').text();
    var pb = Number(pb)
    if(stan >= 30) {
        $('#btc').text(stan-30+' BTC');
        $('#predkosc-bonusowa').text(pb+1);
        $(this).fadeOut();
    }
})
// mi 7
$('#b-mi7').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var pb = $('#predkosc-bonusowa').text();
    var pb = Number(pb)
    if(stan >= 300) {
        $('#btc').text(stan-300+' BTC');
        $('#predkosc-bonusowa').text(pb+3);
        $(this).fadeOut();
    }
})
// pizza hawajska
$('#b-haw').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    if(stan >= 5) {
        $('#btc').text(stan-5+' BTC');
        $('#jedzenie').text('20');
    }
})
// ajfa x
$('#b-ipx').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var pb = $('#predkosc-bonusowa').text();
    var pb = Number(pb)
    if(stan >= 10000) {
        $('#btc').text(stan-10000+' BTC');
        $('#predkosc-bonusowa').text(pb+100);
        $(this).fadeOut();
    }
})
// toster razer
$('#b-raz').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var pb = $('#predkosc-bonusowa').text();
    var pb = Number(pb)
    if(stan >= 1999) {
        $('#btc').text(stan-999+' BTC');
        $('#predkosc-bonusowa').text(pb+10);
        $(this).fadeOut();
    }
})
$('#b-prd').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    if(stan >= 500) {
        $('#btc').text(stan-500+' BTC');
        setInterval(() => {
            gl = $('#jedzenie').text();
            gl = Number(gl);
            if(gl <= 3) {
                $('#jedzenie').text('20');
            }
    }, 1000)
        $(this).fadeOut();
        $('#b-haw').fadeOut();
}
})