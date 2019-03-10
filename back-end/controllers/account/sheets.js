

const pg = require('pg');
const copyTo = require('pg-copy-streams').to;

pg.connect(function (err, client, done) {
    const stream = client.query(copyTo('COPY my_table TO STDOUT'));
    stream.pipe(process.stdout);
    stream.on('end', done);
    stream.on('error', done);
});