!(function (window) {

    function Jsonp(param) {
        let ele = document,
            script = ele.createElement('script'),
            result = null,
            _url = param.url || '',
            _success = param.success || function () { },
            _error = param.error || function () { };
        if( !param.callbackName ){
            throw new Error('callbackName is required!');
        }
        window[param.callbackName] = function(){ result = arguments[0]; };

        ele.getElementsByTagName('head')[0].appendChild(script);

        script.onload = script.readystatechange = function () {
            if (!script.readyState || /loaded|complete/.test(script.readyState)) {
                _success(result);
                script.onload = script.readystatechange = null;
            }else{
                _error();
            }
        }
        
        script.src = _url;
    }

    window.Jsonp = Jsonp;

})(window);