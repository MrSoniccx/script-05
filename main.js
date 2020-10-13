
class Main {
    constructor(vector)
    {this.vector = vector}

    llenar()
    {
        let x = 2
        for(let i=0; i !=10; i++)
        {
            this.vector[i]= x
            x+=2
        }
    }
    
    mostrar()
    {
        for(let i=0; i !=10; i++)
        {
            console.log(this.vector[i])
        }
    }

    girarDerecha()
    {
        let aux = this.vector[9]
        
        for(let i=9; i != -1; i--)
        {
            this.vector[i] = this.vector[i-1]
        }
        this.vector[0] = aux
    }
    girarIzquierda()
    {
        let aux = this.vector[0]
        
        for(let i=0; i != 9; i++)
        {
            this.vector[i] = this.vector[i+1]
        }
        this.vector[9] = aux
    }
    invertir()
    {
        let u = 9
        for(let i=0;i!=5;i++)
        {
            let aux = this.vector[i]
            this.vector[i] = this.vector[u]
            this.vector[u] = aux
            u--
        }
    }
}

let v = []
let start = new Main(v)

start.llenar()
start.invertir()
start.mostrar()

