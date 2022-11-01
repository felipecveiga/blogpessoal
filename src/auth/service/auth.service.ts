import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsuarioService } from "../../usuario/service/usuario.service";
import { Bcrypt } from "../bcrypt/bcrypt";
import { UsuarioLogin } from "../entities/usuariologin.entity";



@Injectable()
export class AuthService {

    constructor(


        private usuarioService: UsuarioService,
        private jwtService: JwtService,
        private bcrypt: Bcrypt
    ){ }


    async validarUsuario(username: string, password: string): Promise <any> {   

        const buscarUsuario = await this.usuarioService.findByUsuario(username) 

        if(!buscarUsuario)

            throw new HttpException('usuario não encontrado', HttpStatus.NOT_FOUND)

        const match = await this.bcrypt.compararSenha(buscarUsuario.senha, password)       


        if(buscarUsuario && match){
            const {senha,...result} = buscarUsuario  
        
            return result
        }

        return null;

    }

    async login(usuarioLogin: any){

        const payload = {userName: usuarioLogin.usuario, sub: "db_blogpessoal"}                    
    
        return {
            usuario: usuarioLogin.usuario,
            token: `Bearer ${this.jwtService.sign(payload)}`  
        }
    }



}