const app = Vue.createApp({
    data: function() {
        return {
            product: 'Socks',
            image: './assets/images/socks_green.jpg',
            inventory: 20,
            details: ['50% cotton', '30% wool', '20% polyetster'],
            variants: [
                { id: 2234, color: 'green'},
                { id: 2235, color: 'blue'},
            ]
        }
    }
})