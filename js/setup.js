var schema = window.location.hash.substr(1);
var SSID = schema.substring(1,schema.indexOf('`'));
var PSK = schema.substring(schema.indexOf('`')+1);
console.log(schema.indexOf('`'));

var networkName = document.getElementById("SSID");
var networkPass = document.getElementById("pass");

networkName.textContent += SSID;
networkPass.textContent += PSK;

var clipboard = new ClipboardJS('.btn');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});