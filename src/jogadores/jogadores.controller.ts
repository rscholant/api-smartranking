import { Body, Controller, Get, Post } from '@nestjs/common';
import { CriarJogadorDTO } from './dto/criar-jogador.dto';
import { JogadoresService } from './jogadores.service';

@Controller('api/v1/jogadores')
export class JogadoresController {
  constructor(private readonly jogadoresService: JogadoresService) {}
  @Get()
  async buscarJogadores() {
    return this.jogadoresService.buscarJogadores();
  }
  @Post()
  async criarAtualizarJogador(@Body() criaJogadorDTO: CriarJogadorDTO) {
    await this.jogadoresService.criarAtualizarJogador(criaJogadorDTO);
  }
}
