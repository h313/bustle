# Driver API

### `/api/driver/update_location`
```
{
  lat: ctx.request.body.lat,
  long: ctx.request.body.long,
}
```

### `/api/driver/add_address`
```
{
  longitude: ctx.request.body.long,
  latitude: ctx.request.body.lat,
  address: ctx.request.body.address,
}
```
