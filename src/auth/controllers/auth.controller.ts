//ela gerencia nossa rota do service.

import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UsuarioLogin } from "../entities/usuariologin.entity";
import { LocalAuthGuard } from "../guard/local-auth.guard";
import { AuthService } from "../service/auth.service";


@ApiTags('Usuarios')
@Controller('/auth')
export class AuthController {
    constructor(private authService: AuthService){ } 


        @UseGuards(LocalAuthGuard)  
        @HttpCode(HttpStatus.OK)
        @Post('/logar')
        async login (@Body() user: UsuarioLogin): Promise <any>{
            return this.authService.login(user)
        }
    
}