const appInsights = require('applicationinsights')
appInsights.setup()
appInsights.start()

require('./server')
