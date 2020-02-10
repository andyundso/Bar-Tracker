import * as Koa from 'koa';
import * as Router from 'koa-router';
import Bar from "../entities/bar";
import {constants} from "http2";
import {Geocoder} from "../services/geocoder";

const routerOpts: Router.IRouterOptions = {
    prefix: '/bars',
};

const router: Router = new Router(routerOpts);

router.get('/find', async (ctx: Koa.Context) => {
    const geocoder = new Geocoder();
    ctx.body = await geocoder.geocodeAddress({...ctx.request.body});
});

router.get('/', async (ctx: Koa.Context) => {
    ctx.body = await Bar.find({ relations: ["visits"] })
});

router.get('/:bar_id', async (ctx: Koa.Context) => {
    const bar: Bar | undefined = await Bar.findOne(ctx.params.bar_id, { relations: ["visits"] });

    if (!bar) {
        ctx.throw(constants.HTTP_STATUS_NO_CONTENT)
    } else {
        ctx.body = bar;
    }
});

router.post('/', async (ctx: Koa.Context) => {
    const bar = new Bar();
    Object.assign(bar, {...ctx.request.body});
    await bar.save();

    ctx.body = bar;
});

router.delete('/:bar_id', async (ctx: Koa.Context) => {
    const bar: Bar | undefined = await Bar.findOne(ctx.params.bar_id);

    if (bar) {
        await Bar.remove(bar);
        ctx.status = constants.HTTP_STATUS_NO_CONTENT;
    } else {
        ctx.throw(constants.HTTP_STATUS_NOT_FOUND);
    }

});

router.patch('/:bar_id', async (ctx: Koa.Context) => {
    const bar: Bar | undefined = await Bar.findOne(ctx.params.bar_id, { relations: ["visits"] });

    if (bar) {
        const updatedBar: Bar = Object.assign(bar, ctx.request.body);
        await updatedBar.save();

        ctx.body = updatedBar
    } else {
        ctx.throw(constants.HTTP_STATUS_NOT_FOUND);
    }
});

export const barController = router;
