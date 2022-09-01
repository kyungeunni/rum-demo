# rum-demo

Demonstrate various types of transactions created by elastic RUM agent

## Instruction
1. Follow [Quick start guide](https://www.elastic.co/guide/en/apm/guide/8.4/apm-quick-start.html)
1. Update RUM configurations in `src/apm.js` (especially serverUrl)
1. run `npm run build` to bundle.
1. Run `npm run serve` and navigate to localhost:3000 and play around with buttons. Go to Kibana and check out data in:
  - Observability > User Experience > Dashboard 
  - Observability > APM > Services
1. When making changes in `src/*`, make sure to run `npm run build`.
