(function() {
    function FsaService() {
        let crudServiceBaseUrl = "https://hksapi.herokuapp.com/fsa/GetGridData"

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: crudServiceBaseUrl
                },
                update: {
                    url: crudServiceBaseUrl + "/Products/Update",
                    dataType: "jsonp"
                },
                destroy: {
                    url: crudServiceBaseUrl + "/Products/Destroy",
                    dataType: "jsonp"
                },
                create: {
                    url: crudServiceBaseUrl + "/Products/Create",
                    dataType: "jsonp"
                },
                parameterMap: function(options, operation) {
                    if (operation !== "read" && options.models) {
                        return { models: kendo.stringify(options.models) };
                    }
                }
            },
            schema: {
                model: {
                    id: "Id",
                    fields: {
                        Id: { type: "string", defaultValue: 0 },
                        DisplayId: { type: "string" },
                        SequenceNumber: { type: "number" },
                        Code: { type: "string" },
                        Title: { type: "string" },
                        Type: { defaultValue: { Text: "", Id: "" } },
                        Classification: { defaultValue: { Text: "", Id: "", TypeId: "" } },
                        Sign: { defaultValue: { Text: "", Id: "" } },
                        IsEnabled: { type: "boolean" },
                        IsMandatory: { type: "boolean" },
                        DefaultAssertion: { type: "string" },
                        MandatoryAssertion: { type: "string" },
                        Cycles: { defaultValue: [] },
                        ScopeTags: {}
                    }
                }
            },
            batch: true
        });
    }

    angular.module("myApp")
        .service('FsaService', FsaService);
})();
