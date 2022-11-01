import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Postagem } from "../../postagem/entities/postagem.entities";




@Entity ({name: "tb_usuario"})

export class Usuario {


    @PrimaryGeneratedColumn()
    @ApiProperty()
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty()
    nome:string


    @IsEmail()
    @Column({length: 255, nullable: false})
    @ApiProperty({example: "email@email.com.br"})
    usuario: string //email


    
    @IsNotEmpty()
    @MinLength(8)
    @Column({length: 255, nullable: false})
    @ApiProperty()
    senha:string


    
    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    @ApiProperty()
    foto:string

    @ApiProperty({type: () => Postagem})
    @OneToMany(() => Postagem,(postagem) => postagem.usuario)
    postagem:Postagem[]
}