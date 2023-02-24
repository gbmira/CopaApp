package br.com.fiap.DAO;

import java.util.ArrayList;
import java.util.List;

import br.com.fiap.TO.UsuarioTO;

public class UsuarioDAO {

	public static List<UsuarioTO> listaUsuario;

	public UsuarioDAO() {
		if (listaUsuario == null) {

			listaUsuario = new ArrayList<UsuarioTO>();

			UsuarioTO user = new UsuarioTO();
			user.setLogin("jhonatas2004@gmail.com");
			user.setSenha("260404");
			user.setRm(1234);
			user.setNome("Jhonatas Oliveira da Silva");
			listaUsuario.add(user);

			user = new UsuarioTO();
			user.setLogin("nathaliaLopes123@gmail.com");
			user.setSenha("12345j");
			user.setRm(93423);
			user.setNome("Nathalia Lopes");
			listaUsuario.add(user);

			user = new UsuarioTO();
			user.setLogin("gbmira@gmail.com");
			user.setSenha("54321");
			user.setRm(12324);
			user.setNome("Gabriel Mira");
			listaUsuario.add(user);

			user = new UsuarioTO();
			user.setLogin("Lucasmontano@gmail.com");
			user.setSenha("902234");
			user.setRm(4315);
			user.setNome("Lucas Montano");
			listaUsuario.add(user);

		}
	}

	public UsuarioTO loginDAO(UsuarioTO u) {
		try {
			for (int i = 0; i < listaUsuario.size(); i++) {
				if (listaUsuario.get(i).getLogin().equals(u.getLogin())
						&& listaUsuario.get(i).getSenha().equals(u.getSenha())) {
					return listaUsuario.get(i);
				}
			}
			return null;
			
		} catch (Exception e) {
			System.out.println("Login e/ou senha estão invalidos!");
			e.getMessage();
			return null;
		}

	}
	
    public UsuarioTO select(int rm) {
        for (int i = 0; i < listaUsuario.size(); i++) {
            if (listaUsuario.get(i).getRm() == rm) {
                return listaUsuario.get(i);
            }
        }
        return null;
    }
	
	
}
