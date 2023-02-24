package br.com.fiap.resource;

import br.com.fiap.BO.UsuarioBO;
import br.com.fiap.DAO.UsuarioDAO;
import br.com.fiap.TO.UsuarioTO;

public class Teste {
	
	public static void main(String[] args) {
		UsuarioDAO udao = new UsuarioDAO();
		UsuarioTO uto = new UsuarioTO();
		UsuarioBO ubo  = new UsuarioBO();
		
		uto.setLogin("jhonatas2004@gmail.com");
		uto.setSenha("260404");
		//uto.setRm(1234);
		//uto.setNome("Jhonatas Oliveira da Silva");
		
		System.out.println(ubo.validar(uto).getLogin());
		
	}

}
