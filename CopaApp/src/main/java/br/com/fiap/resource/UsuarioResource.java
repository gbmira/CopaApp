package br.com.fiap.resource;



import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import br.com.fiap.BO.UsuarioBO;
import br.com.fiap.TO.UsuarioTO;

@Path("/login")
public class UsuarioResource {
	UsuarioBO ubo = new UsuarioBO(); 
	
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	@Produces(MediaType.APPLICATION_JSON)
	public Response LoginUser(UsuarioTO usuario) {
		
		return Response
				.status(200)
				.entity(ubo.validar(usuario))
				.build();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	@Path("/{rm}")
	public UsuarioTO getById(@PathParam("rm")int rm) {
		return ubo.consultar(rm);
		
	}
	
	

}
