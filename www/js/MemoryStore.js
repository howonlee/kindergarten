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
    },
    {
    },
    {
    }];
    this.qsets = [
    {
    },
    {
    },
    {
    }];
    callLater(successCallback);
}
