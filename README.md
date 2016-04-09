# screenshot-stream-service

This is just a handy little service that exposes [`screenshot-stream`](http://npm.im/screenshot-stream) as an API.

This is deployed at:

```
https://calm-brushlands-70740.herokuapp.com
```

All `screenshot-stream` arguments/options are exposed via the query string. For example:

```
https://calm-brushlands-70740.herokuapp.com/?url=https://javascriptair.com/?feature-show=2016-04-13&size=1200x600&crop=true&filename=image.png
```

You can also specify a filename suggestion for what the file should be saved as with a `filename` query param.

## LICENSE

MIT
