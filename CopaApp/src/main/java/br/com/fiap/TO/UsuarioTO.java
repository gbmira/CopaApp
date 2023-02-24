package br.com.fiap.TO;

public class UsuarioTO {
	private int rm;
	private String nome, login, senha;
	
	public UsuarioTO() {
		
	}
	
	public UsuarioTO(int rm, String nome, String login, String senha) {
		super();
		this.rm = rm;
		this.nome = nome;
		this.login = login;
		this.senha = senha;
	}

	public int getRm() {
		return rm;
	}
	public void setRm(int rm) {
		this.rm = rm;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}
	
	

}
