package com.newpr.newpr.controllers;

import com.newpr.newpr.models.Usuario;
import com.newpr.newpr.dao.UsuarioDao;
import com.newpr.newpr.utils.JWTUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {
    @Autowired
    private UsuarioDao usuarioDao;

    @Autowired
    private JWTUtil jwtUtil;

    @RequestMapping(value = "api/login", method = RequestMethod.POST)
    public String login(@RequestBody Usuario usuario){
        Usuario user = usuarioDao.obeterUser(usuario);

        if (user != null){
        String token = jwtUtil.create(String.valueOf(user.getId()),user.getEmail() );
            return token;
        }else{
            return "FAIL";
        }
    }
}
