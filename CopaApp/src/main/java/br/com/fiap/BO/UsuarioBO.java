package br.com.fiap.BO;

import br.com.fiap.DAO.UsuarioDAO;
import br.com.fiap.TO.UsuarioTO;

public class UsuarioBO {
	UsuarioDAO userDAO = null;
	
	public UsuarioTO validar(UsuarioTO userTO) {
		userDAO = new UsuarioDAO();
		return userDAO.loginDAO(userTO);
	}
	public UsuarioTO consultar(int rm) {
		userDAO = new UsuarioDAO();
		return userDAO.select(rm);
	}

}
