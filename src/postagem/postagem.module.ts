import { Module } from "@nestjs/common/decorators";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemController } from "./controller/postagem.controller";
import { Postagem } from "./entities/postagem.entities";
import { PostagemService } from "./service/postagem.service";

@Module({
    imports:[TypeOrmModule.forFeature([Postagem])],
    providers:[PostagemService],
    controllers:[PostagemController],
    exports:[TypeOrmModule]
})

export class PostagemModule {}