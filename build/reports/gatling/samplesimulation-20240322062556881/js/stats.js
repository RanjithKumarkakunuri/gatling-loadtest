var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "6300",
        "ok": "145",
        "ko": "6155"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "20"
    },
    "meanResponseTime": {
        "total": "1",
        "ok": "6",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "15",
        "ko": "2"
    },
    "percentiles1": {
        "total": "1",
        "ok": "3",
        "ko": "1"
    },
    "percentiles2": {
        "total": "1",
        "ok": "4",
        "ko": "1"
    },
    "percentiles3": {
        "total": "2",
        "ok": "8",
        "ko": "2"
    },
    "percentiles4": {
        "total": "16",
        "ok": "66",
        "ko": "16"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 145,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6155,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15",
        "ok": "0.345",
        "ko": "14.655"
    }
},
contents: {
"req_create-txn-requ-9894f": {
        type: "REQUEST",
        name: "create-txn-request",
path: "create-txn-request",
pathFormatted: "req_create-txn-requ-9894f",
stats: {
    "name": "create-txn-request",
    "numberOfRequests": {
        "total": "6300",
        "ok": "145",
        "ko": "6155"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "2",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "155",
        "ok": "155",
        "ko": "20"
    },
    "meanResponseTime": {
        "total": "1",
        "ok": "6",
        "ko": "1"
    },
    "standardDeviation": {
        "total": "3",
        "ok": "15",
        "ko": "2"
    },
    "percentiles1": {
        "total": "1",
        "ok": "3",
        "ko": "1"
    },
    "percentiles2": {
        "total": "1",
        "ok": "4",
        "ko": "1"
    },
    "percentiles3": {
        "total": "2",
        "ok": "8",
        "ko": "2"
    },
    "percentiles4": {
        "total": "16",
        "ok": "66",
        "ko": "16"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 145,
    "percentage": 2
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 6155,
    "percentage": 98
},
    "meanNumberOfRequestsPerSecond": {
        "total": "15",
        "ok": "0.345",
        "ko": "14.655"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
