
import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({
  serviceName: 'rum-transaction-demo',
  serviceVersion: '0.0.1',
  environment: 'demo',
  serverUrl: 'http://localhost:8200',
})

export default apm;
