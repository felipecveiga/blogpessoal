import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "../../auth/guard/jwt-auth.guard";
import { Tema } from "../entities/tema.entity";
import { TemaService } from "../service/tema.service";

@ApiTags('Tema')
@UseGuards(JwtAuthGuard)
@Controller('/tema')
@ApiBearerAuth()
export class temaController {

    constructor(private readonly temaService: TemaService){ }

    //Get all
    @Get()
    @HttpCode(HttpStatus.OK)                                    
    findAll(): Promise<Tema[]> {
        return this.temaService.findAll()
    }


//Get Id
@Get('/:id')
@HttpCode(HttpStatus.OK)
findById(@Param('id',ParseIntPipe) id: number) : Promise<Tema>{
    return this.temaService.findById(id)
}


//Get descrição
@Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByDescricao(@Param('descricao') descricao: string) : Promise<Tema[]> {
        return this.temaService.findByDescricao(descricao)
    }

//Post
@Post()
@HttpCode(HttpStatus.CREATED)
create(@Body() tema: Tema ): Promise<Tema>{
    return this.temaService.create(tema)
}

//Put
@Put()
@HttpCode(HttpStatus.OK)
update (@Body() tema: Tema ): Promise<Tema>{                

    return this.temaService.update(tema)
}


//Delet
@Delete('/:id')
@HttpCode(HttpStatus.NO_CONTENT)
delete(@Param('ide',ParseIntPipe) id: number){
    return this.temaService.delete(id)
}

}

