import { apm } from '@elastic/apm-rum';

export async function addMockSpan() {
    console.log('adding custom mock span');
    const span = apm.startSpan('wait-for-timer', 'custom-span', { blocking: true });
    const ms = Math.floor(Math.random() * 3000);
    console.log('timeout ms:', ms);
    await new Promise(r => setTimeout(r, ms));
    span.end();
}
