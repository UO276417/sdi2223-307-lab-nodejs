package com.uniovi.sdi;

import org.codehaus.jackson.node.*;

import javax.ws.rs.client.*;
import javax.ws.rs.core.*;
public class UpdateMemoryThread extends Thread {
    Window window;
    public UpdateMemoryThread(Window window) {
        this.window = window;
    }
    public void run() {
        ObjectNode responseJSON;
        responseJSON = ClientBuilder.newClient()
                .target("http://localhost:3000/memory")
                .request()
                .accept(MediaType.APPLICATION_JSON)
                .get()
                .readEntity(ObjectNode.class);
        String memory = responseJSON.get("memory").toString();
        window.updateMemory(memory);
    }}
