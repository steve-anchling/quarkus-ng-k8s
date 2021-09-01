package com.techtalksteve.usermgmt.rest;

import com.techtalksteve.usermgmt.entity.User;
import com.techtalksteve.usermgmt.repository.UserRepository;
import lombok.AllArgsConstructor;

import javax.inject.Inject;
import javax.transaction.Transactional;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/api/user/management")
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
@AllArgsConstructor(onConstructor = @__(@Inject))
public class UserResource {

    private final UserRepository repository;

    @GET
    @Path("/all")
    public List<User> all() {
        return repository.findAll().list();
    }

    @GET
    @Path("/{id}")
    public User findById(@PathParam("id") long id) {
        return repository.findById(id);
    }

    @DELETE
    @Path("/{id}")
    @Transactional
    public boolean deleteById(@PathParam("id") long id) {
        return repository.deleteById(id);
    }

    @POST
    @Path("/save")
    @Transactional
    public void save(final User user) {
        final User domain = user.getId() == null ? new User() : repository.findById(user.getId());
        domain.setBirthdate(user.getBirthdate());
        domain.setFirstname(user.getFirstname());
        domain.setLastname(user.getLastname());
        if (!repository.isPersistent(domain)) {
            repository.persistAndFlush(domain);
        }
    }
}
