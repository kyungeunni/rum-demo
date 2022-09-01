
import { init as initApm } from '@elastic/apm-rum'
var apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'rum-transaction-demo',
  // Set the version of your application
  // Used on the APM Server to find the right sourcemap
  serviceVersion: '0.0.1',
  environment: 'demo',
  serverUrl: 'http://localhost:8200',
  // apmRequest: ({ xhr }) => {
  //   xhr.setRequestHeader('X-Forwarded-For', '220.244.41.16')
  //   return true;
  // }
})

export default apm;