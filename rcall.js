module.exports = function (method_name, args, response_callback, context) {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
           if(xmlhttp.status == 200) {
                var response = JSON.parse(xmlhttp.responseText);
                if (!(response && response.constructor === Array)) {
                    console.error("server response wasn't in the expected format")      
                }
                response_callback.apply(context, response);
           } else {
              console.error('error response from RPC request, status is', xmlhttp.status, '(', xmlhttp.responseText,')')
           }
        }
    }

    xmlhttp.open("POST", "/rpc-api", true);
    xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xmlhttp.send(JSON.stringify({
        'method_name': method_name,
        'args': args
    }));
};