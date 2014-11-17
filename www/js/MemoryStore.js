var MemoryStore = function(successCallback, errorCallback) {

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.classes = [
      {
        "name": "CS147",
        "instructor": false,
        "passcode": -1,
        "id": 100,
        "deleted": false
      },
      {
        "name": "CS110",
        "instructor": true,
        "passcode": -1,
        "id": 101,
        "deleted": false
      },
      {
        "name": "CS103",
        "instructor": false,
        "passcode": -1,
        "id": 102,
        "deleted": false
      },
      {
        "name": "PSYCH209",
        "instructor": false,
        "passcode": -1,
        "id": 103,
        "deleted": true
      }];
    this.office_hours = [
    {
      "instructor_name": "Howon Lee",
      "id": 200,
      "location": "Huang Rm 210",
      "day": "Tuesday",
      "begin": "12 PM",
      "end": "2 PM",
      "class_id": 100,
      "class_name": "CS147",
      "queue": [
      {"name": "Thuy Ny L", "problem": "PSET 2 1a"},
      {"name": "Chris P", "problem": "PSET 2"}
      ]
    },
    {
      "instructor_name": "Susan Tang",
      "id": 201,
      "location": "Gates B24",
      "day": "Monday",
      "begin": "3 PM",
      "end": "4 PM",
      "class_id": 100,
      "class_name": "CS147",
      "queue": [
      {"name": "Bob D", "problem": "PSET 2 1a"},
      {"name": "Alice P", "problem": "PSET 2"}
      ]

    },
    {
      "instructor_name": "Charlie Smith",
      "id": 202,
      "location": "330- 120",
      "day": "Thursday",
      "begin": "1 PM",
      "end": "4 PM",
      "class_id": 100,
      "class_name": "CS147",
      "queue": [
      {"name": "Matt Damon", "problem": "PSET 2 1a"},
      {"name": "Bob D", "problem": "PSET 2"}
      ]
    }];
    this.qsets = [
    {
      "title": "Reading Quiz 2",
      "time_remaining": "7 hours remaining",
      "is_poll": false,
      "questions": [
      {
        "text": "Question 1 of 2:\n\n Who invented the Dynabook?",
        "choices": ["Douglas Engelbart", "Steve Jobs", "Alan Kay", "James Landay"],
        "is_multiplechoice": true
      },
      {
        "text": "Question 2 of 2:\n\n True or False. For small buttons, the best color to use is blue.",
        "is_multiplechoice": false
      }]
    },
    {
    },
    {
    }];
    callLater(successCallback);
}
