new Vue({
    el: '#app',
    data: {
        title: 'Hello World',

        /* #3 - se lo llama con v-bind:href y sin {{}} */
        link: 'https://vuejs.org/v2/guide/installation.html',

        /* #5 - Renderizar elemento, no string */
        finishedLink: '<a href="https://vuejs.org/v2/guide/installation.html" style="color: white;">VUE</a>',

        counterI: 0,
        counterII: 0,

        /* #7 - Se modifica con v-show(display none) */
        condicional: true,

        /* #8 - Iteracion de array */
        ingredients: ['sugar', 'water', 'milk'],

        /* #8.2 - Iteracion de arrays de objetos */
        persons: [
            {name: 'sam', age: 22, nickname: 'sam99s'},
            {name: 'juan', age: 24, nickname: 'juanse'}
        ],

        mensaje: 'No se trata de levantarse, sino de tropezar… tropezar en la dirección adecuada. Ese es el verdadero camino para avanzar.',

        /* #10 - css class (cambia de color al clicker, dependiendo del attachRed = !attachRed) */
        attachRed: false,
        fondo: 'red',

        /* #10.2 - css class para cambiar el bg */
        color: true
    },

    computed: {
        /* se puede invocar a function sin los : */

        /* #9 - Solo se ejecuta 1 vez y queda guardado en cache, haciendo mas rapida la carga del sitio web */
        invertido() {
            return this.mensaje.split('').reverse().join('');
        }
    },

    methods: {
        /* #1 - no funciona con arrow function */
        /* Ademas tener en cuenta que en #4 se cambia el titulo (sacar dicha instruccion para que esta funcione) y el v-once del elemento en html */
        changeTitle: function(event) {
            this.title = event.target.value
        },

        /* #2 - Llamado a una funcion */
        saludo: function(){
            return this.title
        },

        /* #4 - Directiva v-once (ver #1 y #2 en el HTML que solo escucha lo que hay en data y no esta pendiente de modificaciones) */
        cambiaso: function(){
            this.title = "Hello"
            return this.title
        },

        /* Uno suma con button (evento) y otro dependiendo el argumento que le pasemos */
        increase: function(){
            this.counterI++
        },
        /* event se pasa en el html como $event */
        increaseA: function(step, event){
            this.counterII += step
        },

        /* #9 - Se ejecutan cada vez que algo relacionado se modifica */
        invested: function(){
            return this.mensaje.split('').reverse().join('');
        }
        
    }
})