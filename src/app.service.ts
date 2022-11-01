import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBsm () : string {
    return 'Bsm da Generation Brasil <br> <br> 1 - Responsabilidade Pessoal <br> 2 - Mentalidade de Crescimento <br> 3 - Orientação ao furuto <br> 4 - Persistência <br> 5 - Comunicação <br> 6 - Trabalho em equipe <br> 7 - Atenção para Detalhes <br> 8 - Proatividade <br> 9 - Profissionalismo <br> 10 - Precisão Técnica';
  }
  getObjetivo() : string {
    return 'Objetivos de aprendizagem desta semana. <br> <br> 1 - Atenção para os detalhes <br> 2 - Trabalho em equipe <br> 3 - Profissionalismo';
  }
}
