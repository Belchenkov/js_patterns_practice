const Singleton = (function () {
    let instance;

    function createInstance() {
       return new Object({name: 'Name'});
    }

    return {
        getInstance: function () {
            if (!instance) instance = createInstance();

            return instance;
        }
    }
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA === instanceB);
