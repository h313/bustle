const Router = require('koa-router');
const router = new Router({ prefix: '/driver' });
const koaBody = require('../app');

const db = require('../db/postgres'),
    sequelize = db.sequelize,
    Sequelize = db.Sequelize;
const client = require('../db/redis');
const Driver = require('../models/driver');
const DriverStats = require('../models/driver_stats');

router.get('/test', async (ctx, next) => {
    ctx.body = 'driver_working';
});

router.post('/signup', koaBody(), async (ctx, next) => {
    sequelize.sync().then(function() {
        return Driver.create({
            username: ctx.request.body.username,
            password: ctx.request.body.password,
            name: ctx.request.body.name,
            school: ctx.request.body.school
        });
    }).then(function(driver) {
        let driver_stats = new DriverStats({id: driver.id, name: driver.name, school: driver.school});
        driver_stats.save(function (err) {
            if (err) {
                console.log(err);
            } else {
                console.log('meow');
            }
        });
        console.log(driver.get({
            plain: true
        }));
    });
});

router.post('/update_location', async (ctx, next) => {
    client.set(ctx.request.body.id, [ctx.request.body.latitude, ctx.request.body.longitude]);
    ctx.body = {'success': 1};
});

module.exports = router;