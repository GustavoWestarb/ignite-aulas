import { Readable } from 'node:stream'

class OneToHundredStream extends Readable {
    index = 1;

    _read(){
        const i = this.index++;

        setTimeout(() => {
            if (i > 5) {
                this.push(null);
            } else {
                const buf = Buffer.from(String(i));
    
                this.push(buf);
            }
        }, 1000)
    }
}

fetch('https://3334-gustavowest-igniteaulas-nmpv9ofydjw.ws-us84.gitpod.io', {
    method: 'POST',
    body: new OneToHundredStream(),
}).then(response => {
    return response.text()
}).then(data => {
    console.log(data);
})