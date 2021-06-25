class Blum_Blum_Shub{
    constructor(p=839,q=5119139,X=6176){
        this.p = p
        this.q = q
        this.X = X
        this.max = 10
    }
    setMax(a){
        this.max = a
    }
    setseed(p,q,X=6176){
        this.p = p
        this.q = q
        this.X = X
    }
    random(){
        this.X = this.X ** 2 % this.p * this.q
        return this.X % this.max
    }
}