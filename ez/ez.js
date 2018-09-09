window.$ = window.jQuery = require('jquery');
const {ipcRenderer} = require('electron')
$(document).ready (() => {
    $('#koszt').html('10');

    var c = 0;
    var p = 0;
    setInterval(() => {
        c = ($('#btc').text()).slice(0, -4);
        c = Number(c)
        p = Number($('#predkosc').html());
        c = c+p;
        $('#btc').text(c+' BTC');
    }, 1000);
})

$('#lepsza').click( () => {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)

    switch($('#model').html()) {
        case "GTX 750ti":
            if(stan >= 10) {
                $('#btc').text(stan-10+' BTC');
                $('#model').text("GTX 1050ti");
                $('#predkosc').text("5");
                $('#koszt').text("100");
                przekryj();
            }
            break;
        case "GTX 1050ti":
            if(stan >= 100) {
                $('#btc').text(stan-100+' BTC');
                $('#model').text("GTX 1060");
                $('#predkosc').text("10");
                $('#koszt').text("500");
                przekryj();
            }
            break;
        case "GTX 1060":
            if(stan >= 500) {
                $('#btc').text(stan-500+' BTC');
                $('#model').text("RX 480");
                $('#predkosc').text("25");
                $('#koszt').text("1000");
                przekryj();
            }
            break;
        case "RX 480":
            if(stan >= 1000) {
                $('#btc').text(stan-1000+' BTC');
                $('#model').text("R9 390");
                $('#predkosc').text("50");
                $('#koszt').text("5000");
                przekryj();
            }
            break;
        case "R9 390":
            if(stan >= 5000) {
                $('#btc').text(stan-5000+ 'BTC');
                $('#model').text("Titan V");
                $('#predkosc').text("1000");
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

    var win = new BrowserWindow({ width: 300, height: 174, resizable: false, icon: iconpath });
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

// bonuski
// redmi note 4 
$('#b-rn4').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var ak = $('#b-rn4-ilosc').text()
    var ak = Number(ak)
    if(stan >= 30) {
        $('#btc').text(stan-30+' BTC');
        $('#b-rn4-ilosc').text(ak+1)
    }
})
// mi 7
$('#b-mi7').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var ak = $('#b-mi7-ilosc').text()
    var ak = Number(ak)
    if(stan >= 300) {
        $('#btc').text(stan-300+' BTC');
        $('#b-mi7-ilosc').text(ak+1)
    }
})
// pizza hawajska
$('#b-haw').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var ak = $('#b-haw-ilosc').text()
    var ak = Number(ak)
    if(stan >= 5) {
        $('#btc').text(stan-5+' BTC');
        $('#b-haw-ilosc').text(ak+1)
    }
})
// ajfa x
$('#b-ipx').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var ak = $('#b-ipx-ilosc').text()
    var ak = Number(ak)
    if(stan >= 3000) {
        $('#btc').text(stan-3000+' BTC');
        $('#b-ipx-ilosc').text(ak+1)
    }
})
// toster razer
$('#b-raz').click(function () {
    var stan = ($('#btc').text()).slice(0, -4);
    var stan = Number(stan)
    var ak = $('#b-raz-ilosc').text()
    var ak = Number(ak)
    if(stan >= 999) {
        $('#btc').text(stan-999+' BTC');
        $('#b-raz-ilosc').text(ak+1)
    }
})