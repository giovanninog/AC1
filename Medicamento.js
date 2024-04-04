class Medicamento {
    #codigo;
    #nome;
    #tipo;


    constructor(codigo, nome, tipo){
        this.#codigo = codigo;
        this.#nome = nome;
        this.#tipo = tipo;
    }

    get codigo(){
        this.#codigo;
    } 

    imprimir(){
        return "Medicamento\n\nCódigo: "+this.#codigo+"\nNome: "+this.#nome+"\nTipo: "+this.#tipo;
    }

}