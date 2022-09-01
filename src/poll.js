let isPolling = false;

export async function poll() {
    if (isPolling) {
        console.log('Already polling');
        return;
    }
    isPolling = true;
    await startPolling();
}

async function startPolling() {
    while (isPolling) {
        console.log('scheduling fetch...');
        await new Promise(r => setTimeout(r, 4000));
        await fetch('https://example.com', {
            mode: 'no-cors',
        });
    }
}

export function stopPoll() {
    if (!isPolling) {
        return;
    }
    console.log('stopping polling.');
    isPolling = false;
}
