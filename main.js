class Main {
  #pacientes = [];
  constructor() {}

  addPaciente(paciente) {
    this.#pacientes.push(paciente);
  }

  addMedicamentoPaciente(idPaciente, codigoMedicamento, nome, tipo) {
    let pacienteSelecionado = this.#pacientes.find((p) => p.id == idPaciente);
    let medicamento = new Medicamento(codigoMedicamento, nome, tipo);
    pacienteSelecionado.inserirMedicamentoPrescrito(medicamento);
  }

  transferirMedicamento(
    idPacienteOrigem,
    idPacienteDestino,
    codigoMedicamento
  ) {
    let pacienteOrigem = this.#pacientes.find((p) => p.id == idPacienteOrigem);
    let pacienteDestino = this.#pacientes.find(
      (p) => p.id == idPacienteDestino
    );
    pacienteOrigem.removerMedicamentoPrescritoByCodigo(codigoMedicamento);
    pacienteDestino.inserirMedicamentoPrescrito(codigoMedicamento);
  }

  mostrarTodosOsPacientes() {
    this.#pacientes.forEach((a) => a.imprimirCompleto());
  }
}

const main = new Main();

main.addPaciente(new Paciente(1, "Maria"));
main.addMedicamentoPaciente(1, 1, "Paracetamol", "Analgésico");
main.addMedicamentoPaciente(1, 2, "Amoxicilina", "Antibiótico");
main.mostrarTodosOsPacientes();
main.addPaciente(new Paciente(2, "João"));
main.transferirMedicamento(1, 2, 1);
main.mostrarTodosOsPacientes();
