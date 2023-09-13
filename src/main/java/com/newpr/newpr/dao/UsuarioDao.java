package com.newpr.newpr.dao;
import com.newpr.newpr.models.Usuario;
import java.util.List;

public interface UsuarioDao {
    List<Usuario> getUsuarios();

    void eliminar (Long id);

    void registrar(Usuario usuario);

    Usuario obeterUser(Usuario usuario);
}
