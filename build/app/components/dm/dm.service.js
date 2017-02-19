(function() {
    function DmService() {
        let crudServiceBaseUrl = 'data/db.json';

        this.dataSource = new kendo.data.DataSource({
            transport: {
                read: {
                    url: crudServiceBaseUrl,
                    // data: {name: 'hemant'} 
                    // type: 'post' 
                }
                // create: {
                //     url: "service/products/update/",
                //     type: "post",
                // }
            }
        });

        this.treeData = [
                { id: 1, text: "0.00.01 Example Manual Object", docType: "file" }, {
                    id: 2, text: "1. Scoping",
                    docType: "folder",
                    items: [
                        { id: 3, text: "1.03.01 Scope Questionnaire", docType: "file" },
                        { id: 4, text: "1.01 Scope Questionnaire", docType: "file" },
                        { id: 5, text: "1.01.143.1 Scope Report", docType: "xls" },
                        { id: 6, text: "1.01 Label", docType: "docLabel" }
                    ]
                }, {
                    id: 7, text: "2. Identify and Asses risk",
                    docType: "folder",
                    items: [
                        { id: 8, text: "2.00.0.2 Scope Notes", docType: "file" },
                        { id: 9, text: "2.00.0.2 Scope Notes", docType: "file" },
                        { id: 10, text: "2.00.0.3 Scope Notes", docType: "file" },
                        { id: 11, text: "2.01 Untitled Folder", docType: "folder" }
                    ]
                }, {
                    id: 12, text: "3. Personal Collection",
                    docType: "folder",
                    items: [
                        { id: 13, text: "3.01 QA Report", docType: "report" },
                        { id: 14, text: "3.02 Screenshote 1", docType: "img" },
                        { id: 15, text: "3.02.324234 Screenshote 3", docType: "img",
                        items: [
                        { id: 13, text: "3.01 QA Report", docType: "report" },
                        { id: 14, text: "3.02 Screenshote 1", docType: "img" },
                        { id: 15, text: "3.02.324234 Screenshote 3", docType: "img", 
                        items: [
                        { id: 13, text: "3.01 QA Report", docType: "report" },
                        { id: 14, text: "3.02 Screenshote 1", docType: "img" },
                        { id: 15, text: "3.02.324234 Screenshote 3", docType: "img",
                        items: [
                        { id: 13, text: "3.01 QA Report", docType: "report" },
                        { id: 14, text: "3.02 Screenshote 1", docType: "img" },
                        { id: 15, text: "3.02.324234 Screenshote 3", docType: "img",
                        items: [
                        { id: 13, text: "3.01 QA Report", docType: "report" },
                        { id: 14, text: "3.02 Screenshote 1", docType: "img" },
                        { id: 15, text: "3.02.324234 Screenshote 3", docType: "img",
                        items: [
                        { id: 13, text: "3.01 QA Report", docType: "report" },
                        { id: 14, text: "3.02 Screenshote 1", docType: "img" },
                        { id: 15, text: "3.02.324234 Screenshote 3", docType: "img"}
                    ] }
                    ] }
                    ] }
                    ] }
                    ] }
                    ]
                }
            ];

        this.getDocData = function(id){
            return this.treeData.filter((item) => item.id === id)[0];
        };
    }

    angular.module("myApp")
        .service('DmService', DmService);
})();
