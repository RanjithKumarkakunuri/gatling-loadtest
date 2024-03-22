package com.olive.gatlingdemo;



import static io.gatling.javaapi.core.CoreDsl.StringBody;
import static io.gatling.javaapi.core.CoreDsl.global;
import static io.gatling.javaapi.core.CoreDsl.rampUsersPerSec;
import static io.gatling.javaapi.http.HttpDsl.http;
import static io.gatling.javaapi.http.HttpDsl.status;

import java.time.Duration;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;
import java.util.stream.Stream;

//import com.github.javafaker.Faker;

import io.gatling.javaapi.core.CoreDsl;
import io.gatling.javaapi.core.OpenInjectionStep.RampRate.RampRateOpenInjectionStep;
import io.gatling.javaapi.core.ScenarioBuilder;
import io.gatling.javaapi.core.Simulation;
import io.gatling.javaapi.http.HttpDsl;
import io.gatling.javaapi.http.HttpProtocolBuilder;

public class SampleSimulation extends Simulation {

    private static final HttpProtocolBuilder HTTP_PROTOCOL_BUILDER = setupProtocolForSimulation();

    private static final Iterator<Map<String, Object>> FEED_DATA = setupTestFeedData();

    private static final ScenarioBuilder POST_SCENARIO_BUILDER = buildPostScenario();

    public SampleSimulation() {

        setUp(POST_SCENARIO_BUILDER.injectOpen(postEndpointInjectionProfile())
          .protocols(HTTP_PROTOCOL_BUILDER)).assertions(global().responseTime()
          .max()
          .lte(100000), global().successfulRequests()
          .percent()
          .gt(90d));
    }

    private RampRateOpenInjectionStep postEndpointInjectionProfile() {
        int totalDesiredUserCount = 100; // 100 parallel users
        double rampUpIntervalSeconds = 60; // 1 minute

        // Calculate the number of users per second to achieve 100 users in 1 minute
        double usersPerSecond = totalDesiredUserCount / rampUpIntervalSeconds;

        return rampUsersPerSec(usersPerSecond).to(totalDesiredUserCount)
                .during(Duration.ofMinutes(1));
    }


    private static HttpProtocolBuilder setupProtocolForSimulation() {
        return HttpDsl.http.baseUrl("http://localhost:8080")
          .acceptHeader("application/xml")
          .maxConnectionsPerHost(100)
          .userAgentHeader("Gatling/Performance Test");
    }

    private static Iterator<Map<String, Object>> setupTestFeedData() {
        Iterator<Map<String, Object>> iterator;
        iterator = Stream.generate(() -> {
              Map<String, Object> stringObjectMap = new HashMap<>();
              stringObjectMap.put("txnId", UUID.randomUUID()
                      .toString());
              return stringObjectMap;
          })
          .iterator();
        return iterator;
    }

    private static ScenarioBuilder buildPostScenario() {
        return CoreDsl.scenario("Load Test Creating User")
          .feed(FEED_DATA)
          .exec(http("create-txn-request").post("/xml")
            .header("Content-Type", "application/xml")
            .body(StringBody("<SampleXMLRequest><name>John</name></SampleXMLRequest>"))
            .check(status().is(200))) ;// Check if the status code is 201 after POST request
        
        //System.out.println();
//          .exec(http("get-txns-request").get("/#{randomLong(2147483648,2147483658)}" )
//            .check(status().is(200))); // Check if the status code is 200 after GET request
    }

}