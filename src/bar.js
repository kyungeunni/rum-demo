export default function bar() {
    if (Math.round(Math.random() * 10) % 2 === 0) {
        throw new Error('THROWING at EVENs');
    }
}
