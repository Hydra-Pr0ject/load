const afterSplash = document.getElementById('afterSplash');
setTimeout(()=>{
    afterSplash.style.visibility = 'visible';
    splash.style.visibility = 'hidden';
    el.style.display = 'block';
}
, 3000);
function loadGame() {
    var URL = document.getElementById("eaglerVersion").value;
    var baseHTML = '<p>Click the <img style="opacity:0.5;" src="/images/fullscreen.png" /> button at the top right of the game to toggle fullscreen on and off.</p>' + '<div class="embed-responsive embed-responsive-16by9">' + '<div class="fs" style="padding-top:10px;width:42px;float:right;">' + '<div id="fsButton" title="Toggle Fullscreen"></div></div>' + '<iframe allow="clipboard-read; clipboard-write" id="game" src="' + URL + '" scrolling="no"></iframe></div>' + '<p style="margin-top:12px;margin-bottom:-4px;">Press <kbd>Esc</kbd> to show your cursor.</p>';
    document.getElementById("eaglerGame").innerHTML = baseHTML;
}
function loadFS() {
    $.getScript("https://minecraftforfreex.com/js/fs.js", function() {});
}
