
var gel = exports.gel = function(n) {
    if (n === 1)
        return 1;
    else if (n === 2)
        return 1;
    else
        return gel(n-1) + gel(n-2);
};

var gelLoop = exports.gelLoop = function(n) {
    var gelos = [];
    gelos[0] = 0;
    gelos[1] = 1;
    gelos[2] = 1;
    for (var i = 3; i <= n; i++) {
        gelos[i] = gelos[i-2] + gelos[i-1];
    }
    return gelos[n];
};

var gelAsync = exports.gelAsync = function(n, done) {
    if (n === 0)
        done(undefined, 0);
    else if (n === 1 || n === 2)
        done(undefined, 1);
    else {
        setImmediate(() => {
            gelAsync(n-1, (err, val1) => {
                if (err) done(err);
                else setImmediate(() => {
                    gelAsync(n-2, (err, val2) => {
                        if (err) done(err);
                        else done(undefined, val1+val2);
                    });
                });
            });
        });
    }
};

exports.gelPromise = function(n) {
    return new Promise((resolve, reject) => {
        gelAsync(n, (err, val) => {
            if (err) reject(err);
            else resolve(val);
        });
    });
};
