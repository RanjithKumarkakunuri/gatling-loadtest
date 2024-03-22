package com.olive.gatlingdemo.controller;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.olive.gatlingdemo.model.SampleXMLRequest;
import com.olive.gatlingdemo.model.SampleXMLResponse;

@RestController
public class XMLController {

    @PostMapping(value = "/xml", consumes = MediaType.APPLICATION_XML_VALUE, produces = MediaType.APPLICATION_XML_VALUE)
    public SampleXMLResponse handleXMLRequest(@RequestBody SampleXMLRequest xmlRequest) {
        // Process XML request and generate response
        SampleXMLResponse response = new SampleXMLResponse();
        response.setMessage("Hello " + xmlRequest.getName() + "!");
        System.out.println("SUCESS");
        return response;
    }
}
