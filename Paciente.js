class Paciente {
  #id;
  #nome;
  #medPrescrito;

  constructor(_id, _nome) {
    this.#id = _id;
    this.#nome = _nome;
    this.#medPrescrito = [];

  }
  get id() {
    return this.#id;
  }

  inserirMedicamentoPrescrito(medicamento) {
    this.#medPrescrito.push(medicamento);
  }

  removerMedicamentoPrescritoByCodigo(codigo) {
    this.#medPrescrito = this.#medPrescrito.filter(
      (medicamento) => medicamento.codigo === codigo
    );
  }

  getMedicamentoPrescrito(codigo) {
    return this.#medPrescrito.find(
      (medicamento) => medicamento.codigo === codigo
    );
  }

  imprimir() {
    return "Paciente:\n\nId: " + this.#id + "\nNome: " + this.#nome;
  }

  imprimirCompleto() {
    return (
      console.log(this.imprimir()) +
      "\n" +
      this.#medPrescrito.forEach((a) => console.log(a.imprimir()))
    );
  }
}
