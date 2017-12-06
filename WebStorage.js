var WebStorage = function (storage_type) {
    this.type = (typeof storage_type !== 'undefined') ? storage_type : 'localStorage';
    this.getJSON = function (key) {
        if (this.type === 'localStorage') {
            var object = localStorage.getItem(key);
            return JSON.parse(object);
        } else if (this.type === 'sessionStorage') {
            var object = sessionStorage.getItem(key)
            return JSON.parse(object)
        } else {
            return Cookies.getJSON(key);
        }
    }

    this.getItem = function (key) {
        if (this.type === 'localStorage') {
            return localStorage.getItem(key);
        } else if (this.type === 'sessionStorage') {
            return sessionStorage.getItem(key)
        } else {
            return Cookies.get(key);
        }
    }

    this.setItem = function (key, value) {
        if (this.type === 'localStorage') {
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        } else if (this.type === 'sessionStorage') {
            if (typeof value === 'object') {
                value = JSON.stringify(value);
            }
            sessionStorage.setItem(key, value);

        } else {
            Cookies.set(key, value, {expires: 365});
        }
    }

    this.removeItem = function (key) {
        if (this.type === 'localStorage') {
            localStorage.removeItem(key);
        } else if (this.type === 'sessionStorage') {
            sessionStorage.removeItem(key);
        } else {
            Cookies.remove(key);
        }
    }
    this.clear = function () {
        if (this.type === 'localStorage') {
            localStorage.clear()
        } else if (this.type === 'sessionStorage') {
            sessionStorage.clear()
        } else {
            var keys = document.cookie.match(/[^ =;]+(?=\=)/g);
            if (keys) {
                for (var i = keys.length; i--;)
                    document.cookie = keys[i] + '=0;expires=' + new Date(0).toUTCString()
            }
        }
    }
}